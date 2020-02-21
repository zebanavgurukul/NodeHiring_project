const knex = require("../knexFile");

let post_data = (data) => {
    return knex('userTables').insert(data)
};

module.exports = {post_data}