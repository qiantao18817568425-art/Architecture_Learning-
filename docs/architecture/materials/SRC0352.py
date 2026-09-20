"""Reproducible MT8668 Camera DDR and pixel-throughput calculations.

All bandwidth outputs use decimal MB/s or GB/s.  The script deliberately
separates pixel throughput (Mpixel/s), link payload (Gbit/s), and DDR traffic
(GB/s).  It prints CSV so results can be diffed against the report.
"""

from dataclasses import dataclass


@dataclass(frozen=True)
class CameraConfig:
    width: int = 1920
    height: int = 1536
    bytes_per_pixel: int = 2  # packed YUV422: UYVY or YUYV
    directions: int = 4
    business_outputs: int = 7  # AVM 4 + DVR left/right/rear 3
    pqdip_outputs_per_instance: int = 3
    pqdip_capacity_mpixel_s: float = 250.0  # meeting assumption, not MTK sign-off


def values(fps: int, cfg: CameraConfig) -> dict[str, float]:
    single_pixel_s = cfg.width * cfg.height * fps
    single_mb_s = single_pixel_s * cfg.bytes_per_pixel / 1_000_000
    p_gb_s = single_mb_s * cfg.directions / 1_000
    output_factor = cfg.business_outputs / cfg.directions  # 7/4 = 1.75P

    pqdip_load = (
        single_pixel_s * cfg.pqdip_outputs_per_instance / 1_000_000
    )

    return {
        "fps": fps,
        "single_mpixel_s": single_pixel_s / 1_000_000,
        "single_mb_s": single_mb_s,
        "single_link_gbit_s": single_pixel_s * cfg.bytes_per_pixel * 8 / 1_000_000_000,
        "composite_link_gbit_s": single_pixel_s * 2 * cfg.bytes_per_pixel * 8 / 1_000_000_000,
        "p_gb_s": p_gb_s,
        "seven_output_write_gb_s": output_factor * p_gb_s,
        "otf_seven_e2e_gb_s": 2 * output_factor * p_gb_s,
        "staged_shared4_producer_gb_s": 3 * p_gb_s,
        "staged_shared4_e2e_gb_s": (3 + output_factor) * p_gb_s,
        "staged_seven_producer_gb_s": (2 + output_factor) * p_gb_s,
        "staged_seven_e2e_gb_s": (2 + 2 * output_factor) * p_gb_s,
        "amplified_read_producer_gb_s": (1 + 2 * output_factor) * p_gb_s,
        "amplified_read_e2e_gb_s": (1 + 3 * output_factor) * p_gb_s,
        "one_full_copy_extra_gb_s": 2 * p_gb_s,
        "pqdip_load_mpixel_s": pqdip_load,
        "pqdip_utilization_pct": pqdip_load / cfg.pqdip_capacity_mpixel_s * 100,
        "pqdip_headroom_mpixel_s": cfg.pqdip_capacity_mpixel_s - pqdip_load,
    }


def buffer_values(cfg: CameraConfig, output_buffers: int = 6, composite_buffers: int = 3) -> dict[str, float]:
    single_bytes = cfg.width * cfg.height * cfg.bytes_per_pixel
    composite_bytes = single_bytes * 2
    shared4_bytes = single_bytes * cfg.directions * output_buffers
    seven_bytes = single_bytes * cfg.business_outputs * output_buffers
    composite_pool_bytes = composite_bytes * 2 * composite_buffers
    return {
        "single_frame_mb": single_bytes / 1_000_000,
        "single_frame_mib": single_bytes / 1024**2,
        "composite_frame_mb": composite_bytes / 1_000_000,
        "composite_frame_mib": composite_bytes / 1024**2,
        "shared4_pool_mb": shared4_bytes / 1_000_000,
        "seven_pool_mb": seven_bytes / 1_000_000,
        "composite_pool_mb": composite_pool_bytes / 1_000_000,
        "staged_shared4_total_mb": (shared4_bytes + composite_pool_bytes) / 1_000_000,
        "staged_seven_total_mb": (seven_bytes + composite_pool_bytes) / 1_000_000,
    }


def main() -> None:
    cfg = CameraConfig()
    rows = [values(25, cfg), values(30, cfg)]
    columns = list(rows[0])
    print(",".join(columns))
    for row in rows:
        print(",".join(f"{row[column]:.9f}" for column in columns))

    print("\nmetric,value")
    for metric, value in buffer_values(cfg).items():
        print(f"{metric},{value:.9f}")


if __name__ == "__main__":
    main()
