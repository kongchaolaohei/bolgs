"use strict";(self.webpackChunkvuepress_test=self.webpackChunkvuepress_test||[]).push([[572],{6100:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-1a055d8c",path:"/commonly/CSS-HTML/transform/transform.html",title:"transform",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"skew",slug:"skew",children:[]}],filePathRelative:"commonly/CSS-HTML/transform/transform.md",git:{updatedTime:1630054947e3,contributors:[{name:"kongchaolaohei",email:"kongchaolaohei@xxx.com",commits:1}]}}},4994:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const p=(0,t._)("h1",{id:"transform",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#transform","aria-hidden":"true"},"#"),(0,t.Uk)(" transform")],-1),e={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("MDN"),l={href:"https://caniuse.com/?search=transform",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("兼容性"),r=(0,t.uE)('<p>transform的变形套路主要是坐标的变换和3d透视的效果来使目标DOM变成一些不规则的图形</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由transform变换可以使盒模型也跟着变换.</p></div><h2 id="skew" tabindex="-1"><a class="header-anchor" href="#skew" aria-hidden="true">#</a> skew</h2><p>在需要平行四边形的按钮时,如果有视图范围和交互范围一致时,skew就非常的好用了</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.parallelogram</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span>  200px<span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> bottom left<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.parallelogram&gt;span</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% + 21px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parallelogram<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>parallelogram<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>值得注意的是在使用skew时会使目标DOM以及所有子孙元素都产生偏转,导致内容也会也会变形; 所以需要在一个适当的元素上在使用完全相反的skew来抵消形变,使内容正常的显示,如上方代码高亮处所示</p></div>',6),u={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[(0,t._)("a",e,[o,(0,t.Wm)(a)]),(0,t._)("a",l,[c,(0,t.Wm)(a)])]),r],64)}}}}]);