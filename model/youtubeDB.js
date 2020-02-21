const knex = require("../knexFile");

// 1
let post_data = (data) => {
    return knex('userTables').insert(data)
};

// 2
let postdata = (Data) => {
    return knex('Feature_Tables').insert(Data)
};

module.exports = {post_data,postdata}