var pool = require('./bd');
var sha1 = require('sha1');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, sha1(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getUserByUsernameAndPassword }