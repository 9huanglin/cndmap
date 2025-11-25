# 3D全息地图 - 全球贸易分布可视化

一个基于globe.gl的3D交互式全球贸易分布可视化应用。

## 功能特性

- 🌍 3D交互式地球可视化
- 📊 实时显示全球贸易数据
- 🎨 根据贸易热度动态着色
- 🔍 悬停高亮显示详细信息
- 📱 响应式设计，支持多种设备

## 技术栈

- HTML5 + CSS3 + JavaScript
- [globe.gl](https://github.com/vasturiano/globe.gl) - WebGL地球可视化库

## 文件结构

```
.
├── 全息地图.html       # 主HTML文件
├── trade-data.js       # 贸易数据配置文件
└── README.md          # 项目说明文档
```

## 部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 在GitHub上创建一个新的仓库
2. 克隆仓库到本地

### 步骤2：上传文件
将以下文件上传到仓库根目录：
- `全息地图.html`
- `trade-data.js`
- `README.md` (可选，但建议添加)

### 步骤3：启用GitHub Pages
1. 进入仓库的「Settings」页面
2. 滚动到「GitHub Pages」部分
3. 在「Source」下拉菜单中选择「main」分支
4. 点击「Save」按钮
5. 等待几分钟，GitHub Pages就会部署完成

### 步骤4：访问应用
部署完成后，你可以通过以下URL访问应用：
```
https://你的GitHub用户名.github.io/仓库名称/全息地图.html
```

## 数据维护

所有贸易数据都集中在 `trade-data.js` 文件中，你可以直接修改该文件来更新数据：

- **添加新国家**：在 `tradeData` 对象中添加新的国家ISO代码和对应数据
- **修改贸易数据**：调整现有国家的 `val` 值（贸易热度）和 `products` 列表
- **调整颜色规则**：修改 `tradeColorRules` 数组中的颜色映射

## 注意事项

1. 应用使用了ES模块语法，需要现代浏览器支持
2. 地图数据和globe.gl库通过CDN获取，无需本地部署
3. 在本地开发时，建议通过本地服务器访问，避免跨域问题
4. GitHub Pages部署后，可能需要几分钟才能生效

## 本地开发

### 方法1：使用Python内置服务器
```bash
python -m http.server 8000
```
然后访问：http://localhost:8000/全息地图.html

### 方法2：使用Node.js的http-server
```bash
npm install -g http-server
http-server -p 8000
```
然后访问：http://localhost:8000/全息地图.html

## 浏览器兼容性

- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 79+

## 许可证

MIT
