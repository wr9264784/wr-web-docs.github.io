import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,b as t}from"./app-fQyFsxl4.js";const a="/assets/%E6%96%87%E4%BB%B6%E6%89%80%E5%9C%A8%E8%B7%AF%E5%BE%84-zbBa59W5.png",d="/assets/%E6%AD%A3%E5%B8%B8%E7%94%9F%E6%88%90%E6%96%87%E4%BB%B6-C8TIbUUq.png",n="/assets/%E9%9D%9E%E6%AD%A3%E5%B8%B8%E7%94%9F%E6%88%90%E6%96%87%E4%BB%B6-wBAE6WHo.png",o="/assets/dirname%E6%AD%A3%E7%A1%AE%E5%86%99%E5%85%A5%E6%96%87%E4%BB%B6-CiWiAKmq.png",l={},h=t('<h1 id="nodejs-的路径" tabindex="-1"><a class="header-anchor" href="#nodejs-的路径"><span>NodeJS 的路径</span></a></h1><h3 id="一、相对路径-和-绝对路径" tabindex="-1"><a class="header-anchor" href="#一、相对路径-和-绝对路径"><span>一、相对路径 和 绝对路径</span></a></h3><p>fs 模块对资源进行操作时，路径的写法有两种：</p><ul><li>相对路径 <ul><li><code>./index.txt</code> 当前目录下的 <code>index.txt</code> 文件。</li><li><code>index.js</code> 和上面的写法等效。</li><li><code>../index.js</code> 当前目录的上一级目录的 <code>index.txt</code> 文件。</li></ul></li><li>绝对路径 <ul><li><code>C:/index.txt</code> window 系统下的绝对路径，表示 <code>C盘根目录</code>下 的 <code>index.txt</code> 文件。</li><li><code>/user/bin</code> Linux 系统下的绝对路径。</li></ul></li></ul><blockquote><p>注意：</p><p>相对路径 和 绝对路径 不是只针对于 fs 的文件读取模块才可以使用，其他的任意与路径相关的读写操作都可以用到。</p><p>相对路径中所谓的 <code>当前目录</code>，指的是 <code>命令行的工作目录</code>，而并非是文件的所在目录。所以当命令行的工作目录与文件所在目录不一致时，会出现一些 BUG。</p></blockquote><h3 id="二、fs-模块相对路径的问题" tabindex="-1"><a class="header-anchor" href="#二、fs-模块相对路径的问题"><span>二、fs 模块相对路径的问题</span></a></h3><p>首先我们在 <code>路径相关</code> 的目录下新建一个 <code>index.js</code> 文件，并且在该文件中编写相关代码：</p><p><img src="'+a+'" alt="文件所在路径"></p><p>然后通过终端运行 <code>index.js</code> 中的代码：</p><p><img src="'+d+'" alt="正常生成文件"></p><p>从上图可以看到，我们运行代码后能正常生成代码中执行的要写入的文件。</p><p>但是，如果我们切换了终端中命令行的工作目录，然后再继续执行 <code>路径相关</code> 目录下的 <code>index.js</code> 文件，会出现一个 BUG：</p><p><img src="'+n+'" alt="非正常生成文件"></p><p>从上图可以看到，我们首先是通过 <code>cd ../..</code> 把工作目录切换到了 <code>根目录</code>，然后在 <code>根目录</code> 中执行 <code>路径相关</code> 目录下的 <code>index.js</code> 文件，发现 <code>index.txt</code> 文件被创建在了 <code>根目录</code> 下。</p><p>为什么会出现这种情况呢？这里解释一下：就是 <strong>fs 模块</strong> 当中的 <strong>相对路径</strong>的参照物是比较特别的，它参照的并 <strong>不是</strong> 这个 <code>index.js</code> 文件的所在目录，而是 <strong>参照的终端命令行的工作目录</strong>。</p><p>我们在终端中执行文件的时候，工作目录是在 <code>D:\\Code\\前端\\</code>，然后执行了 <code>NodeJS 相关\\路径相关\\index.js</code> 的文件，文件中又通过 <code>相对路径</code> 写入了一个文件，写入路径是 <code>./index.txt</code>，所以这个 <code>./index.txt</code> 会被拼接到 <code>D:\\Code\\前端\\</code> 路径下，变成了 <code>D:\\Code\\前端\\index.txt</code>。</p><h3 id="三、-dirname" tabindex="-1"><a class="header-anchor" href="#三、-dirname"><span>三、__dirname</span></a></h3><p>为了解决 <code>相对路径</code> 的问题，其实我们可以通过使用 <code>绝对路径</code> 来解决，但是每次都写一长串的 <code>绝对路径</code> 会显得繁琐，所以，这时候就需要用到 <code>__dirname</code> 了。</p><p>我们先通过打印看下 <code>__dirname</code> 会输出什么？我们仍然在之前的 <code>路径相关</code> 的 <code>index.js</code> 文件下进行打印：</p><p>![打印 __dirname](assets/打印 __dirname.png)</p><p>从上图可以看到，我们在终端中的执行了 <code>index.js</code> 文件后，打印的结果是一个 <code>绝对路径</code>。</p><p>我们可以把 <code>__dirname</code> 看成是一个全局变量，可以直接使用，<strong><code>__dirname</code> 保存的是所在文件的所在目录的绝对路径</strong>。</p><p>所以，当我们使用了 <code>__dirname</code> 后，不管在哪个工作目录中执行了哪个目录下的文件，都能准确的推断出对应的 <code>绝对路径</code>，并正确的生成写入文件，如下图所示：</p><p><img src="'+o+`" alt="__dirname正确写入文件"></p><blockquote><p>注意：在 <code>__dirname</code> 后面拼接的路径是 <code>/index.txt</code>，而不是 <code>./index.txt</code>。</p></blockquote><h3 id="四、path-模块" tabindex="-1"><a class="header-anchor" href="#四、path-模块"><span>四、path 模块</span></a></h3><p>path 模块提供了 <strong>操作路径</strong> 的功能，我们将介绍如下几个比较常用的 API：</p><table><thead><tr><th style="text-align:left;">API</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">path.resolve</td><td style="text-align:left;">拼接规范的绝对路径（最常用）</td></tr><tr><td style="text-align:left;">path.join</td><td style="text-align:left;">拼接路径</td></tr><tr><td style="text-align:left;">path.sep</td><td style="text-align:left;">获取操作系统的路径分隔符</td></tr><tr><td style="text-align:left;">path.parse</td><td style="text-align:left;">解析路径并返回对象</td></tr><tr><td style="text-align:left;">path.basename</td><td style="text-align:left;">获取路径的基础名称（即路径中的文件名称）</td></tr><tr><td style="text-align:left;">path.dirname</td><td style="text-align:left;">获取路径的目录名</td></tr><tr><td style="text-align:left;">path.extname</td><td style="text-align:left;">获取路径的拓展名</td></tr></tbody></table><h4 id="path-resolve-paths" tabindex="-1"><a class="header-anchor" href="#path-resolve-paths"><span>path.resolve([...paths])</span></a></h4><p><code>path.resolve</code> 方法会把一个 <strong>路径或路径片段</strong> 的序列解析为一个 <strong>绝对路径</strong>。这个 API 拼接的绝对路径 <strong>是规范的</strong>。</p><p>给定的路径的序列是 <strong>从右往左</strong> 被处理的，后面的每个 <code>path</code> 被一次解析，直到构造完成一个 <code>绝对路径</code>。例如：给定的路径片段的序列为：<code>/foo</code>、<code>/bar</code>、<code>baz</code>，则调用 <code>path.resolve(&#39;/foo&#39;, &#39;/bar&#39;, &#39;baz&#39;)</code>，最终返回 <code>/bar/baz</code>。因为 <code>/bar/baz</code> 已经是完整的 <code>绝对路径</code> 了，就不会继续往左的 <code>/foo</code> 进行匹配了。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// \\bar\\baz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果处理完全部给定的 <code>path</code> 片段还未生成一个 <code>绝对路径</code>，则当前工作目录会被用上。</p><p>生成的路径是规范化后，且 <strong>末尾的斜杠会被删除</strong>，除非路径被解析为根目录。</p><p>长度为零的 <code>path</code> 片段会被忽略。</p><p>如果没有传入 <code>path</code> 片段，则 <code>path.resolve()</code> 返回当前工作目录的 <code>绝对路径</code>。</p><p>在此之前我们是通过 <code>__dirname + &#39;/index.txt&#39;</code> 的形式来拼接 <code>绝对路径</code>，但是这种写法并不是特别规范。为什么说不规范呢？可以通过以下打印得知：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;/index.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// D:\\Code\\前端\\NodeJS 相关\\路径相关/index.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以看到打印结果中，路径分隔符不一致。前面都是反斜杠，后面一个是正斜杠。</p><p>然而，通过 <code>path.resolve()</code> 我们就可以拼接出规范的绝对路径：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;./index.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// D:\\Code\\前端\\NodeJS 相关\\路径相关\\index.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以看到，打印的结果中，路径分隔符都是统一的。</p><blockquote><p>注意：</p><p>在直接使用 <code>__dirname</code> 去拼接绝对路径时，后面要拼接的路径不需要加 <code>.</code>，如直接拼接上 <code>/index.txt</code>。</p><p>而使用 <code>path.resolve()</code> 去拼接绝对路径时，一般来说第一个参数都是给 <code>绝对路径</code>，后续的参数给的是 <code>相对路径</code>。</p><p>拼接的 <code>相对路径</code> 中需要加 <code>./</code>，如：<code>path.resolve(__dirname, &#39;./index.txt&#39;)</code>。或者直接不需要 <code>./</code>，如：<code>path.resolve(__dirname, &#39;index.txt&#39;)</code>。</p><p>如果某个路径片段带有 <code>../</code>，如：<code>path.resolve(&#39;wwwroot&#39;, &#39;static_files/png/&#39;, &#39;../gif/image.gif&#39;)</code>，那么结果是：<code>/wwwroot/static_files/gif/image.gif</code>，因为是从右往左匹配拼接，<code>../gif/image.gif</code> 表示匹配的是上一级的目录，而左侧的 <code>static_files/png/</code> 相对于 <code>../gif/image.gif</code> 来说上一级目录就是 <code>static_files</code>，所以结果为：<code>/wwwroot/static_files/gif/image.gif</code>。</p><p>如果 <code>path.resolve()</code> 的第二个参数是一个绝对路径，如：<code>path.resolve(__dirname, &#39;/index&#39;)</code>，那么会直接以 <code>/index</code> 作为 <code>绝对路径</code>，后续如果还需要拼接 <code>相对路径</code> 的话，都是会拼接到这个 <code>绝对路径</code> 的后面，如：<code>path.resolve(__dirname, &#39;/index&#39;, &#39;./text&#39;)</code>，结果为 <code>/index/test</code>。</p></blockquote><h4 id="path-join-paths" tabindex="-1"><a class="header-anchor" href="#path-join-paths"><span>path.join([...paths])</span></a></h4><p><code>path.join</code> 方法使用 <strong>平台特定的分隔符</strong> 把全部给定的 <code>path</code> 片段连接到一起，并规范化生成的路径。长度为零的 <code>path</code> 判断会被忽略。如果连接后的路径字符是一个长度为零的字符串，则返回 <code>.</code>，表示当前工作目录。</p><p>所以 <code>path.join</code> 的作用主要有两点：</p><ul><li>一个是拼接路径，<strong>尾部的斜杠不会被删除</strong>。</li><li>用平台特定的分隔符进行分隔路径。</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;baz/asdf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;quux&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;..&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// \\foo\\bar\\baz\\asdf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {}, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 抛出 TypeError：path.join 的参数必须是字符串</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tips：<code>path.join(&#39;/foo&#39;, &#39;bar&#39;, &#39;baz/asdf&#39;, &#39;quux&#39;, &#39;..&#39;)</code> 打印的结果为 <code>\\foo\\bar\\baz\\asdf</code> 是因为 <code>..</code> 拼接的是上一级目录，相对于这个路径来说，上一级目录是 <code>asdf</code>，所以忽略了 <code>quux</code>。</p><h4 id="path-resolve-和-path-join-的区别" tabindex="-1"><a class="header-anchor" href="#path-resolve-和-path-join-的区别"><span>path.resolve 和 path.join 的区别</span></a></h4><table><thead><tr><th>resolve</th><th>join</th></tr></thead><tbody><tr><td>规范化生成的路径</td><td>规范化生成的路径</td></tr><tr><td>绝对路径</td><td>相对路径</td></tr><tr><td>从右到左进行处理</td><td>从左到右进行处理</td></tr><tr><td>构造出绝对路径为止</td><td>所有 path 片段连接到一起</td></tr><tr><td>长度为零的 path 片段会被忽略</td><td>长度为零的 path 片段会被忽略</td></tr><tr><td>连接后的 path长度为0，返回 <strong>工作目录</strong></td><td>连接后的path长度为0，返回 <strong>当前目录</strong></td></tr><tr><td>尾部的斜杠<strong>会</strong>被删除</td><td>尾部的斜杠<strong>不会</strong>被删除</td></tr></tbody></table><h4 id="其他模块用的较少-了解即可。" tabindex="-1"><a class="header-anchor" href="#其他模块用的较少-了解即可。"><span>其他模块用的较少，了解即可。</span></a></h4>`,52),p=[h];function c(r,k){return s(),i("div",null,p)}const x=e(l,[["render",c],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/NodeJS/%E8%B7%AF%E5%BE%84%E7%9B%B8%E5%85%B3/","title":"NodeJS 的路径","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"一、相对路径 和 绝对路径","slug":"一、相对路径-和-绝对路径","link":"#一、相对路径-和-绝对路径","children":[]},{"level":3,"title":"二、fs 模块相对路径的问题","slug":"二、fs-模块相对路径的问题","link":"#二、fs-模块相对路径的问题","children":[]},{"level":3,"title":"三、__dirname","slug":"三、-dirname","link":"#三、-dirname","children":[]},{"level":3,"title":"四、path 模块","slug":"四、path-模块","link":"#四、path-模块","children":[{"level":4,"title":"path.resolve([...paths])","slug":"path-resolve-paths","link":"#path-resolve-paths","children":[]},{"level":4,"title":"path.join([...paths])","slug":"path-join-paths","link":"#path-join-paths","children":[]},{"level":4,"title":"path.resolve 和 path.join 的区别","slug":"path-resolve-和-path-join-的区别","link":"#path-resolve-和-path-join-的区别","children":[]},{"level":4,"title":"其他模块用的较少，了解即可。","slug":"其他模块用的较少-了解即可。","link":"#其他模块用的较少-了解即可。","children":[]}]}],"git":{"createdTime":1724532946000,"updatedTime":1724532946000,"contributors":[{"name":"wr","email":"893634104@qq.com","commits":1}]},"readingTime":{"minutes":6.73,"words":2019},"filePathRelative":"后端/NodeJS/路径相关/README.md","localizedDate":"2024年8月25日","excerpt":"\\n<h3>一、相对路径 和 绝对路径</h3>\\n<p>fs 模块对资源进行操作时，路径的写法有两种：</p>\\n<ul>\\n<li>相对路径\\n<ul>\\n<li><code>./index.txt</code> 当前目录下的 <code>index.txt</code> 文件。</li>\\n<li><code>index.js</code> 和上面的写法等效。</li>\\n<li><code>../index.js</code> 当前目录的上一级目录的 <code>index.txt</code> 文件。</li>\\n</ul>\\n</li>\\n<li>绝对路径\\n<ul>\\n<li><code>C:/index.txt</code> window 系统下的绝对路径，表示 <code>C盘根目录</code>下 的 <code>index.txt</code> 文件。</li>\\n<li><code>/user/bin</code> Linux 系统下的绝对路径。</li>\\n</ul>\\n</li>\\n</ul>"}');export{x as comp,y as data};
