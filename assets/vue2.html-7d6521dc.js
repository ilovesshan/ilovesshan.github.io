import{_ as e,p as l,q as i,a1 as a}from"./framework-96b046e1.js";const t={},d=a(`<h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h1><h3 id="vue框架优点有那些" tabindex="-1"><a class="header-anchor" href="#vue框架优点有那些" aria-hidden="true">#</a> Vue框架优点有那些？</h3><ol><li>Vue是一个轻巧、高性能、可组件化的MVVM库，同时拥有非常容易上手的API。</li><li>Vue框架两大特点：响应式编程、组件化。</li><li>Vue优点：轻量级、简单易学、可重用性、独立开发等等。</li></ol><h3 id="vue组件间通信方式有那些" tabindex="-1"><a class="header-anchor" href="#vue组件间通信方式有那些" aria-hidden="true">#</a> Vue组件间通信方式有那些？</h3><ol><li>父组件向子组件传递数据：子组件中使用$emit派发事件，父组件中使用v-on监听事件。</li><li>祖先组件通过依赖注入(inject / provide)的方式，向其所有子孙后代传递数据。</li><li>通过属性$root 、$parent 、$children、$ref，访问根组件、父级组件、子组件中的数据。</li><li>通过事件总线(eventbus)的方式，可以实现任意两个组件间进行数据传递。</li><li>通过 VueJs 的状态管理模式 Vuex，实现多个组件进行数据共享，推荐使用这种方式进行项目中各组件间的数据传递。</li></ol><h3 id="vue中常用的修饰符" tabindex="-1"><a class="header-anchor" href="#vue中常用的修饰符" aria-hidden="true">#</a> Vue中常用的修饰符？</h3><ol><li>.stop：等同于 JavaScript 中的 event.stopPropagation() ，防止事件冒泡。</li><li>.prevent：等同于 JavaScript 中的event.preventDefault()，阻止事件传播。</li><li>.capture：与事件冒泡的方向相反，事件捕获由外到内。</li><li>.self：只会触发自己范围内的事件，不包含子元素。</li><li>.once：只会触发一次。</li></ol><h3 id="v-show和v-if指令的区别" tabindex="-1"><a class="header-anchor" href="#v-show和v-if指令的区别" aria-hidden="true">#</a> v-show和v-if指令的区别？</h3><ol><li><p>相同点</p><ul><li>v-show和v-if指令都可以实现对页面元素的显示和隐藏控制，都是动态显示 DOM 元素。</li></ul></li><li><p>不同点</p><ul><li>v-if进行切换时，是对Dom元素进行创建或者销毁。</li></ul></li></ol><ul><li>v-show进行切换时，是控制Dom元素的diasplay属性。 <ul><li>v-if是惰性的，若初始值为 false ，就不会编译了。</li></ul></li></ul><ol start="3"><li><p>性能消耗</p><ul><li>v-if 有更高的切换消耗。 v-show 有更高的初始渲染消耗。</li></ul></li><li><p>使用场景</p><ul><li>v-if 适合偶尔切换。</li><li>v-show 适合频繁切换。</li></ul></li></ol><h3 id="v-moel的使用原理" tabindex="-1"><a class="header-anchor" href="#v-moel的使用原理" aria-hidden="true">#</a> v-moel的使用原理？</h3><ol><li>v-model用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作 <ul><li>v-bind绑定一个value属性。</li><li>v-on指令给当前元素绑定input事件。</li></ul></li></ol><h3 id="单向绑定和双向绑定的概念" tabindex="-1"><a class="header-anchor" href="#单向绑定和双向绑定的概念" aria-hidden="true">#</a> 单向绑定和双向绑定的概念</h3><ol><li>单向绑定非常简单，就是把Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新。</li><li>双向绑定：如果用户更新了View，Model的数据也自动被更新了。</li></ol><h3 id="如何让css只在当前组件中起作用" tabindex="-1"><a class="header-anchor" href="#如何让css只在当前组件中起作用" aria-hidden="true">#</a> 如何让CSS只在当前组件中起作用？</h3><ol><li>在style标签内添加：scoped</li></ol><h3 id="vue中强制覆盖第三方css的方式" tabindex="-1"><a class="header-anchor" href="#vue中强制覆盖第三方css的方式" aria-hidden="true">#</a> Vue中强制覆盖第三方css的方式？</h3><ol><li>覆盖三方样式有三种方式： <code>&gt;&gt;&gt;</code> 、<code>/deep/</code>、<code>::v-deep</code>、<code>！important</code></li><li>如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 <code>&gt;&gt;&gt;</code> 操作。</li><li>些像 Sass 之类的预处理器无法正确解析 <code>&gt;&gt;&gt;</code>。这种情况下你可以使用 <code>/deep/</code> 或 <code>::v-deep</code> 操作符取而代之——两者都是 <code>&gt;&gt;&gt;</code> 的别名，同样可以正常工作。</li><li>谨慎使用<code>！important</code> ， 因为<code>!important</code> 是例外规则，没法算清优先级权重，就是说使用 <code>!important</code> 会破坏固有的级联规则。</li></ol><h3 id="keep-alive的作用是什么" tabindex="-1"><a class="header-anchor" href="#keep-alive的作用是什么" aria-hidden="true">#</a> keep-alive的作用是什么？</h3><ol><li><p>keep-alive作为一种Vue的内置组件，主要作用是缓存组件状态。当需要组件的切换时，不用重新渲染组件，避免多次渲染，就可以使用keep-alive包裹组件。</p></li><li><p>props属性</p><ul><li><code>include</code> 字符串或者正则表达式，只有名称匹配的组件会被缓存。</li><li><code>exclude</code> 字符串或者正则表达式，任何名臣匹配的组件都不会被缓存。</li><li><code>max</code> 数字，最多可以缓多少组件实例。</li></ul></li><li><p>keep-alive生命周期</p><ul><li>页面第一次进入：created-&gt; mounted-&gt; activated，退出时触发deactivated。</li><li>当再次进入（前进或者后退）时，只触发activated或者deactivated。</li></ul></li></ol><h3 id="vue中如何获取dom" tabindex="-1"><a class="header-anchor" href="#vue中如何获取dom" aria-hidden="true">#</a> Vue中如何获取dom？</h3><ol><li>给dom元素加ref=&quot;refname&quot;。</li><li>通过this.$refs.refname进行获取dom元素。</li></ol><h3 id="列举几种vue中的指令和它的用法" tabindex="-1"><a class="header-anchor" href="#列举几种vue中的指令和它的用法" aria-hidden="true">#</a> 列举几种Vue中的指令和它的用法</h3><ol><li>v-model：对数据进行双向绑定。</li><li>v-on：添加事件监听。</li><li>v-html：将字符串当作Html元素进行解析渲染。</li><li>v-text：渲染普通文本。</li><li>v-once：定义它的元素或组件只会渲染一次，包括元素或者组件的所有字节点。首次渲染后，不再随着数据的改变而重新渲染。</li><li>v-if：动态控制页面Dom元素的显示和隐藏。</li><li>v-show：动态控制页面Dom元素的显示和隐藏。</li></ol><h3 id="vue-loader是什么-它的用途是什么" tabindex="-1"><a class="header-anchor" href="#vue-loader是什么-它的用途是什么" aria-hidden="true">#</a> Vue-loader是什么？它的用途是什么？</h3><ol><li>Vue-loader：Vue文件的加载器，它可以解析和转换.Vue文件。提取出其中的逻辑代码 script,样式代码style,以及HTML 模板template，再分别把他们交给对应的loader去处理。</li><li>用途是降级: <ul><li>js可以写es6。</li><li>style样式可以写scss或less。</li><li>template可以加jade等。</li></ul></li></ol><h3 id="使用v-for的时候为什么用key" tabindex="-1"><a class="header-anchor" href="#使用v-for的时候为什么用key" aria-hidden="true">#</a> 使用v-for的时候为什么用key？</h3><ol><li>给每个dom元素加上key作为唯一标识 ，diff算法可以正确的识别这个节点，使页面渲染更加迅速。</li></ol><h3 id="v-on可以监听多个方法吗" tabindex="-1"><a class="header-anchor" href="#v-on可以监听多个方法吗" aria-hidden="true">#</a> v-on可以监听多个方法吗？</h3><ol><li>可以，比如 v-on=&quot;onclick,onblur&quot;。</li></ol><h3 id="nexttick的使用" tabindex="-1"><a class="header-anchor" href="#nexttick的使用" aria-hidden="true">#</a> $nextTick的使用?</h3><ol><li>Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。</li><li>$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM。</li></ol><h3 id="vue组件中data为什么必须是一个函数" tabindex="-1"><a class="header-anchor" href="#vue组件中data为什么必须是一个函数" aria-hidden="true">#</a> Vue组件中data为什么必须是一个函数？</h3><ol><li>组件中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，相当于每个组件实例都有自己私有的数据空间，他们只负责各自维护数据，不会造成混乱。</li><li>而单纯的写成对象形式，就是所有组件实例共用了一个data，这样改一个全部都会修改，牵一发而动全身。</li></ol><h3 id="vue在双向数据绑定是如何实现的" tabindex="-1"><a class="header-anchor" href="#vue在双向数据绑定是如何实现的" aria-hidden="true">#</a> Vue在双向数据绑定是如何实现的？</h3><ol><li>Vue双向数据绑定是通过数据劫持、组合、发布订阅模式的方式来实现的，也就是说数据和视图同步。数据发生变化，视图跟着变化，视图变化，数据也随之发生改变。</li><li>核心实现，关于Vue双向数据绑定 <ul><li>Vue2.0：其核心是Object.defineProperty()方法。</li><li>Vue3.0：其核心是Proxy 方法。</li></ul></li><li>Vue3为什么使用Proxy？ <ul><li>defineProperty缺陷： <ul><li>不能监听数组变化。</li><li>只能劫持对象的属性，给对象添加属性Vue无法检测到。</li></ul></li><li>Proxy的好处： <ul><li>proxy可以直接监听数组的变化。</li><li>proxy可以监听对象而非属性.它在目标对象之前架设一层“拦截”，因此提供了一种机制，可以对外界的访问进行过滤和改写。proxy直接劫持一个对象，并且会返回一个新对象。</li></ul></li></ul></li></ol><h3 id="单页面应用和多页面应用区别及缺点" tabindex="-1"><a class="header-anchor" href="#单页面应用和多页面应用区别及缺点" aria-hidden="true">#</a> 单页面应用和多页面应用区别及缺点？</h3><ol><li>单页面应用（SPA），通俗的说就是指只有一个主页面的应用，浏览器一开始就加载所有的js、html、css，所有的页面内容都包含在这个主页面中。</li><li>多页面（MPA），就是一个应用中有多个页面，页面跳转时是整页刷新。</li><li>单页面应优缺点 <ul><li>优点：用户体验好，快，内容的改变不需要重新加载整个页面，基于spa特性对服务器压力较小，前后端分离页面效果会比较酷炫。</li><li>缺点：不利于seo，导航不可用，如果一定要导航需要自行实现前进、后退。页面复杂度提高很多。</li></ul></li></ol><h3 id="父子组件生命周期钩子执行顺序是什么" tabindex="-1"><a class="header-anchor" href="#父子组件生命周期钩子执行顺序是什么" aria-hidden="true">#</a> 父子组件生命周期钩子执行顺序是什么？</h3><ol><li>加载渲染过程 <ul><li>父 beforeCreate -&gt; 父 created -&gt; 父 beforeMount -&gt; 子 beforeCreate -&gt; 子 created -&gt; 子 beforeMount -&gt; 子 mounted -&gt; 父 mounted</li></ul></li><li>子组件更新过程 <ul><li>父 beforeUpdate -&gt; 子 beforeUpdate -&gt; 子 updated -&gt; 父 updated</li></ul></li><li>父组件更新过程 <ul><li>父 beforeUpdate -&gt; 父 updated</li></ul></li><li>销毁过程 <ul><li>父 beforeDestroy -&gt; 子 beforeDestroy -&gt; 子 destroyed -&gt; 父 destroyed</li></ul></li></ol><h3 id="vue更新数组时触发视图更新的方法" tabindex="-1"><a class="header-anchor" href="#vue更新数组时触发视图更新的方法" aria-hidden="true">#</a> Vue更新数组时触发视图更新的方法？</h3><ol><li>push()、pop()、shift()、unshift()、splice()、sort()、reverse()。</li></ol><h3 id="什么是-vue-生命周期-有什么作用" tabindex="-1"><a class="header-anchor" href="#什么是-vue-生命周期-有什么作用" aria-hidden="true">#</a> 什么是 Vue 生命周期？有什么作用？</h3><ol><li>每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。</li><li>同时在这个过程中也会运行一些叫做 生命周期钩子 的函数，这给了用户在不同阶段添加自己的代码的机会。</li></ol><h3 id="vue生命周期的理解" tabindex="-1"><a class="header-anchor" href="#vue生命周期的理解" aria-hidden="true">#</a> Vue生命周期的理解？</h3><ol><li>总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。</li><li>创建前/后： 在beforeCreated阶段，Vue实例的$el和data都没有。</li><li>载入前/后：在beforeMount阶段，Vue实例的$el和data都初始化了，但是$el还未进行挂载、data.message还未替换。在mounted阶段，Vue实例挂载完成，data.message成功渲染。</li><li>更新前/后：当data变化时，会触发beforeUpdate和updated方法。</li><li>销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时Vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。</li></ol><h3 id="created和mounted的区别" tabindex="-1"><a class="header-anchor" href="#created和mounted的区别" aria-hidden="true">#</a> created和mounted的区别？</h3><ol><li>created：在模板渲染成html前调用（不能获取DOM元素），即通常初始化某些属性值，然后再渲染成视图。</li><li>mounted：在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。</li></ol><h3 id="vuex是什么-vuex有哪几种属性" tabindex="-1"><a class="header-anchor" href="#vuex是什么-vuex有哪几种属性" aria-hidden="true">#</a> Vuex是什么？Vuex有哪几种属性？</h3><ol><li>Vuex是Vue框架中状态管理，Vuex中有五种属性： <ul><li>state：基本数据(数据源存放地)。</li><li>getters：从基本数据派生出来的数据。</li><li>mutations： 提交更改数据的方法，同步。</li><li>actions：像一个装饰器，包裹mutations，使之可以异步。</li><li>modules：模块化Vuex。</li></ul></li></ol><h3 id="v-if-和v-for优先级" tabindex="-1"><a class="header-anchor" href="#v-if-和v-for优先级" aria-hidden="true">#</a> v-if 和v-for优先级？</h3><ol><li>在Vue2中应尽量避免二者同时使用 <ul><li>当 <code>v-if</code> 与 <code>v-for</code> 一起使用时，<code>v-for</code> 具有比 <code>v-if</code> 更高的优先级。</li><li>Vue2官方推荐的写法：采用计算属性去生成你要遍历的数组， 在computed里先做好判断，这里过滤的成本远比v-if的成本低。</li></ul></li><li>在Vue3中 <ul><li>当 <code>v-if</code> 与 <code>v-for</code> 一起使用时，<code>v-if</code> 具有比 <code>v-for</code> 更高的优先级。</li><li>在Vue3中官方推荐的写法：把 v-for 移动到容器元素上,例如ul,ol 或者外面包裹一层 template。</li></ul></li></ol><h3 id="vue-事件中如何使用-event-对象" tabindex="-1"><a class="header-anchor" href="#vue-事件中如何使用-event-对象" aria-hidden="true">#</a> Vue 事件中如何使用 event 对象?</h3><ol><li><p>获取事件对象，方法参数传递 $event 。注意在事件中要使用 $ 符号。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo($event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="computed、watch、methods-的区别" tabindex="-1"><a class="header-anchor" href="#computed、watch、methods-的区别" aria-hidden="true">#</a> Computed、Watch、Methods 的区别?</h3><ol><li>computed计算属性 : 依赖其它属性值,并且computed的值有缓存,只有它依赖的属性值发生改变,下一次获取 computed 的值时才会重新计算 computed 的值。</li><li>watch侦听器 : 更多的是观察的作用,无缓存性。类似于某些数据的监听回调,每当监听的数据变化时都会执行回调进行后续操作。</li><li>methods 里面是用来定义函数的，它需要手动调用才能执行。而不像 watch 和 computed 那样，“自动执行”预先定义的函数。</li><li>运用场景 <ul><li>当我们需要进行数值计算,并且依赖于其它数据时,应该使用 computed,因为可以利用 computed的缓存特性,避免每次获取值时,都要重新计算。</li><li>当我们需要在数据变化时执行异步或开销较大的操作时,应该使用 watch。</li></ul></li><li>多个因素影响一个显示，用Computed，一个因素的变化影响多个其他因素显示，用Watch。</li></ol><h3 id="route和router的区别" tabindex="-1"><a class="header-anchor" href="#route和router的区别" aria-hidden="true">#</a> route和router的区别?</h3><ol><li>route是路由信息对象，包括path，params，hash，query，fullPath，matched，name等路由信息参数，用来获取路由信息。</li><li>router是路由实例：是一个全局的路由器对象，用来进行路由跳转和操作路由，对象包括了路由的跳转方法，钩子函数等。</li></ol><h3 id="params和query的区别" tabindex="-1"><a class="header-anchor" href="#params和query的区别" aria-hidden="true">#</a> params和query的区别？</h3><ol><li>params是路由的一部分，必须要在路由后面添加参数名，query是拼接在url后面的参数，没有也没关系。</li><li>query要用path来引入，params要用name来引入。</li><li>query刷新不会丢失query里面的数据，而params刷新会丢失params里面的数据。</li></ol><h3 id="vue2中注册在router-link上事件无效解决方法" tabindex="-1"><a class="header-anchor" href="#vue2中注册在router-link上事件无效解决方法" aria-hidden="true">#</a> Vue2中注册在router-link上事件无效解决方法？</h3><ol><li>使用 @click.native 。</li><li>原因：router-link会阻止click事件，.native指直接监听一个原生事件。</li></ol><h3 id="怎样理解-vue-的单项数据流" tabindex="-1"><a class="header-anchor" href="#怎样理解-vue-的单项数据流" aria-hidden="true">#</a> 怎样理解 Vue 的单项数据流?</h3><ol><li>数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父组件的状态，从而导致你的应用的数据流向难以理解。</li><li>在子组件直接用 v-model 绑定父组件传过来的 props 这样是不规范的写法，开发环境会报警告，如果实在要改变父组件的 props 值可以再data里面定义一个变量，并用 prop 的值初始化它，之后用$emit 通知父组件去修改。</li></ol><h3 id="delete和vue-delete删除数组的区别" tabindex="-1"><a class="header-anchor" href="#delete和vue-delete删除数组的区别" aria-hidden="true">#</a> delete和Vue.delete删除数组的区别？</h3><ol><li>delete： delete删除数组的值（变成了empty），但是它依然会在内存中占位置。</li><li>Vue.delete：Vue.delete会删除数组在内存中的占位。</li></ol><h3 id="vuex-页面刷新数据丢失怎么解决" tabindex="-1"><a class="header-anchor" href="#vuex-页面刷新数据丢失怎么解决" aria-hidden="true">#</a> Vuex 页面刷新数据丢失怎么解决？</h3><ol><li>需要做 Vuex 数据持久化，一般使用本地储存的方案来保存数据，可以自己设计存储方案，也可以使用第三方插件。</li><li>持久化方案 <ul><li>三方插件： Vuex-persist，它是为 Vuex 持久化储存而生的一个插件。不需要你手动存取 storage，而是直接将状态保存至 cookie 或者 localStorage中。</li><li>手动存储到cookie 、 localStorage或者sessionStorage中。</li></ul></li></ol><h3 id="简单说说负载均衡" tabindex="-1"><a class="header-anchor" href="#简单说说负载均衡" aria-hidden="true">#</a> 简单说说负载均衡？</h3><ol><li>多台服务器共同协作，不让其中某一台或几台超额工作，发挥服务器的最大作用。</li><li>反向代理负载均衡（Nginx）： <ul><li>访问统一的服务器，由服务器进行调度访问实际的某个服务器。</li><li>对统一的服务器要求大，性能受到服务器群的数量。</li></ul></li></ol><h3 id="逐进增强和优雅降级" tabindex="-1"><a class="header-anchor" href="#逐进增强和优雅降级" aria-hidden="true">#</a> 逐进增强和优雅降级?</h3><ol><li>逐进增强（迭代更新）： <ul><li>针对低版本浏览器进行构建页面，保证最基本的功能。</li><li>然后再针对高版本浏览器进行效果、交互等改进和追加功能达到更好的用户体验。</li></ul></li><li>优雅降级（向下兼容）： <ul><li>一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。</li></ul></li></ol><h3 id="项目性能优化常见方式" tabindex="-1"><a class="header-anchor" href="#项目性能优化常见方式" aria-hidden="true">#</a> 项目性能优化常见方式？</h3><ol><li>减少 HTTP 请求数、减少 DNS 查询。</li><li>使用 CDN、避免重定向。</li><li>减少 DOM 元素数量、减少 DOM 操作。</li><li>使用外部 JavaScript 和 CSS、压缩 JavaScript、CSS、字体、图片等。</li><li>优化 CSS Sprite，使用 iconfont、避免图片 src 为空、做图片懒加载。</li><li>多域名分发划分内容到不同域名、尽量减少 iframe 使用。</li><li>把样式表放在 link 中、把 JavaScript 放在页面底部。</li></ol><h3 id="spa首屏加载慢如何解决" tabindex="-1"><a class="header-anchor" href="#spa首屏加载慢如何解决" aria-hidden="true">#</a> SPA首屏加载慢如何解决？</h3><ol><li>安装动态懒加载所需插件。</li><li>使用CDN资源。</li></ol>`,77),o=[d];function r(u,h){return l(),i("div",null,o)}const s=e(t,[["render",r],["__file","vue2.html.vue"]]);export{s as default};
