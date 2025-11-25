// 贸易数据配置文件
// 用于维护有贸易生意的国家、对应的业务以及显示颜色

// --- 贸易热度数据 --- 
// 键为国家ISO代码，值包含贸易热度值(val)和产品列表(products)
export const tradeData = {
  "CHN": { val: 10.0, products: ["总部核心研发", "精密制造基地", "全球供应链中心"] },
  "USA": { val: 8.5, products: ["AI 服务器", "高精医疗设备"] },
  "DEU": { val: 7.8, products: ["工业机器人", "新能源电控"] },
  "JPN": { val: 6.5, products: ["柔性 OLED", "光刻胶"] },
  "RUS": { val: 5.0, products: ["重型机械", "能源设备"] },
  "GBR": { val: 5.2, products: ["金融软件"] },
  "FRA": { val: 4.8, products: ["航天材料"] },
  "IND": { val: 5.5, products: ["智能手机", "基建机械"] },
  "BRA": { val: 4.5, products: ["农业无人机"] },
  "AUS": { val: 3.8, products: ["矿山自动化"] },
  "SAU": { val: 4.0, products: ["智慧城市安防"] },
  "IDN": { val: 3.5, products: ["电动交通工具"] },
  "VNM": { val: 3.2, products: ["消费电子组件"] },
  "KOR": { val: 5.0, products: ["芯片封装"] },
  "ITA": { val: 3.0, products: ["设计服务"] },
  "CAN": { val: 2.8, products: ["通讯基站"] }
};

// --- 贸易热度颜色映射规则 --- 
// 根据贸易热度值(val)返回对应的颜色
export const tradeColorRules = [
  { min: 8, color: '#ffd700' },  // 战略级：金色
  { min: 5, color: '#00ff99' },  // 核心级：绿色
  { min: 3, color: '#00aaff' },  // 重要级：蓝色
  { min: 0, color: '#1e6091' }   // 一般级：深蓝色
];

// 根据贸易值获取对应颜色
export function getTradeColor(data) {
  if (!data) return '#1e6091';
  for (const rule of tradeColorRules) {
    if (data.val > rule.min) {
      return rule.color;
    }
  }
  return tradeColorRules[tradeColorRules.length - 1].color;
}