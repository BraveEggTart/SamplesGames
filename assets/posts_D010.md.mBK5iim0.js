import{_ as a,c as e,o as t,Y as o}from"./chunks/framework.BTdFKloG.js";const u=JSON.parse('{"title":"不使用Shader实现物体闪烁","description":"","frontmatter":{"title":"不使用Shader实现物体闪烁","descript":"通过插值_EmissonColor的颜色来实现的物体闪烁效果。","date":"2024-04-30T00:00:00.000Z","image":"https://unity.just4dream.club/D010.jpg","index":10,"tags":["⭐️⭐️"],"categories":["插值函数"]},"headers":[],"relativePath":"posts/D010.md","filePath":"posts/D010.md","lastUpdated":1719732937000}'),r={name:"posts/D010.md"},i=o('<nav class="table-of-contents"><ul><li><a href="#讲解视频链接">讲解视频链接</a></li><li><a href="#如何运行">如何运行</a></li><li><a href="#代码思路">代码思路</a></li><li><a href="#类图设计">类图设计</a></li></ul></nav><h2 id="讲解视频链接" tabindex="-1">讲解视频链接 <a class="header-anchor" href="#讲解视频链接" aria-label="Permalink to &quot;讲解视频链接&quot;">​</a></h2><p>无</p><h2 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h2><p>运行示例场景</p><h2 id="代码思路" tabindex="-1">代码思路 <a class="header-anchor" href="#代码思路" aria-label="Permalink to &quot;代码思路&quot;">​</a></h2><p>下面就是全部代码：</p><p>在材质（mat）上设置发光颜色（&quot;_EmissionColor&quot;），通过在两种颜色（startColor 和 endColor）之间进行线性插值（Lerp），并使用 PingPong 函数在这两种颜色之间循环变化。 <code>mat.SetColor(&quot;_EmissionColor&quot;, Color.Lerp(startColor * intensity, endColor * intensity, Mathf.PingPong(Time.time, flashSpeed)));</code></p><h2 id="类图设计" tabindex="-1">类图设计 <a class="header-anchor" href="#类图设计" aria-label="Permalink to &quot;类图设计&quot;">​</a></h2><p>无</p>',10),s=[i];function l(n,d,h,c,p,_){return t(),e("div",null,s)}const f=a(r,[["render",l]]);export{u as __pageData,f as default};