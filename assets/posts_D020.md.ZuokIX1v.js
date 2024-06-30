import{_ as e,c as a,o as t,Y as o}from"./chunks/framework.BTdFKloG.js";const u=JSON.parse('{"title":"posts/D020.md","description":"","frontmatter":{"title":"posts/D020.md","descript":"一个由AI控制的小汽车，赋予目标点后可以自动寻路抵达。","date":"2024-04-30T00:00:00.000Z","image":"https://unity.just4dream.club/D020.jpg","index":20,"tags":["⭐️⭐️⭐️⭐️"],"categories":["NavMesh","Wheel Collider Component"]},"headers":[],"relativePath":"posts/D020.md","filePath":"posts/D020.md","lastUpdated":1719732937000}'),r={name:"posts/D020.md"},s=o('<nav class="table-of-contents"><ul><li><a href="#讲解视频链接">讲解视频链接</a></li><li><a href="#如何运行">如何运行</a></li><li><a href="#代码思路">代码思路</a></li><li><a href="#类图设计">类图设计</a></li></ul></nav><h2 id="讲解视频链接" tabindex="-1">讲解视频链接 <a class="header-anchor" href="#讲解视频链接" aria-label="Permalink to &quot;讲解视频链接&quot;">​</a></h2><p>无</p><h2 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h2><p>运行实例场景，AI操作的小汽车会自动向目标点进发，点击重新寻路，可以刷新目标点的位置。</p><h2 id="代码思路" tabindex="-1">代码思路 <a class="header-anchor" href="#代码思路" aria-label="Permalink to &quot;代码思路&quot;">​</a></h2><p>参考<a href="https://www.notion.so/1f3f1884f46144fa9e94b527ab06f6e7?pvs=21" target="_blank" rel="noreferrer">D017</a>如何做一辆玩家来操作的小汽车</p><p><strong>下面说说AI操控的逻辑：</strong></p><ul><li>速度方面：获取NavAgent的Speed*(navAgent.velocity.magnitude)*来控制车轮的motorTorque</li><li>转向方面：通过<code>Vector3.SignedAngle(transform.forward, navAgent.velocity, Vector3.up);</code> 计算转向角度(前轮的转向)</li></ul><p>具体参考AutoDrive()函数</p><h2 id="类图设计" tabindex="-1">类图设计 <a class="header-anchor" href="#类图设计" aria-label="Permalink to &quot;类图设计&quot;">​</a></h2><p>无</p>',12),i=[s];function l(n,d,c,p,h,_){return t(),a("div",null,i)}const m=e(r,[["render",l]]);export{u as __pageData,m as default};
