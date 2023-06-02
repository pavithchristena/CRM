const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SERVER, DATABASE, ENCRYPT } = process.env

const sqlEncrypt = process.env.ENCRYPT === "true"

assert(PORT, 'PORT is required');
assert(HOST, 'HOSTT is reequired');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        driver: "msnodesqlv8",
        server: SERVER,
        database: DATABASE,
        Options: {
            trustedConnection: true,
        }
    }
}