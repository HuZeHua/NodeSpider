/**
 * 数据库连接配置
 */
module.exports = {
    user: 'sa',
    password: 'team',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    options: {
    port: 49515,
    database: 'house',
    instancename: 'SQLEXPRESS'
  }
}