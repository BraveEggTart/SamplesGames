import{_ as e,c as t,o as s,Y as a,a as i}from"./chunks/framework.BTdFKloG.js";const T=JSON.parse('{"title":"对话系统-1","description":"","frontmatter":{"title":"对话系统-1","descript":"对话系统的非常简单的实现方式，通过读取Text文本分割行来实现不同人物对话。","date":"2024-04-30T00:00:00.000Z","image":"https://unity.just4dream.club/M001_1.jpg","index":25,"tags":["⭐️⭐️"],"categories":["协程"]},"headers":[],"relativePath":"posts/M001-1.md","filePath":"posts/M001-1.md","lastUpdated":1719732937000}'),l={name:"posts/M001-1.md"},o=a('<nav class="table-of-contents"><ul><li><a href="#讲解视频链接">讲解视频链接</a></li><li><a href="#如何运行">如何运行</a></li><li><a href="#代码思路">代码思路</a></li><li><a href="#类图设计">类图设计</a></li></ul></nav><h2 id="讲解视频链接" tabindex="-1">讲解视频链接 <a class="header-anchor" href="#讲解视频链接" aria-label="Permalink to &quot;讲解视频链接&quot;">​</a></h2>',2),r=i("iframe",{src:"//player.bilibili.com/player.html?isOutside=true&aid=80749228&bvid=BV1WJ411Y71J&cid=138200417&p=1&high_quality=1&danmaku=1&as_wide=1",allowfullscreen:"allowfullscreen",width:"100%",height:"600",scrolling:"no",frameborder:"0",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts"},null,-1),n=a('<h2 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h2><p>打开示例场景，之后鼠标点击对话界面即可对话。</p><h2 id="代码思路" tabindex="-1">代码思路 <a class="header-anchor" href="#代码思路" aria-label="Permalink to &quot;代码思路&quot;">​</a></h2><p>对话内容存储在文本文件内，一行名字，一行对话（如下图）</p><p><img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c3059dad-22d2-42f5-9dcb-56863fb7e00e/f4f0c584-e580-4a6f-8cfe-44fc6895c15c/Untitled.png" alt="Untitled"></p><p>所以具体思路就是：</p><p>1.通过TextAsset直接获取文本文件</p><p>2.通过text.Split(’\\n’)来分割每行</p><p>3.当点击UI界面的时候，每次拿出两行（一行名字、一行文本）数据，赋值给对应UI</p><p>4.完毕</p><h2 id="类图设计" tabindex="-1">类图设计 <a class="header-anchor" href="#类图设计" aria-label="Permalink to &quot;类图设计&quot;">​</a></h2><p>无</p>',12),c=[o,r,n];function d(_,p,h,f,u,m){return s(),t("div",null,c)}const g=e(l,[["render",d]]);export{T as __pageData,g as default};
