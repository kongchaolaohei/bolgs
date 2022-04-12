import{r as t,o as p,c as o,a as n,d as e,F as r,b as s,e as c}from"./app.115e6629.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"vscode-\u8C03\u8BD5-ts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode-\u8C03\u8BD5-ts","aria-hidden":"true"},"#"),s(" VSCode \u8C03\u8BD5 TS")],-1),k=s("\u4F7F\u7528\u4EE5\u4E0B\u8C03\u8BD5\u6587\u4EF6\u7684\u914D\u7F6E(\u4E24\u4E2A\u914D\u7F6E\u90FD\u53EF\u4EE5),\u4FBF\u53EF\u6B63\u5E38 TS \u4EE3\u7801\u4E86."),q={href:"https://go.microsoft.com/fwlink/?linkid=830387",target:"_blank",rel:"noopener noreferrer"},b=s("\u66F4\u591A\u4FE1\u606F"),m=c(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u4F7F\u7528 IntelliSense \u4E86\u89E3\u76F8\u5173\u5C5E\u6027\u3002</span>
  <span class="token comment">// \u60AC\u505C\u4EE5\u67E5\u770B\u73B0\u6709\u5C5E\u6027\u7684\u63CF\u8FF0\u3002</span>
  <span class="token comment">// \u6B32\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u8BBF\u95EE: https://go.microsoft.com/fwlink/?linkid=830387</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\${relativeFile}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-r&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ts-node/register&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inspector&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;internalConsoleOptions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openOnSessionStart&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8C03\u8BD5TS\u4EE3\u7801&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// ts-node \u547D\u4EE4\uFF1A \u201C\u76F4\u63A5\u201D\u8FD0\u884Cts\u4EE3\u7801\u3002</span>
      <span class="token comment">// \u4F5C\u7528\uFF1A\u8C03\u8BD5\u65F6\u52A0\u8F7Dts-node\u5305\uFF08\u5728\u8C03\u8BD5\u65F6\u201C\u76F4\u63A5\u201D\u8FD0\u884Cts\u4EE3\u7801\uFF09</span>
      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-r&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ts-node/register&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6B64\u5904\u7684 a.ts \u8868\u793A\u8981\u8C03\u8BD5\u7684 TS \u6587\u4EF6\uFF08 \u53EF\u4FEE\u6539\u4E3A\u5176\u4ED6\u8981\u8C03\u8BD5\u7684ts\u6587\u4EF6 \uFF09</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\${workspaceFolder}/\${relativeFile}&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,1);function d(g,_){const a=t("ExternalLinkIcon");return p(),o(r,null,[i,n("p",null,[k,n("a",q,[b,e(a)])]),m],64)}var f=l(u,[["render",d]]);export{f as default};
