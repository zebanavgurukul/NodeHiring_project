var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "navgurukul",
        database: "Hiring_project"
    },
    useNullAsDefault: true
});
module.exports = knex;

knex.schema.hasTable('').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('', (table) => {
            table.increments('')
            table.string('')
            table.string('')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});