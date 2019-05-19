const mysql = require("mysql")
const config = require("../config/config")

var pool  = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE,
    port:3306
});

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        // console.log(rows)
                        resolve(rows)
                    }
                    connection.release() //什么时候关闭请求
                })
            }
        })
    })
};

module.exports = {
    query
}
