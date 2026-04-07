const sql = require("mssql");

const config = {
  user: "sa", 
  password: "12345678", 
  server: "localhost", 
  instanceName: "SQLEXPRESS", 
  database: "StudentManagement",
  port: 1433, 
  options: {
    encrypt: false, 
    trustServerCertificate: true 
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("✅ Đã kết nối SQL Server");
    return pool;
  })
  .catch(err => console.error("❌ Lỗi kết nối:", err));

module.exports = {
  sql, poolPromise
};
