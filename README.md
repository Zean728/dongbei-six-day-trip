# 东北六日 · 四人路书

长春、延吉和长白山六日旅行攻略，适配手机浏览。页面包含每日安排、天气、地点地图和高德目的地入口，供同行四人查看。

线上页面：[https://zean728.github.io/dongbei-six-day-trip/](https://zean728.github.io/dongbei-six-day-trip/)

## 页面功能

- 按天查看行程，手机端点选日期会滚动到当天卡片。
- 查看当天地点地图，选择地点后可打开高德目的地或复制地址。
- 查看长春、延吉、松江河、二道白河和长白山天池附近的天气。
- 支持手机浏览器和桌面浏览器。

## 本地预览

这是一个无需构建的静态网页。可在仓库目录运行：

```sh
python3 -m http.server 8000
```

然后在浏览器打开 <http://localhost:8000>。

## 发布

仓库通过 GitHub Pages 发布。将更新提交并推送到 `main` 分支后，GitHub Pages 会从仓库根目录更新网站。

## 主要文件

- `index.html`：页面结构和路线概览
- `script.js`：每日行程与交互
- `map.js`、`map.css`：地点数据、地图和导航入口
- `weather.js`、`weather-snapshot.json`：实时天气请求与本地天气快照
- `style.css`：页面样式
- `maplibre-gl.js`、`maplibre-gl.css`：地图组件

天气数据通过 Open-Meteo 获取；街道底图由 OpenFreeMap 提供。地图地点与高德目的地链接使用各地点对应的高德 POI。
