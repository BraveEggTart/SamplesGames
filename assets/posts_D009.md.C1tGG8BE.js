import{_ as e,c as a,o as r,Y as t}from"./chunks/framework.BTdFKloG.js";const f=JSON.parse('{"title":"LineRenderer实现画画效果","description":"","frontmatter":{"title":"LineRenderer实现画画效果","descript":"一个简单的绘画Demo，利用LineRenderer组件实现。支持设置笔画颜色、粗细等属性，还支持撤销笔画。","date":"2024-04-30T00:00:00.000Z","image":"https://unity.just4dream.club/D009.jpg","index":9,"tags":["⭐️⭐️⭐️"],"categories":["LineRanderer"]},"headers":[],"relativePath":"posts/D009.md","filePath":"posts/D009.md","lastUpdated":1719732937000}'),i={name:"posts/D009.md"},n=t('<nav class="table-of-contents"><ul><li><a href="#讲解视频链接">讲解视频链接</a></li><li><a href="#如何运行">如何运行</a></li><li><a href="#代码思路">代码思路</a></li><li><a href="#类图设计">类图设计</a></li></ul></nav><h2 id="讲解视频链接" tabindex="-1">讲解视频链接 <a class="header-anchor" href="#讲解视频链接" aria-label="Permalink to &quot;讲解视频链接&quot;">​</a></h2><p>无</p><h2 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h2><p>打开示例场景，拿鼠标瞎划拉就完了。来左边跟我一起画个龙，右边画一道彩虹~🙌🙌🙌</p><h2 id="代码思路" tabindex="-1">代码思路 <a class="header-anchor" href="#代码思路" aria-label="Permalink to &quot;代码思路&quot;">​</a></h2><p>三个脚本，LineManager、DrawLine、ColorPicker。</p><p>LineManager控制绘画笔画，只有区分多个笔画，才具备撤销的基础以及每种笔画可以设置不同粗细和颜色。</p><p>当鼠标按下，就创建一个DrawLine(挂载LineRenderer)，当鼠标继续按下，就禁用上一个DrawLine的绘画功能。同时每次鼠标按下，就把当前创建的笔画存起来。如果想要撤销，就删掉笔画集合的最后一笔即可。</p><p>LineRenderer组件来实现笔画效果。粗细和颜色只需要调整该组件的参数即可。</p><p>ColorPicker就一行代码，不多说。</p><h2 id="类图设计" tabindex="-1">类图设计 <a class="header-anchor" href="#类图设计" aria-label="Permalink to &quot;类图设计&quot;">​</a></h2><p>无</p>',13),o=[n];function s(l,d,c,p,h,_){return r(),a("div",null,o)}const m=e(i,[["render",s]]);export{f as __pageData,m as default};
