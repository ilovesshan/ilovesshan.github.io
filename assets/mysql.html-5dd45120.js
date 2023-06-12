import{_ as n,p as a,q as s,a1 as l}from"./framework-96b046e1.js";const e="/assets/image-20230423223017899-1e92bdf9.png",i={},o=l('<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1><h3 id="谈谈三大范式" tabindex="-1"><a class="header-anchor" href="#谈谈三大范式" aria-hidden="true">#</a> 谈谈三大范式？</h3><ol><li>三大范式是 Mysql 数据库设计表结构所遵循的规范和指导方法，目的是为了减少冗余，建立结构合理的数据库，从而提高数据存储和使用的性能。</li><li>三大范式之间是具有依赖关系的，比如第二范式是在第一范式的基础上建设的、第三范式是在第二范式的基础上建设的。</li><li>三大范式 <ul><li>第一范式：表中字段的数据，不可以再拆分。</li><li>第二范式：在满足第一范式的情况下，遵循唯一性，消除部分依赖。即，表中任意一个主键或任意一组联合主键，可以确定除该主键外的所有的非主键值。再说通俗点讲就是，一个表只能描述一件事情。</li><li>在满足第二范式的情况下，消除传递依赖。即，在任一主键都可以确定所有非主键字段值的情况下，不能存在某非主键字段 A 可以获取 某非主键字段 B。</li></ul></li></ol><h3 id="事务的基本特性和隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的基本特性和隔离级别" aria-hidden="true">#</a> 事务的基本特性和隔离级别？</h3><ol><li>事务基本特性ACID分别是： <ul><li>原子性（Atomicity）：指的是⼀个事务中的操作要么全部成功，要么全部失败。</li><li>一致性（Consistency）：指的是数据库总是从⼀个⼀致性的状态转换到另外⼀个⼀致性的状态。</li><li>隔离性（Isolation）：指的是⼀个事务的修改在最终提交前，对其他事务是不可⻅的。</li><li>持久性（Durability）：指的是⼀旦事务提交，所做的修改就会永久保存到数据库中。</li></ul></li><li>隔离性有4个隔离级别，分别是： <ul><li>read uncommit 读未提交，可能会读到其他事务未提交的数据，也叫做脏读。</li><li>read commit 读已提交，两次读取结果不⼀致，叫做不可重复读。</li><li>repeatable read 可重复读，这是mysql的默认级别，就是每次读取结果都⼀样，但是有可能产⽣幻读。</li><li>serializable 串⾏，⼀般是不会使⽤的，他会给每⼀⾏读取的数据加锁，会导致⼤量超时和锁竞争的问题。</li></ul></li></ol><h3 id="数据库三大读问题" tabindex="-1"><a class="header-anchor" href="#数据库三大读问题" aria-hidden="true">#</a> 数据库三大读问题？</h3><ol><li>脏读(Drity Read)：某个事务已更新⼀份数据，另⼀个事务在此时读取了同⼀份数据，由于某些原因，前⼀个事务RollBack了操作，则后⼀个事务所读取的数据就会是不正确的。</li><li>不可重复读(Non-repeatable read):在⼀个事务的两次查询之中数据不⼀致，这可能是两次查询过程中间插⼊了⼀个事务更新的原有的数据。</li><li>幻读(Phantom Read):在⼀个事务的两次查询中数据笔数不⼀致，例如有⼀个事务查询了⼏列(Row)数据，⽽另⼀个事务却在此时插⼊了新的⼏列数据，先前的事务在接下来的查询中，就会发现有⼏列数据是它先前所没有的。</li></ol><h3 id="数据库acid靠什么保证的" tabindex="-1"><a class="header-anchor" href="#数据库acid靠什么保证的" aria-hidden="true">#</a> 数据库ACID靠什么保证的？</h3><ol><li>原⼦性（A）：由undo log⽇志保证，它记录了需要回滚的⽇志信息，事务回滚时撤销已经执⾏成功的sql。</li><li>⼀致性（C）：由其他三⼤特性保证、程序代码要保证业务上的⼀致性。</li><li>隔离性（I）：由MVCC（多版本并发控制）来保证。</li><li>持久性（D）：由内存+redo log来保证，mysql修改数据同时在内存和redo log记录这次操作，宕机的时候可以从redo log恢复。</li></ol><h3 id="什么是mvcc" tabindex="-1"><a class="header-anchor" href="#什么是mvcc" aria-hidden="true">#</a> 什么是MVCC？</h3><ol><li>MVCC，即多版本并发控制 （ Multi-Version Concurrency Control）。它是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问，数据库隔离级别读已提交、可重复读 都是基于MVCC实现的。</li></ol><h3 id="常见搜素引擎以及区别" tabindex="-1"><a class="header-anchor" href="#常见搜素引擎以及区别" aria-hidden="true">#</a> 常见搜素引擎以及区别？</h3><ol><li>InnoDB <ul><li>支持事务</li><li>使用的锁力度默认为行级别，可以支持更高的的并发，同时也支持表锁。</li><li>支持外键约束，外键约束其实降低了表的查询速度，增加了表之间的耦合。</li><li>不存储表的总⾏数。</li></ul></li><li>MyISAM <ul><li>不支持事务。</li><li>只支持表锁。</li><li>不支持外键。</li><li>存储表的总⾏数。</li></ul></li><li>Memory <ul><li>数据存储在内存中。</li></ul></li><li>区别 <ul><li>InnoDB：用于事务处理，具有ACID事务支持的特性。如果在应用中大量执行Insert或者Update操作应该选择InnoDB作为存储引擎。</li><li>MyISAM：管理非事务表，提高高速存储以及全文搜索能力，如果在应用中大量执行Select操作应该选择MyISAM作为存储引擎。</li></ul></li></ol><h3 id="explain语句结果中各个字段分表表示什么" tabindex="-1"><a class="header-anchor" href="#explain语句结果中各个字段分表表示什么" aria-hidden="true">#</a> Explain语句结果中各个字段分表表示什么？</h3><ol><li>通过对explain语句的分析，可以了解查询语句的执行情况，找出查询语句执行的瓶颈，从而优化查询语句。</li><li>Explain语句结果中各个字段 <ul><li>id： 查询语句中每出现⼀个SELECT关键字，MySQL就会为它分配⼀个唯⼀的id值。</li><li>select_type ：SELECT关键字对应的那个查询的类型。</li><li>table: 表名。</li><li>partitions: 匹配的分区信息。</li><li>type： 针对单表的查询⽅式（全表扫描、索引）。</li><li>possible_keys：可能⽤到的索引。</li><li>key：实际上使⽤的索引。</li><li>key_len：实际使⽤到的索引⻓度。</li></ul></li></ol><h3 id="索引覆盖是什么" tabindex="-1"><a class="header-anchor" href="#索引覆盖是什么" aria-hidden="true">#</a> 索引覆盖是什么？</h3><ol><li>索引覆盖就是⼀个SQL在执⾏时，可以利⽤索引来快速查找，并且此SQL所要查询的字段在当前索引对应的字段中都包含了，那么就表示此SQL⾛完索引后不⽤回表了，所需要的字段都在当前索引的叶⼦节点上存在，可以直接作为结果返回了</li></ol><h3 id="b树和b-树的区别-为什么mysql使用b-树" tabindex="-1"><a class="header-anchor" href="#b树和b-树的区别-为什么mysql使用b-树" aria-hidden="true">#</a> B树和B+树的区别，为什么Mysql使⽤B+树？</h3><ol><li><p>B树的特点</p><ul><li>节点排序。</li><li>⼀个节点了可以存多个元素，多个元素也排序了。</li></ul></li><li><p>B+树的特点</p><ul><li>拥有B树的特点。</li><li>叶⼦节点之间有指针。</li><li>⾮叶⼦节点上的元素在叶⼦节点上都冗余了，也就是叶⼦节点中存储了所有的元素，并且排好顺序。</li></ul></li><li><p>Mysql使用B+树的原因</p><ul><li>因为索引是⽤来加快查询的，⽽B+树通过对数据进⾏排序所以是可以提⾼查询速度的。然后通过⼀个节点中可以存储多个元素，从⽽可以使得B+树的⾼度不会太⾼。</li><li>B+树叶⼦节点之间有指针，可以很好的⽀持全表扫描，范围查找等SQL语句。</li></ul></li></ol><h3 id="mysql锁有哪些-如何理解" tabindex="-1"><a class="header-anchor" href="#mysql锁有哪些-如何理解" aria-hidden="true">#</a> Mysql锁有哪些，如何理解？</h3><ol><li>按锁粒度分类 <ul><li>⾏锁：锁某⾏数据，锁粒度最⼩，并发度⾼。</li><li>表锁：锁整张表，锁粒度最⼤，并发度低。</li><li>间隙锁：锁的是⼀个区间。</li></ul></li><li>读写锁 <ul><li>共享锁：也就是读锁，⼀个事务给某⾏数据加了读锁，其他事务也可以读，但是不能写。</li><li>排它锁：也就是写锁，⼀个事务给某⾏数据加了写锁，其他事务不能读，也不能写。</li></ul></li><li>乐观锁和悲观锁 <ul><li>乐观锁：并不会真正的去锁某⾏记录，⽽是通过⼀个版本号来实现的。</li><li>悲观锁：上⾯所的⾏锁、表锁等都是悲观锁。</li></ul></li></ol><h3 id="mysql慢查询该如何优化" tabindex="-1"><a class="header-anchor" href="#mysql慢查询该如何优化" aria-hidden="true">#</a> Mysql慢查询该如何优化？</h3><ol><li>检查是否⾛了索引，如果没有则优化SQL利⽤索引。</li><li>检查所查字段是否都是必须的，是否查询了过多字段，查出了多余数据。</li><li>检查表中数据是否过多，是否应该进⾏分库分表了。</li><li>. 检查数据库实例所在机器的性能配置，是否太低，是否可以适当增加资源。</li></ol><h3 id="如何设计一张树形菜单表" tabindex="-1"><a class="header-anchor" href="#如何设计一张树形菜单表" aria-hidden="true">#</a> 如何设计一张树形菜单表？</h3><ol><li><p>可以通过建立一个parentId字段来进行节点的层级关联。</p><p><img src="'+e+`" alt="image-20230423223017899"></p></li></ol><h3 id="如何查询树形菜单表" tabindex="-1"><a class="header-anchor" href="#如何查询树形菜单表" aria-hidden="true">#</a> 如何查询树形菜单表？</h3><ol><li><p>通过自链接查询（适用于固定层级）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span>
       one<span class="token punctuation">.</span>id            one_id<span class="token punctuation">,</span>
       one<span class="token punctuation">.</span>name          one_name<span class="token punctuation">,</span>
       one<span class="token punctuation">.</span>parentid      one_parentid<span class="token punctuation">,</span>
       one<span class="token punctuation">.</span>orderby       one_orderby<span class="token punctuation">,</span>
       one<span class="token punctuation">.</span>label         one_label<span class="token punctuation">,</span>
       two<span class="token punctuation">.</span>id            two_id<span class="token punctuation">,</span>
       two<span class="token punctuation">.</span>name          two_name<span class="token punctuation">,</span>
       two<span class="token punctuation">.</span>parentid      two_parentid<span class="token punctuation">,</span>
       two<span class="token punctuation">.</span>orderby       two_orderby<span class="token punctuation">,</span>
       two<span class="token punctuation">.</span>label         two_label
   <span class="token keyword">from</span> course_category one
            <span class="token keyword">inner</span> <span class="token keyword">join</span> course_category two <span class="token keyword">on</span> one<span class="token punctuation">.</span>id <span class="token operator">=</span> two<span class="token punctuation">.</span>parentid
   <span class="token keyword">where</span> one<span class="token punctuation">.</span>parentid <span class="token operator">=</span> <span class="token number">1</span>
     <span class="token operator">and</span> one<span class="token punctuation">.</span>is_show <span class="token operator">=</span> <span class="token number">1</span>
     <span class="token operator">and</span> two<span class="token punctuation">.</span>is_show <span class="token operator">=</span> <span class="token number">1</span>
   <span class="token keyword">order</span> <span class="token keyword">by</span> one<span class="token punctuation">.</span>orderby<span class="token punctuation">,</span>
            two<span class="token punctuation">.</span>orderby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过递归查询（需要MySQL8.x支持，适用于非固定层级）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">with</span> recursive t1 <span class="token keyword">as</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  course_category p <span class="token keyword">where</span>  id<span class="token operator">=</span> <span class="token string">&#39;1&#39;</span>
    <span class="token keyword">union</span> <span class="token keyword">all</span>
    <span class="token keyword">select</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> course_category t <span class="token keyword">inner</span> <span class="token keyword">join</span> t1 <span class="token keyword">on</span> t1<span class="token punctuation">.</span>id <span class="token operator">=</span> t<span class="token punctuation">.</span>parentid
<span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span>  <span class="token keyword">from</span> t1 <span class="token keyword">order</span> <span class="token keyword">by</span> t1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> t1<span class="token punctuation">.</span>orderby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,27),t=[o];function p(r,c){return a(),s("div",null,t)}const u=n(i,[["render",p],["__file","mysql.html.vue"]]);export{u as default};
