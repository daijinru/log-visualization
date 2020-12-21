export default {
  prevs: [
    [
      "1608207360699221162",
      "2020-12-17 20:16:00.699 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
    ],
    [
      "1608207360468691548",
      "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2052475]\n"
    ],
    [
      "1608207360468680956",
      "<==      Total: 0\n"
    ],
    [
      "1608207360448062271",
      "==> Parameters: \n"
    ],
    [
      "1608207360448019909",
      "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
    ],
    [
      "1608207360447904503",
      "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@4da13804] will not be managed by Spring\n"
    ],
    [
      "1608207360447787078",
      "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2052475] was not registered for synchronization because synchronization is not active\n"
    ],
    [
      "1608207360447719422",
      "Creating a new SqlSession\n"
    ],
  ],
  nexts: [
    [
      "1608207360402381349",
      "<==      Total: 4\n"
    ],
    [
      "1608207360402378036",
      "<==        Row: 9483\n"
    ],
    [
      "1608207360402374882",
      "<==        Row: 9453\n"
    ],
    [
      "1608207360402371431",
      "<==        Row: 9442\n"
    ],
    [
      "1608207360402366400",
      "<==        Row: 9432\n"
    ],
    [
      "1608207360402345551",
      "<==    Columns: id\n"
    ],
    [
      "1608207360351413053",
      "==> Parameters: \n"
    ],
  ]
}