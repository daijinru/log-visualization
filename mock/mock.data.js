export default {
  "request": {
    "url": "api_url",
    "hideFromInspector": false
  },
  "response": {
    "status": "success",
    "data": {
      "resultType": "streams",
      "result": [
        {
          "stream": {
            "company_com_clusterId": "test",
            "app": "eftcentre",
            "container": "special-image",
            "job": "finance-qua/eftcentre",
            "pod": "eftcentre-deployment-5d586cb588-dj9x7",
            "stream": "stdout",
            "company_com_svcName": "eftcentre",
            "filename": "/var/log/pods/022f24e9-3f77-11eb-8c7f-5ebc18b997fc/special-image/0.log",
            "namespace": "finance-qua",
            "pod_template_hash": "5d586cb588",
            "random": "1",
            "company_com_deploymentName": "eftcentre-deployment",
            "company_com_domain": "eftcentre.kq.company.com",
            "company_com_port": "8081",
            "company_com_https": "false"
          },
          "values": [
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
            [
              "1608207360447706232",
              "2020-12-17 20:16:00.447 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207360402479625",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@40436fa]\n"
            ],
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
            [
              "1608207360351371848",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207360351182419",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@4da13804] will not be managed by Spring\n"
            ],
            [
              "1608207360351141812",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@40436fa] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207360351094835",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207360351010427",
              "2020-12-17 20:16:00.350 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207300738351343",
              "2020-12-17 20:15:00.738 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608207300569428499",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@46688df]\n"
            ],
            [
              "1608207300569415062",
              "<==      Total: 0\n"
            ],
            [
              "1608207300539301416",
              "==> Parameters: \n"
            ],
            [
              "1608207300539251740",
              "==>  Preparing: select id from t_unwind where status=5 and is_del=0 \n"
            ],
            [
              "1608207300539115086",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@4da13804] will not be managed by Spring\n"
            ],
            [
              "1608207300536721655",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@10a68f35]\n"
            ],
            [
              "1608207300536711063",
              "<==      Total: 0\n"
            ],
            [
              "1608207300525159429",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@46688df] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207300525096904",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207300525052533",
              "2020-12-17 20:15:00.524 [DEFAULT.ScanUnwindJob_Scheduler_Worker-1] INFO  c.z.eftcentre.persistence.elastic.ScanUnwindJob - 开始执行定时任务扫描Unwind表\n"
            ],
            [
              "1608207300521961374",
              "==> Parameters: \n"
            ],
            [
              "1608207300521807072",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207300521639823",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207300521579601",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@10a68f35] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207300521566315",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207300521550139",
              "2020-12-17 20:15:00.521 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207300399115626",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@7dd4012]\n"
            ],
            [
              "1608207300399083698",
              "<==      Total: 4\n"
            ],
            [
              "1608207300399080116",
              "<==        Row: 9483\n"
            ],
            [
              "1608207300399076339",
              "<==        Row: 9453\n"
            ],
            [
              "1608207300399072793",
              "<==        Row: 9442\n"
            ],
            [
              "1608207300399068816",
              "<==        Row: 9432\n"
            ],
            [
              "1608207300399055833",
              "<==    Columns: id\n"
            ],
            [
              "1608207300390956553",
              "==> Parameters: \n"
            ],
            [
              "1608207300390952096",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207300390947894",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207300390936981",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@7dd4012] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207300390504134",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207300390482194",
              "2020-12-17 20:15:00.390 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207240557462698",
              "2020-12-17 20:14:00.557 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608207240414907972",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@76704fc1]\n"
            ],
            [
              "1608207240414897342",
              "<==      Total: 0\n"
            ],
            [
              "1608207240407601283",
              "==> Parameters: \n"
            ],
            [
              "1608207240407543268",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207240407458547",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207240407350289",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@76704fc1] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207240407345522",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207240407308996",
              "2020-12-17 20:14:00.407 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207240329405835",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2d28b9bd]\n"
            ],
            [
              "1608207240329389191",
              "<==      Total: 4\n"
            ],
            [
              "1608207240329383898",
              "<==        Row: 9483\n"
            ],
            [
              "1608207240329378153",
              "<==        Row: 9453\n"
            ],
            [
              "1608207240329372029",
              "<==        Row: 9442\n"
            ],
            [
              "1608207240329365644",
              "<==        Row: 9432\n"
            ],
            [
              "1608207240329342670",
              "<==    Columns: id\n"
            ],
            [
              "1608207240323962602",
              "==> Parameters: \n"
            ],
            [
              "1608207240323794401",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207240323656204",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207240323579574",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2d28b9bd] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207240323570463",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207240323527109",
              "2020-12-17 20:14:00.323 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207180571754048",
              "2020-12-17 20:13:00.571 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608207180375108977",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2d68218d]\n"
            ],
            [
              "1608207180375080540",
              "<==      Total: 0\n"
            ],
            [
              "1608207180341699867",
              "==> Parameters: \n"
            ],
            [
              "1608207180341668054",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207180341472328",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207180341404529",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2d68218d] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207180341382361",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207180341360428",
              "2020-12-17 20:13:00.341 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207180279041393",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@574b9234]\n"
            ],
            [
              "1608207180279011803",
              "<==      Total: 4\n"
            ],
            [
              "1608207180279008190",
              "<==        Row: 9483\n"
            ],
            [
              "1608207180279004541",
              "<==        Row: 9453\n"
            ],
            [
              "1608207180279001187",
              "<==        Row: 9442\n"
            ],
            [
              "1608207180278996801",
              "<==        Row: 9432\n"
            ],
            [
              "1608207180278973675",
              "<==    Columns: id\n"
            ],
            [
              "1608207180260424269",
              "==> Parameters: \n"
            ],
            [
              "1608207180260406282",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207180260303859",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207180260208072",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@574b9234] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207180260203761",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207180260180520",
              "2020-12-17 20:13:00.260 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207120519592073",
              "2020-12-17 20:12:00.519 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608207120336077623",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2c86bbd0]\n"
            ],
            [
              "1608207120336059593",
              "<==      Total: 0\n"
            ],
            [
              "1608207120322639665",
              "==> Parameters: \n"
            ],
            [
              "1608207120322602909",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207120322474677",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207120322413375",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@2c86bbd0] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207120322345140",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207120322326059",
              "2020-12-17 20:12:00.322 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207120252981027",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@4e9a12f6]\n"
            ],
            [
              "1608207120252926061",
              "<==      Total: 4\n"
            ],
            [
              "1608207120252921273",
              "<==        Row: 9483\n"
            ],
            [
              "1608207120252915280",
              "<==        Row: 9453\n"
            ],
            [
              "1608207120252910526",
              "<==        Row: 9442\n"
            ],
            [
              "1608207120252905190",
              "<==        Row: 9432\n"
            ],
            [
              "1608207120252889283",
              "<==    Columns: id\n"
            ],
            [
              "1608207120242328005",
              "==> Parameters: \n"
            ],
            [
              "1608207120242291045",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207120242152334",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207120242059689",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@4e9a12f6] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207120242014891",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207120241974442",
              "2020-12-17 20:12:00.241 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207060506619708",
              "2020-12-17 20:11:00.506 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608207060263676321",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@50784a9e]\n"
            ],
            [
              "1608207060263658372",
              "<==      Total: 0\n"
            ],
            [
              "1608207060255146302",
              "==> Parameters: \n"
            ],
            [
              "1608207060255106648",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207060255014513",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207060255010117",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@50784a9e] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207060255006023",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207060254990546",
              "2020-12-17 20:11:00.254 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207060185724815",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@57f1d4dd]\n"
            ],
            [
              "1608207060185616879",
              "<==      Total: 4\n"
            ],
            [
              "1608207060185613070",
              "<==        Row: 9483\n"
            ],
            [
              "1608207060185608783",
              "<==        Row: 9453\n"
            ],
            [
              "1608207060185593100",
              "<==        Row: 9442\n"
            ],
            [
              "1608207060185564162",
              "<==        Row: 9432\n"
            ],
            [
              "1608207060185546890",
              "<==    Columns: id\n"
            ],
            [
              "1608207060173551745",
              "==> Parameters: \n"
            ],
            [
              "1608207060173373661",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207060172926922",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207060172521638",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@57f1d4dd] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207060172389981",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207060172263817",
              "2020-12-17 20:11:00.172 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207000752753041",
              "2020-12-17 20:10:00.752 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608207000582163616",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@379d846c]\n"
            ],
            [
              "1608207000582152321",
              "<==      Total: 0\n"
            ],
            [
              "1608207000572488415",
              "==> Parameters: \n"
            ],
            [
              "1608207000572460559",
              "==>  Preparing: select id from tb_account where status=1 and is_del=0 \n"
            ],
            [
              "1608207000572319627",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@5f135000] will not be managed by Spring\n"
            ],
            [
              "1608207000564087913",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@636d21ae]\n"
            ],
            [
              "1608207000564038881",
              "<==      Total: 0\n"
            ],
            [
              "1608207000548471542",
              "==> Parameters: \n"
            ],
            [
              "1608207000548450018",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207000548301753",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@4da13804] will not be managed by Spring\n"
            ],
            [
              "1608207000548287789",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@26772a12]\n"
            ],
            [
              "1608207000548233797",
              "<==      Total: 0\n"
            ],
            [
              "1608207000538268055",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@1a18a6ae]\n"
            ],
            [
              "1608207000538238735",
              "<==      Total: 0\n"
            ],
            [
              "1608207000537909994",
              "==> Parameters: \n"
            ],
            [
              "1608207000537845799",
              "==>  Preparing: select id from t_unwind where status=5 and is_del=0 \n"
            ],
            [
              "1608207000537607444",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@16bac3ae] will not be managed by Spring\n"
            ],
            [
              "1608207000535961944",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@379d846c] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207000535928168",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207000535713373",
              "2020-12-17 20:10:00.535 [DEFAULT.PassAccountJob_Scheduler_Worker-1] INFO  c.z.eftcentre.persistence.elastic.PassAccountJob - 开始执行传账表任务PassAccountJob\n"
            ],
            [
              "1608207000534286958",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@26772a12] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207000534221085",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207000534185649",
              "2020-12-17 20:10:00.534 [DEFAULT.ScanUnwindJob_Scheduler_Worker-1] INFO  c.z.eftcentre.persistence.elastic.ScanUnwindJob - 开始执行定时任务扫描Unwind表\n"
            ],
            [
              "1608207000533079239",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@636d21ae] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207000533046827",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207000533013474",
              "2020-12-17 20:10:00.532 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608207000531696614",
              "==> Parameters: \n"
            ],
            [
              "1608207000531645344",
              "==>  Preparing: select id from eftcentre.tb_transfer_detail where transfer_status=1 and transfer_num < 3 AND is_del=0 \n"
            ],
            [
              "1608207000531500964",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608207000531430518",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@1a18a6ae] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207000531393122",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207000531311575",
              "2020-12-17 20:10:00.531 [fa56e1f9-f782-4bff-a7bf-ecbb194182a5] INFO  c.z.eftcentre.persistence.elastic.ScanTransferJob - 开始执行正退变非退传账任务=============\n"
            ],
            [
              "1608207000431083544",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@77dd4d82]\n"
            ],
            [
              "1608207000431030385",
              "<==      Total: 4\n"
            ],
            [
              "1608207000431025029",
              "<==        Row: 9483\n"
            ],
            [
              "1608207000431020231",
              "<==        Row: 9453\n"
            ],
            [
              "1608207000431014781",
              "<==        Row: 9442\n"
            ],
            [
              "1608207000431008977",
              "<==        Row: 9432\n"
            ],
            [
              "1608207000430992711",
              "<==    Columns: id\n"
            ],
            [
              "1608207000406722699",
              "==> Parameters: \n"
            ],
            [
              "1608207000406688461",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608207000406560263",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608207000406509533",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@77dd4d82] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608207000406505684",
              "Creating a new SqlSession\n"
            ],
            [
              "1608207000406491847",
              "2020-12-17 20:10:00.406 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206940502117474",
              "2020-12-17 20:09:00.501 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608206940356801830",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@3a469336]\n"
            ],
            [
              "1608206940356634951",
              "<==      Total: 0\n"
            ],
            [
              "1608206940328680483",
              "==> Parameters: \n"
            ],
            [
              "1608206940328634407",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206940328452640",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206940328383593",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@3a469336] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206940328276460",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206940328216484",
              "2020-12-17 20:09:00.328 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206940225751375",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@7890bc2a]\n"
            ],
            [
              "1608206940225730223",
              "<==      Total: 4\n"
            ],
            [
              "1608206940225726947",
              "<==        Row: 9483\n"
            ],
            [
              "1608206940225723545",
              "<==        Row: 9453\n"
            ],
            [
              "1608206940225719943",
              "<==        Row: 9442\n"
            ],
            [
              "1608206940225715818",
              "<==        Row: 9432\n"
            ],
            [
              "1608206940225699503",
              "<==    Columns: id\n"
            ],
            [
              "1608206940216374460",
              "==> Parameters: \n"
            ],
            [
              "1608206940216308585",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206940216153536",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206940216143838",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@7890bc2a] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206940216137237",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206940216103943",
              "2020-12-17 20:09:00.215 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206880615822643",
              "2020-12-17 20:08:00.615 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608206880369493914",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@6962118]\n"
            ],
            [
              "1608206880369482254",
              "<==      Total: 0\n"
            ],
            [
              "1608206880337760850",
              "==> Parameters: \n"
            ],
            [
              "1608206880337730014",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206880337610271",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206880337512236",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@6962118] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206880337488023",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206880337476264",
              "2020-12-17 20:08:00.337 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206880281659173",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@45790cd2]\n"
            ],
            [
              "1608206880281614697",
              "<==      Total: 4\n"
            ],
            [
              "1608206880281611392",
              "<==        Row: 9483\n"
            ],
            [
              "1608206880281608182",
              "<==        Row: 9453\n"
            ],
            [
              "1608206880281604879",
              "<==        Row: 9442\n"
            ],
            [
              "1608206880281601074",
              "<==        Row: 9432\n"
            ],
            [
              "1608206880281585794",
              "<==    Columns: id\n"
            ],
            [
              "1608206880253643348",
              "==> Parameters: \n"
            ],
            [
              "1608206880253593141",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206880253416710",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206880253329872",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@45790cd2] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206880253319516",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206880253215622",
              "2020-12-17 20:08:00.253 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206820503554319",
              "2020-12-17 20:07:00.503 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608206820328472900",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@1694fabe]\n"
            ],
            [
              "1608206820328453430",
              "<==      Total: 0\n"
            ],
            [
              "1608206820313990301",
              "==> Parameters: \n"
            ],
            [
              "1608206820313973129",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206820313629886",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206820313552903",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@1694fabe] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206820313498238",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206820313475518",
              "2020-12-17 20:07:00.313 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206820285839764",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@4fe25010]\n"
            ],
            [
              "1608206820285746875",
              "<==      Total: 4\n"
            ],
            [
              "1608206820285743421",
              "<==        Row: 9483\n"
            ],
            [
              "1608206820285740097",
              "<==        Row: 9453\n"
            ],
            [
              "1608206820285736644",
              "<==        Row: 9442\n"
            ],
            [
              "1608206820285731946",
              "<==        Row: 9432\n"
            ],
            [
              "1608206820285706860",
              "<==    Columns: id\n"
            ],
            [
              "1608206820234549791",
              "==> Parameters: \n"
            ],
            [
              "1608206820234460055",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206160394436908",
              "<==      Total: 0\n"
            ],
            [
              "1608206160361580564",
              "==> Parameters: \n"
            ],
            [
              "1608206160361574506",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206160361381106",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@2abcc97d] will not be managed by Spring\n"
            ],
            [
              "1608206160361305898",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@3d3d20f7] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206160361126418",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206160361110319",
              "2020-12-17 19:56:00.360 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206160271564063",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@68feff9d]\n"
            ],
            [
              "1608206160271364844",
              "<==      Total: 4\n"
            ],
            [
              "1608206160271361423",
              "<==        Row: 9483\n"
            ],
            [
              "1608206160271358205",
              "<==        Row: 9453\n"
            ],
            [
              "1608206160271354754",
              "<==        Row: 9442\n"
            ],
            [
              "1608206160271351424",
              "<==        Row: 9432\n"
            ],
            [
              "1608206160271339980",
              "<==    Columns: id\n"
            ],
            [
              "1608206160258197696",
              "==> Parameters: \n"
            ],
            [
              "1608206160258188914",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206160258001568",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@2abcc97d] will not be managed by Spring\n"
            ],
            [
              "1608206160257718066",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@68feff9d] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206160257670290",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206160257650305",
              "2020-12-17 19:56:00.257 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206100737992945",
              "2020-12-17 19:55:00.737 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608206100573668639",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@b7d8841]\n"
            ],
            [
              "1608206100573643580",
              "<==      Total: 0\n"
            ],
            [
              "1608206100545625780",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@3dedaada]\n"
            ],
            [
              "1608206100545550230",
              "<==      Total: 0\n"
            ],
            [
              "1608206100544432061",
              "==> Parameters: \n"
            ],
            [
              "1608206100544371785",
              "==>  Preparing: select id from t_unwind where status=5 and is_del=0 \n"
            ],
            [
              "1608206100544206562",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@2abcc97d] will not be managed by Spring\n"
            ],
            [
              "1608206100534278962",
              "==> Parameters: \n"
            ],
            [
              "1608206100534233952",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206100534029129",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206100534023115",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@b7d8841] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206100533961941",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206100533941411",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@3dedaada] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206100533910919",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206100533747615",
              "2020-12-17 19:55:00.533 [DEFAULT.ScanUnwindJob_Scheduler_Worker-1] INFO  c.z.eftcentre.persistence.elastic.ScanUnwindJob - 开始执行定时任务扫描Unwind表\n"
            ],
            [
              "1608206100533732937",
              "2020-12-17 19:55:00.533 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206100428481389",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@234c7995]\n"
            ],
            [
              "1608206100428451237",
              "<==      Total: 4\n"
            ],
            [
              "1608206100428406982",
              "<==        Row: 9483\n"
            ],
            [
              "1608206100428402101",
              "<==        Row: 9453\n"
            ],
            [
              "1608206100428397172",
              "<==        Row: 9442\n"
            ],
            [
              "1608206100428391756",
              "<==        Row: 9432\n"
            ],
            [
              "1608206100428374976",
              "<==    Columns: id\n"
            ],
            [
              "1608206100411509512",
              "==> Parameters: \n"
            ],
            [
              "1608206100411452378",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206100411248685",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206100411157750",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@234c7995] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206100411080887",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206100411035348",
              "2020-12-17 19:55:00.410 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206040533445624",
              "2020-12-17 19:54:00.533 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608206040382660012",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@12be8b93]\n"
            ],
            [
              "1608206040382639711",
              "<==      Total: 0\n"
            ],
            [
              "1608206040371208994",
              "==> Parameters: \n"
            ],
            [
              "1608206040371170851",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206040370984812",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206040370893459",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@12be8b93] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206040370864303",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206040370823972",
              "2020-12-17 19:54:00.370 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608206040250515701",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@24ac6511]\n"
            ],
            [
              "1608206040250509316",
              "<==      Total: 4\n"
            ],
            [
              "1608206040250505775",
              "<==        Row: 9483\n"
            ],
            [
              "1608206040250502217",
              "<==        Row: 9453\n"
            ],
            [
              "1608206040250498510",
              "<==        Row: 9442\n"
            ],
            [
              "1608206040250494027",
              "<==        Row: 9432\n"
            ],
            [
              "1608206040250475530",
              "<==    Columns: id\n"
            ],
            [
              "1608206040236927662",
              "==> Parameters: \n"
            ],
            [
              "1608206040236922004",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=1 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608206040236905781",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608206040235998973",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@24ac6511] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608206040235993492",
              "Creating a new SqlSession\n"
            ],
            [
              "1608206040235965170",
              "2020-12-17 19:54:00.235 [DEFAULT.ScanSettlementJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlementJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608205980524635076",
              "2020-12-17 19:53:00.524 [DEFAULT.busRecoupJob_Scheduler_Worker-1] INFO  com.company.busrecoup.elasticjob.SimpleJob - [通用补偿作业入口]RecoupJob Start|ShardingContext:jobName: busRecoupJob, shardingTotalCount: 10, shardingItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], shardingItemParameters: {}, jobParameter: |未找到待执行或执行中的作业，放弃执行\n"
            ],
            [
              "1608205980368127054",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@7d2ba46b]\n"
            ],
            [
              "1608205980368115749",
              "<==      Total: 0\n"
            ],
            [
              "1608205980344034879",
              "==> Parameters: \n"
            ],
            [
              "1608205980343991822",
              "==>  Preparing: select id from tb_sync_setincome_record where sync_type=3 and is_del=0 and sync_status=0 \n"
            ],
            [
              "1608205980343948126",
              "JDBC Connection [com.alibaba.druid.proxy.jdbc.ConnectionProxyImpl@88c4a6c] will not be managed by Spring\n"
            ],
            [
              "1608205980343941760",
              "SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@7d2ba46b] was not registered for synchronization because synchronization is not active\n"
            ],
            [
              "1608205980343935646",
              "Creating a new SqlSession\n"
            ],
            [
              "1608205980343911467",
              "2020-12-17 19:53:00.343 [DEFAULT.ScanSettlePlatJob_Scheduler_Worker-1] INFO  c.z.e.persistence.elastic.ScanSettlePlatJob - 开始执行定时任务扫描tb_sync_setincome_record表\n"
            ],
            [
              "1608205980307550951",
              "Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@250e8c21]\n"
            ],
          ]
        }
      ],
      "stats": {
        "summary": {
          "bytesProcessedPerSecond": 4766064,
          "linesProcessedPerSecond": 47582,
          "totalBytesProcessed": 631429,
          "totalLinesProcessed": 6304,
          "execTime": 0.132484371
        },
        "store": {
          "totalChunksRef": 3,
          "totalChunksDownloaded": 3,
          "chunksDownloadTime": 0.010737692,
          "headChunkBytes": 0,
          "headChunkLines": 0,
          "decompressedBytes": 489447,
          "decompressedLines": 4644,
          "compressedBytes": 50375,
          "totalDuplicates": 2004
        },
        "ingester": {
          "totalReached": 5,
          "totalChunksMatched": 3,
          "totalBatches": 0,
          "totalLinesSent": 0,
          "headChunkBytes": 141982,
          "headChunkLines": 1660,
          "decompressedBytes": 0,
          "decompressedLines": 0,
          "compressedBytes": 0,
          "totalDuplicates": 0
        }
      }
    }
  }
}