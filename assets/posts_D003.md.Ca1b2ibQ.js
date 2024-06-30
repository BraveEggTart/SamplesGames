import{_ as t,c as e,o as l,Y as a,a as o}from"./chunks/framework.BTdFKloG.js";const b=JSON.parse('{"title":"末尾颜色改变打字机效果","description":"","frontmatter":{"title":"末尾颜色改变打字机效果","descript":"末尾颜色改变打字机效果","date":"2024-04-30T00:00:00.000Z","image":"https://unity.just4dream.club/D003.jpg","index":3,"tags":["⭐️⭐️"],"categories":["协程","富文本"]},"headers":[],"relativePath":"posts/D003.md","filePath":"posts/D003.md","lastUpdated":1719732937000}'),r={name:"posts/D003.md"},i=a('<nav class="table-of-contents"><ul><li><a href="#讲解视频链接">讲解视频链接</a></li><li><a href="#如何运行">如何运行</a></li><li><a href="#代码思路">代码思路</a></li><li><a href="#类图设计">类图设计</a></li></ul></nav><h2 id="讲解视频链接" tabindex="-1">讲解视频链接 <a class="header-anchor" href="#讲解视频链接" aria-label="Permalink to &quot;讲解视频链接&quot;">​</a></h2>',2),s=o("iframe",{src:"//player.bilibili.com/player.html?isOutside=true&aid=1455829641&bvid=BV11i421e7pm&cid=1594823257&p=1&high_quality=1&danmaku=1&as_wide=1",allowfullscreen:"allowfullscreen",width:"100%",height:"600",scrolling:"no",frameborder:"0",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts"},null,-1),n=a('<h2 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h2><p>打开示例场景，运行即可看到效果</p><h2 id="代码思路" tabindex="-1">代码思路 <a class="header-anchor" href="#代码思路" aria-label="Permalink to &quot;代码思路&quot;">​</a></h2><p>本程序主要逻辑写在协程中，而协程则由Start生命周期函数启动。</p><p>协程内部主要思路是遍历要显示的内容，一个字一个字的累加到文本组件上，同时每个字停留一定的间隔，即可实现打字机效果。</p><p>而颜色进度效果则是根据Text组件支持富文本特性而实现的</p><p>比如如果想要一个字显示为黑色，则为<code>“&lt;color=#000&gt;黑色&lt;/color&gt;”。</code></p><p>在这个示例中，有两个设置颜色参数的变量，分别是defaultColor和doneColor，所以<strong>实现颜色进度效果的重点在于如何动态的组合穿插这两种颜色</strong>。</p><p>当打出第一个字时，&lt;颜色1开头&gt; + 第一个字 + &lt;颜色1结尾&gt; + &lt;颜色2开头&gt; + 剩余未打出的字 + &lt;颜色2结尾&gt;</p><p>当打出第二个字时，&lt;颜色1开头&gt; + 第一个字 + 第二个字 + &lt;颜色1结尾&gt; + &lt;颜色2开头&gt; + 剩余未打出的字 + &lt;颜色2结尾&gt;</p><p>论述完毕，End。</p><h2 id="类图设计" tabindex="-1">类图设计 <a class="header-anchor" href="#类图设计" aria-label="Permalink to &quot;类图设计&quot;">​</a></h2><p>无</p>',13),d=[i,s,n];function c(_,p,h,u,f,m){return l(),e("div",null,d)}const T=t(r,[["render",c]]);export{b as __pageData,T as default};
