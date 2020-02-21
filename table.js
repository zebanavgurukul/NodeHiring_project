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

knex.schema.hasTable('userTables').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('userTables', (table) => {
            table.increments('id')
            table.string('title')
            table.string('description')
            table.string('video')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});