import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as n,b as o}from"./app-DMgN_Nia.js";const s="/web-docs/assets/001-Bau0QZRc.png",a={},r=o('<h1 id="大文件上传实现原理" tabindex="-1"><a class="header-anchor" href="#大文件上传实现原理"><span>大文件上传实现原理</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>在日常开发中，<strong>文件上传</strong> 是最常见的操作之一。文件上传技术使得用户可以方便地将本地文件上传到 <code>web</code> 服务器上，这在许多场景下都是必须的。比如：网盘上传、头像上传等。</p><p>但是，当我们需要上传比较大的文件的时候，容易碰到以下问题：</p><ol><li>上传时间长。</li><li>中间一旦出错就需要重新上传。</li><li>一般服务器端会对文件大小进行限制。</li></ol><p>这几个问题会导致上传的时候用户体验不好，针对存在的这些问题，我们可以通过 <strong>分片上传</strong> 来解决。</p><h2 id="原理介绍" tabindex="-1"><a class="header-anchor" href="#原理介绍"><span>原理介绍</span></a></h2><p><strong>分片上传</strong> 的原理就像是把一个大蛋糕切成多个小块一样。</p><p>首先，<strong>我们将要上传的 &quot;大文件&quot; 切分为多个 &quot;小块&quot;，每个小块大小相同</strong>，比如每块大小为 <code>2MB</code>。</p><p>然后我们再逐个将这些小块上传到服务器。上传的时候，可以同时上传多个小块，也可以一个一个地上传，上传每个小块后，服务器端会保存这些小块，并记录它们的顺序和位置信息。</p><p>所有小块上传完毕后，服务器端会把这些小块按照正确的顺序拼接起来，还原成完整的 <strong>大文件</strong>。最后我们就成功地上传了整个 <strong>大文件</strong>。</p><p>具体流程如下图所示：</p><p><img src="'+s+'" alt="001"></p><p>分片上传的好处在于它可以减少上传失败的风险，如果在上传过程中出现了问题，只需要重新上传出错的那个小块，而不需要重新上传整个大文件。</p><p>此外，分片上传还可以加快上传速度，因为我们可以同时上传多个小块，充分利用网络的带宽，这样就能够更快地完成文件的上传过程。</p>',15),i=[r];function p(l,c){return n(),t("div",null,i)}const E=e(a,[["render",p],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E4%B8%89%E4%BB%B6%E5%A5%97/%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B/%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0/%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86/","title":"大文件上传实现原理","lang":"zh-CN","frontmatter":{"category":["JavaScript","Javascript 综合案例","文件上传"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"原理介绍","slug":"原理介绍","link":"#原理介绍","children":[]}],"git":{"createdTime":1721772515000,"updatedTime":1724773160000,"contributors":[{"name":"wr","email":"893634104@qq.com","commits":2}]},"readingTime":{"minutes":1.72,"words":515},"filePathRelative":"前端/前端三件套/综合案例/大文件上传/实现原理/README.md","localizedDate":"2024年7月24日","excerpt":"\\n<h2>前言</h2>\\n<p>在日常开发中，<strong>文件上传</strong> 是最常见的操作之一。文件上传技术使得用户可以方便地将本地文件上传到 <code>web</code> 服务器上，这在许多场景下都是必须的。比如：网盘上传、头像上传等。</p>\\n<p>但是，当我们需要上传比较大的文件的时候，容易碰到以下问题：</p>\\n<ol>\\n<li>上传时间长。</li>\\n<li>中间一旦出错就需要重新上传。</li>\\n<li>一般服务器端会对文件大小进行限制。</li>\\n</ol>\\n<p>这几个问题会导致上传的时候用户体验不好，针对存在的这些问题，我们可以通过 <strong>分片上传</strong> 来解决。</p>"}');export{E as comp,g as data};
