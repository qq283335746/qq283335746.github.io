# Web UI 框架集锦
```
导读：前端流行的UI框架、业界高度认可的UI框架等
```

[Metronic](https://keenthemes.com/metronic/)

[inspinia](https://wrapbootstrap.com/)

[e102.demo.lemoweb.com-响应式网站模板参考](http://e102.demo.lemoweb.com/)

### pdf.js 网页中浏览PDF文件
[ts-pdf](https://github.com/yermolim/ts-pdf)
```
const options: TsPdfViewerOptions = {
    containerSelector: "#your-html-container-selector", 
    workerSource: "assets/pdf.worker.min.js", // path to the PDF.js worker script
    userName: "your_username",
    // you can check other properties using your editor hints
};
const viewer = new TsPdfViewer(options);
let pdfViewer = await viewer.openPdfAsync("https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf");

将上面的workerSource改为：https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js 即可。
```