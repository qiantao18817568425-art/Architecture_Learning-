-- Canonical serialized lineage used by the report history table.
SELECT * FROM (VALUES
  ('2026-08-25','通用虚拟化模型','4x1920x1080@30；2x3840x1080 Composite','建立1P/3P、VC直达、实时拆分和Staged方法','方法保留，尺寸被替代'),
  ('2026-09-03','会议材料解读','单方向1920x1526@25；Composite 3840x1526','73.248Mpixel/s；PQDIP三路219.744；PQDIP6+MML1','分流保留，尺寸被替代'),
  ('2026-09-04','物理拓扑确认','单方向1920x1536；Composite 3840x1536','确认MAX96712/MAX96717、前+右和后+左、3/6Gbps','当前几何与链路基线'),
  ('2026-09-04','最终可追溯版','1536高度；同时核算25/30fps','重算PQDIP、DDR、Buffer、GMSL、CPU copy与Vcodec辅助指标','当前评审主文档')
) AS history(date,stage,geometry,conclusion,status)
ORDER BY date,stage;
