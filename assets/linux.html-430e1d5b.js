import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="解压和压缩" tabindex="-1"><a class="header-anchor" href="#解压和压缩" aria-hidden="true">#</a> 解压和压缩</h2><h3 id="_1、tar" tabindex="-1"><a class="header-anchor" href="#_1、tar" aria-hidden="true">#</a> 1、tar</h3><ul><li><p>打包和压缩</p><p>打包：将多个文件(夹)打包成一个文件</p><p>压缩：通过某种算法将大文件压缩成一个小文件</p></li><li><p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打包并压缩  xxx -&gt; xxx.tar.gz</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> ./xxx.tar.gz ./xxx

<span class="token comment"># 解压缩并解包  xxx.tar.gz -&gt; xxx</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  ./xxx.tar.gz

<span class="token comment"># 打包  xxx -&gt; xxx.tar</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> ./xxx.tar ./xxx

<span class="token comment"># 解包  xxx.tar -&gt; xxx</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span>  ./xxx.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令含义：</p><ul><li>-z 通过gzip进行压缩或者解压缩</li><li>-c --create 打包</li><li>-x --extract 解包</li><li>-f --file 要操作的文件名</li><li>-v --verbose 显示tar处理的文件信息的过程</li><li>-C 解压文件至指定的目录</li></ul></li></ul><h3 id="_2、zip、unzip" tabindex="-1"><a class="header-anchor" href="#_2、zip、unzip" aria-hidden="true">#</a> 2、zip、unzip</h3><ul><li><p>zip 打包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打包  xxx -&gt; xxx.tar</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> ./xxx.zip ./xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>unzip 解包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解包  xxx.tar -&gt; xxx</span>
<span class="token function">unzip</span> ./xxx.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>命令含义：</p><ul><li>-c 递归压缩目录</li></ul></li></ul><h2 id="防火墙和端口" tabindex="-1"><a class="header-anchor" href="#防火墙和端口" aria-hidden="true">#</a> 防火墙和端口</h2><h3 id="_1、防火墙的相关命令" tabindex="-1"><a class="header-anchor" href="#_1、防火墙的相关命令" aria-hidden="true">#</a> 1、防火墙的相关命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开机启用防火墙</span>
systemctl <span class="token builtin class-name">enable</span> firewalld.service

<span class="token comment"># 开机禁用防火墙</span>
systemctl disable firewalld.service

<span class="token comment"># 启动防火墙</span>
systemctl start firewalld

<span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld

<span class="token comment"># 检查防火墙状态</span>
systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、使用firewall-cmd配置端口" tabindex="-1"><a class="header-anchor" href="#_2、使用firewall-cmd配置端口" aria-hidden="true">#</a> 2、使用firewall-cmd配置端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙状态</span>
firewall-cmd <span class="token parameter variable">--state</span>

<span class="token comment"># 重新加载配置</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 查看开放的端口</span>
firewall-cmd --list-ports

<span class="token comment"># 开启防火墙端口(8088)</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># 关闭防火墙端口(8088)</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：添加端口后，必须用命令<code>firewall-cmd --reload</code>重新加载一遍才会生效</p><p>命令含义：</p><ul><li>–zone 作用域</li><li>–add-port=9200/tcp 添加端口，格式为：端口/通讯协议</li><li>–permanent 永久生效，没有此参数重启后失效</li></ul><h2 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h2><h3 id="_1、安装宝塔" tabindex="-1"><a class="header-anchor" href="#_1、安装宝塔" aria-hidden="true">#</a> 1、安装宝塔</h3><ul><li><p>宝塔官网地址：https://www.bt.cn/new/index.html</p></li><li><p>Centos安装脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> install.sh http://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> install.sh ed8484bec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Ubuntu/Deepin安装脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">bash</span> install.sh ed8484bec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装过程需要等待一会、看到以下信息表示安装成功，要记住宝塔内外网面板地址和账号密码，后面登录宝塔面板会用到。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>外网面板地址: http://124.222.244.61:8888/31dc0a89
内网面板地址: http://124.222.244.61:8888/31dc0a89
username: dsqgjgyk
password: 966d859f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果忘记密码可以使用 <code>bt</code> 命令，进行相关操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>宝塔面板命令行<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 重启面板服务           <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> 改面板端口
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 停止面板服务           <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> 清除面板缓存
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 启动面板服务           <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> 清除登录限制
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 重载面板服务
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> 修改面板密码           <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> 取消域名绑定限制
<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> 修改面板用户名         <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> 取消IP访问限制
<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> 强制修改MySQL密码      <span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span> 查看面板默认信息
<span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span> 显示面板错误日志      <span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> 清理系统垃圾
<span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span> 关闭BasicAuth认证     <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> 修复面板<span class="token punctuation">(</span>检查错误并更新面板文件到最新版<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span> 关闭动态口令认证          <span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span> 设置日志切割是否压缩
<span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> 设置是否保存文件历史副本  <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> 设置是否自动备份面板
<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> 取消                   <span class="token punctuation">(</span><span class="token number">29</span><span class="token punctuation">)</span> 取消访问设备验证
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
请输入命令编号：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2、安装jdk" tabindex="-1"><a class="header-anchor" href="#_2、安装jdk" aria-hidden="true">#</a> 2、安装JDK</h3><ul><li><p>下载<code>JDK</code>，将<code>JDK</code>上传到<code>linux</code>目录中或者通过<code>wget</code> 下载</p></li><li><p>解压<code>JDK</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u141-linux-x64 .tar.gz

<span class="token comment"># 重命名</span>
<span class="token function">mv</span> ./jdk-8u141-linux-x64 .tar.gz ./jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编辑配置文件，添加环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用vim编辑 profile文件</span>
<span class="token function">vim</span> /etc/profile

<span class="token comment"># 配置环境变量 /opt/software/jdk11是JDK所在目录</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/software/jdk11
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更新配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看安装情况</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span>root<span class="token annotation punctuation">@localhost</span> <span class="token operator">~</span><span class="token punctuation">]</span># java <span class="token operator">-</span>version
java version <span class="token string">&quot;1.8.0_121&quot;</span>
<span class="token class-name">Java</span><span class="token punctuation">(</span><span class="token constant">TM</span><span class="token punctuation">)</span> <span class="token constant">SE</span> <span class="token class-name">Runtime</span> <span class="token class-name">Environment</span> <span class="token punctuation">(</span>build <span class="token number">1.8</span><span class="token number">.0_121</span><span class="token operator">-</span>b13<span class="token punctuation">)</span>
<span class="token class-name">Java</span> <span class="token class-name">HotSpot</span><span class="token punctuation">(</span><span class="token constant">TM</span><span class="token punctuation">)</span> <span class="token number">64</span><span class="token operator">-</span><span class="token class-name">Bit</span> <span class="token class-name">Server</span> <span class="token constant">VM</span> <span class="token punctuation">(</span>build <span class="token number">25.121</span><span class="token operator">-</span>b13<span class="token punctuation">,</span> mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3、安装tomcat" tabindex="-1"><a class="header-anchor" href="#_3、安装tomcat" aria-hidden="true">#</a> 3、安装tomcat</h3><ul><li><p>通过<code>wget</code> 安装 <code>tomcat8.x</code></p><p><code>--no-check-certificate</code> (不检查证书)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.84/bin/apache-tomcat-8.5.84.tar.gz --no-check-certificate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>解压 <code>tomcat8.x</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ./apache-tomcat-8.5.84.tar.gz

<span class="token comment"># 重命名</span>
 <span class="token function">mv</span> ./apache-tomcat-8.5.84 tomcat8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启防火墙端口 <code>8080</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4、安装mysql" tabindex="-1"><a class="header-anchor" href="#_4、安装mysql" aria-hidden="true">#</a> 4、安装mysql</h3><ul><li><p>查看是否已经安装 <code>mysql</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看是否安装 <code>mariadb</code> ，如果存在就需要卸载(和<code>mysql</code>冲突)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb

<span class="token comment"># -e 表示卸载，也就是 erase 的首字母。</span>
<span class="token comment"># --nodeps 忽略依赖 表示强制卸载</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> mariadb-libs-5.5.41-2.el7_0.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 <code>wget</code>安装 <code>mysql</code>或者通过<code>ftp</code>工具上传</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载mysql</span>
<span class="token function">wget</span> https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.31-1.el7.x86_64.rpm-bundle.tar


<span class="token comment"># 创建mysql文件夹，并解压mysql</span>
<span class="token function">mkdir</span> mysql
<span class="token builtin class-name">cd</span> mysql
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> <span class="token punctuation">..</span>/mysql-8.0.31-1.el7.x86_64.rpm-bundle.tar 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>顺序安装<code>rpm</code>安装包（一定要按顺序执行安装！）</p><p>安装 <code>mysql-community-server</code> 时需要依赖 <code>net-tools</code>工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-common-8.0.31-1.el7.x86_64.rpm

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-client-plugins-8.0.31-1.el7.x86_64.rpm

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-libs-8.0.31-1.el7.x86_64.rpm 

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-devel-8.0.31-1.el7.x86_64.rpm 

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-libs-compat-8.0.31-1.el7.x86_64.rpm 

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-client-8.0.31-1.el7.x86_64.rpm

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-icu-data-files-8.0.31-1.el7.x86_64.rpm 

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> ./mysql-community-server-8.0.31-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动 <code>mysql</code>服务</p><p><code>mysql</code>安装完成之后，会自动注册为系统的服务，服务名为mysqld</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看mysql服务状态</span>
systemctl status mysqld

<span class="token comment"># 启动mysql服务</span>
systemctl start mysqld	

<span class="token comment"># 停止mysql服务</span>
systemctl stop mysqld

<span class="token comment"># 设置开机时启动mysql服务，避免每次开机启动mysql</span>
systemctl <span class="token builtin class-name">enable</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>登录 <code>mysql</code></p><p>查看mysql默认密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /var/log/mysqld.log <span class="token operator">|</span> <span class="token function">grep</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登录<code>mysql</code>并修改密码</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 登录mysql
mysql -p root -p RGEkxsN==5at

# 进来之后执行其他命令会报错，系统会提示：需要先设置新密码才能执行其他操作，先将密码改成root
# 如果是8.x会报错 ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
alter user &#39;root&#39;@&#39;localhost&#39; Identified BY &#39;root&#39;;

# 决绝方案：临时更换一个密码强度较高的字符串
# mysql密码长度默认是8，最少需要8位
# mysql密码策略是MEDIUM， 表示验证长度、数字、大小写、特殊字符
alter user &#39;root&#39;@&#39;localhost&#39; Identified BY &#39;Root123456!&#39;;

# 查看 mysql 初始的密码策略 可以参考https://developer.aliyun.com/article/811640
show variables like &#39;validate_password%&#39;;
+--------------------------------------+-------+
| Variable_name                        | Value |
+--------------------------------------+-------+
| validate_password.check_user_name    | ON    |
| validate_password.dictionary_file    |       |
| validate_password.length             | 8     |
| validate_password.mixed_case_count   | 1     |
| validate_password.number_count       | 1     |
| validate_password.policy             | MEDIUM|
| validate_password.special_char_count | 1     |
+--------------------------------------+-------+


# 修改策略(0表示LOW)
set global validate.password_policy = 0;

# 修改密码长度
set global validate_password.length = 4;

# 修改了策略和密码长度之后，可以再次修改密码
alter user &#39;root&#39;@&#39;localhost&#39; Identified BY &#39;root&#39;;

# 退出在重新登录就ok了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>redis</code> 服务开启外网访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户和权限管理 参考：https://blog.csdn.net/lu1171901273/article/details/91635417</p><p>新建用户</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># CREATE USER &#39;username&#39;@&#39;host&#39; IDENTIFIED BY &#39;password&#39;;

CREATE USER &#39;ilovesshan&#39;@&#39;%&#39; IDENTIFIED BY &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>授权</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># GRANT privileges ON databasename.tablename TO &#39;username&#39;@&#39;host&#39;
GRANT SELECT on wjhs.* TO &#39;ilovesshan&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>撤销权限</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># REVOKE privilege ON databasename.tablename FROM &#39;username&#39;@&#39;host&#39;;
REVOKE SELECT on wjhs.* FROM &#39;ilovesshan&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新权限(每次修改都需要重新刷新权限)</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_5、安装redis" tabindex="-1"><a class="header-anchor" href="#_5、安装redis" aria-hidden="true">#</a> 5、安装redis</h3><ul><li>安装<code>gcc</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>安装 <code>redis</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://download.redis.io/releases/redis-6.0.16.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>解压 <code>redis</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ./redis6.0.16.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入<code>redis</code>目录并执行<code>make</code>命令编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis6.0.16
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果执行make命令报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先查看当前的gcc版本，查看gcc的版本是否在 5.3以上</span>
gcc <span class="token parameter variable">-v</span>

<span class="token comment"># 如果当前的gcc版本不是5.3以上，执行下面命令更新gcc版本，升级到 5.3及以上版本</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> centos-release-scl
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
scl <span class="token builtin class-name">enable</span> devtoolset-9 <span class="token function">bash</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>redis</code> 服务开启外网访问</p><p>开启防火墙端口 <code>6379</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">6379</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑 <code>redis.conf</code>文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span>  /home/env/redis-6.0.16/redis.conf

<span class="token comment"># 注释 bind 127.0.0.1 或者改成 bind 0.0.0.0</span>
<span class="token comment"># bind 127.0.0.1</span>

<span class="token comment"># 关闭保护模式，这样外网可以访问到，将protected-mode no 替换成 protected-mode yes</span>
protected-mode no

<span class="token comment"># 设置Redis密码 </span>
requirepass yourPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置<code>redis</code> 自动后台运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改redis.conf文件，将 daemonize no 替换成 daemonize yes</span>
<span class="token function">vim</span>  /home/env/redis-6.0.16/redis.conf

<span class="token comment"># 命令行模式下输入: /daemonize no 直接查找然后修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动 <code>redis</code> 服务端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/env/redis-6.0.16/src
redis-server <span class="token punctuation">..</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动 <code>redis</code> 客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/env/redis-6.0.16/src
redis-server <span class="token punctuation">..</span>/redis.conf

<span class="token comment"># 执行 ping 如果返回 PONG 就表示安装成功了</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,27),c=[l];function d(p,t){return n(),a("div",null,c)}const o=s(i,[["render",d],["__file","linux.html.vue"]]);export{o as default};
