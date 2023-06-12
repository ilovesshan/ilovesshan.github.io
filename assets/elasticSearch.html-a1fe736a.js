const l=JSON.parse('{"key":"v-77279315","path":"/pages/middleware/elasticSearch.html","title":"ElasticSearch","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"初识 ElasticSearch","slug":"初识-elasticsearch","link":"#初识-elasticsearch","children":[{"level":3,"title":"ElasticSearch 简介","slug":"elasticsearch-简介","link":"#elasticsearch-简介","children":[]},{"level":3,"title":"正向索引和倒排索引","slug":"正向索引和倒排索引","link":"#正向索引和倒排索引","children":[]},{"level":3,"title":"ES和MySQL区别","slug":"es和mysql区别","link":"#es和mysql区别","children":[]}]},{"level":2,"title":"ElasticSearch 简单使用","slug":"elasticsearch-简单使用","link":"#elasticsearch-简单使用","children":[{"level":3,"title":"ElasticSearch 安装","slug":"elasticsearch-安装","link":"#elasticsearch-安装","children":[]},{"level":3,"title":"ES默认分词器","slug":"es默认分词器","link":"#es默认分词器","children":[]},{"level":3,"title":"IK分词器","slug":"ik分词器","link":"#ik分词器","children":[]},{"level":3,"title":"IK分词库拓展和停用","slug":"ik分词库拓展和停用","link":"#ik分词库拓展和停用","children":[]},{"level":3,"title":"索引库新增","slug":"索引库新增","link":"#索引库新增","children":[]},{"level":3,"title":"索引库查询","slug":"索引库查询","link":"#索引库查询","children":[]},{"level":3,"title":"索引库更新","slug":"索引库更新","link":"#索引库更新","children":[]},{"level":3,"title":"索引库删除","slug":"索引库删除","link":"#索引库删除","children":[]},{"level":3,"title":"文档新增","slug":"文档新增","link":"#文档新增","children":[]},{"level":3,"title":"文档查询","slug":"文档查询","link":"#文档查询","children":[]},{"level":3,"title":"文档删除","slug":"文档删除","link":"#文档删除","children":[]},{"level":3,"title":"文档更新","slug":"文档更新","link":"#文档更新","children":[]}]},{"level":2,"title":"ES 文档条件查询","slug":"es-文档条件查询","link":"#es-文档条件查询","children":[{"level":3,"title":"查询全部","slug":"查询全部","link":"#查询全部","children":[]},{"level":3,"title":"全文索引查询","slug":"全文索引查询","link":"#全文索引查询","children":[]},{"level":3,"title":"精确查询","slug":"精确查询","link":"#精确查询","children":[]},{"level":3,"title":"地理坐标查询","slug":"地理坐标查询","link":"#地理坐标查询","children":[]},{"level":3,"title":"复合查询 - fuction score Query","slug":"复合查询-fuction-score-query","link":"#复合查询-fuction-score-query","children":[]},{"level":3,"title":"复合查询 - Boolean Query","slug":"复合查询-boolean-query","link":"#复合查询-boolean-query","children":[]},{"level":3,"title":"查询条件排序","slug":"查询条件排序","link":"#查询条件排序","children":[]},{"level":3,"title":"查询条件分页","slug":"查询条件分页","link":"#查询条件分页","children":[]},{"level":3,"title":"查询条件高亮","slug":"查询条件高亮","link":"#查询条件高亮","children":[]}]},{"level":2,"title":"RestClient","slug":"restclient","link":"#restclient","children":[{"level":3,"title":"RestClient 简介","slug":"restclient-简介","link":"#restclient-简介","children":[]},{"level":3,"title":"编写创建索引库DSL","slug":"编写创建索引库dsl","link":"#编写创建索引库dsl","children":[]},{"level":3,"title":"初始化RestHighLevelClient","slug":"初始化resthighlevelclient","link":"#初始化resthighlevelclient","children":[]}]},{"level":2,"title":"RestClient 操作索引库","slug":"restclient-操作索引库","link":"#restclient-操作索引库","children":[{"level":3,"title":"RestClient 创建索引库","slug":"restclient-创建索引库","link":"#restclient-创建索引库","children":[]},{"level":3,"title":"RestClient 删除索引库","slug":"restclient-删除索引库","link":"#restclient-删除索引库","children":[]},{"level":3,"title":"RestClient 判断索引库是否存在","slug":"restclient-判断索引库是否存在","link":"#restclient-判断索引库是否存在","children":[]}]},{"level":2,"title":"RestClient 操作文档","slug":"restclient-操作文档","link":"#restclient-操作文档","children":[{"level":3,"title":"RestClient 新增文档","slug":"restclient-新增文档","link":"#restclient-新增文档","children":[]},{"level":3,"title":"RestClient 查询文档","slug":"restclient-查询文档","link":"#restclient-查询文档","children":[]},{"level":3,"title":"RestClient 更新文档","slug":"restclient-更新文档","link":"#restclient-更新文档","children":[]},{"level":3,"title":"RestClient  删除文档","slug":"restclient-删除文档","link":"#restclient-删除文档","children":[]},{"level":3,"title":"RestClient  批量导入文档","slug":"restclient-批量导入文档","link":"#restclient-批量导入文档","children":[]}]},{"level":2,"title":"RestClient 查询文档","slug":"restclient-查询文档-1","link":"#restclient-查询文档-1","children":[{"level":3,"title":"RestClient 查询全部","slug":"restclient-查询全部","link":"#restclient-查询全部","children":[]},{"level":3,"title":"RestClient 全文索引查询","slug":"restclient-全文索引查询","link":"#restclient-全文索引查询","children":[]},{"level":3,"title":"RestClient 经纬度查询","slug":"restclient-经纬度查询","link":"#restclient-经纬度查询","children":[]},{"level":3,"title":"RestClient 复合查询","slug":"restclient-复合查询","link":"#restclient-复合查询","children":[]},{"level":3,"title":"RestClient 分页查询","slug":"restclient-分页查询","link":"#restclient-分页查询","children":[]},{"level":3,"title":"RestClient 高亮查询","slug":"restclient-高亮查询","link":"#restclient-高亮查询","children":[]},{"level":3,"title":"RestClient 排序查询","slug":"restclient-排序查询","link":"#restclient-排序查询","children":[]}]},{"level":2,"title":"ES 数据聚合","slug":"es-数据聚合","link":"#es-数据聚合","children":[{"level":3,"title":"数据聚合分类","slug":"数据聚合分类","link":"#数据聚合分类","children":[]},{"level":3,"title":"桶（Bucket）聚合","slug":"桶-bucket-聚合","link":"#桶-bucket-聚合","children":[]},{"level":3,"title":"度量（Metric）聚合","slug":"度量-metric-聚合","link":"#度量-metric-聚合","children":[]}]},{"level":2,"title":"ES 自动补全","slug":"es-自动补全","link":"#es-自动补全","children":[]},{"level":2,"title":"ES 数据同步","slug":"es-数据同步","link":"#es-数据同步","children":[{"level":3,"title":"数据同步解决方案","slug":"数据同步解决方案","link":"#数据同步解决方案","children":[]},{"level":3,"title":"基于MQ实现数据同步","slug":"基于mq实现数据同步","link":"#基于mq实现数据同步","children":[]}]},{"level":2,"title":"ES 集群","slug":"es-集群","link":"#es-集群","children":[]}],"git":{"updatedTime":1681632075000,"contributors":[{"name":"ilovesshan","email":"2665939276@qq.com","commits":2}]},"filePathRelative":"pages/middleware/elasticSearch.md"}');export{l as data};