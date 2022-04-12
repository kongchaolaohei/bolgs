import{r as t,o as e,c as p,a as n,d as o,F as c,b as s,e as l}from"./app.115e6629.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"\u76D1\u542Cdom\u5C3A\u5BF8\u53D8\u5316",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u76D1\u542Cdom\u5C3A\u5BF8\u53D8\u5316","aria-hidden":"true"},"#"),s(" \u76D1\u542CDOM\u5C3A\u5BF8\u53D8\u5316")],-1),k=n("h1",{id:"resizeobserver",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#resizeobserver","aria-hidden":"true"},"#"),s(" ResizeObserver")],-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver",target:"_blank",rel:"noopener noreferrer"},d=s("MDN"),m=l(`<p>\u521B\u5EFA\u4E00\u4E2A<code>ResizeObserver</code>\u5BF9\u8C61,\u58F0\u660E\u8981\u4F7F\u7528\u7684\u56DE\u8C03\u51FD\u6570,\u4E4B\u540E\u8BBE\u7F6E\u8981\u76D1\u542C\u7684\u5BF9\u8C61,\u5982\u4E0B\u4F7F\u7528\u90E8\u5206<code>Vue3</code>\u4EE3\u7801\u4E3E\u4F8B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// echarts\u56FE\u8868DOM\u5B9E\u4F8Bref</span>
<span class="token keyword">const</span> echartsRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> resizeObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResizeObserver</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span>entries <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> entry <span class="token keyword">of</span> entries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> boxEl <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dimensions <span class="token operator">=</span> entry<span class="token punctuation">.</span>contentRect<span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>boxEl<span class="token punctuation">,</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dimensions<span class="token punctuation">.</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> x </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dimensions<span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myCharts<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  resizeObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>echartsRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  resizeObserver<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>MDN\u63D0\u793A\u8FD9\u662F\u4E00\u4E2A\u5B9E\u9A8C\u4E2D\u7684\u529F\u80FD,\u7531\u4E8E\u8BE5\u529F\u80FD\u5BF9\u5E94\u7684\u6807\u51C6\u6587\u6863\u53EF\u80FD\u88AB\u91CD\u65B0\u4FEE\u8BA2\uFF0C\u6240\u4EE5\u5728\u672A\u6765\u7248\u672C\u7684\u6D4F\u89C8\u5668\u4E2D\u8BE5\u529F\u80FD\u7684\u8BED\u6CD5\u548C\u884C\u4E3A\u53EF\u80FD\u968F\u4E4B\u6539\u53D8\u3002</p></div>`,3);function _(h,f){const a=t("ExternalLinkIcon");return e(),p(c,null,[i,k,n("p",null,[n("a",b,[d,o(a)])]),m],64)}var y=r(u,[["render",_]]);export{y as default};
