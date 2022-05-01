const mysql = require("mysql2");
const dbConnection = mysql.createPool({
    host:"resume-login.mysql.database.azure.com",
    user:"users@resume-login",
    password: "P@ssw0rd",
    database: "resume-login",
    port: 3306
}).promise()

// ทำให้ใช้ในไฟล์อื่นได้
module.exports = dbConnection;

