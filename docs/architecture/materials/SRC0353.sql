-- Camera DDR scenario model: 1920x1536, packed YUV422, 2 Byte/pixel.
WITH params AS (SELECT 1920.0 AS w, 1536.0 AS h, 2.0 AS bpp),
fps AS (SELECT 25.0 AS fps UNION ALL SELECT 30.0),
base AS (
  SELECT fps, w*h*fps/1000000.0 AS single_mpixel_s,
         w*h*bpp*fps*4.0/1000000000.0 AS p_gb_s
  FROM params CROSS JOIN fps
),
scenarios(scenario, producer_p, e2e_p, assumption) AS (VALUES
  ('OTF七输出',1.75,3.50,'Composite不完整落DDR'),
  ('Staged四共享',3.00,4.75,'写四方向物理Buffer并由AVM/DVR共享'),
  ('Staged七独立',3.75,5.50,'P2读取一次Composite并写七个输出'),
  ('输入读放大示例',4.50,6.25,'多输出累计输入读取为1.75P；非上界')
)
SELECT scenario, CAST(fps AS INTEGER)||'fps' AS fps_label,
       p_gb_s*producer_p AS producer_gb_s, p_gb_s*e2e_p AS e2e_gb_s,
       e2e_p AS p_factor, assumption, single_mpixel_s,
       single_mpixel_s*3.0 AS pqdip_load_mpixel_s,
       single_mpixel_s*3.0/250.0 AS pqdip_utilization
FROM base CROSS JOIN scenarios ORDER BY scenario,fps;
