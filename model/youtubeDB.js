const knex = require("../knexFile");

// 1
let post_data = (data) => {
    return knex('userTables').insert(data)
};

// 2
let putdata = (id,updata) => {
    return knex('userTables').update(updata).where('id',id)
};

// 3
let postdata = (Data) => {
    return knex('Feature_Tables').insert(Data)
};

// 4
let getdata = () => {
    return knex('userTables').select('*')
};

// 5
let put_data = (updata,search) => { 
    return knex.select('*').from('userTables').update(updata).where('description','like',  '%' +search+ '%')
};

// 6
let postData = (updata) => {
    return knex('access_youtube').insert(updata)
};

// 7
let access_login = (Email) => {
    return knex.select('Email').from('access_youtube').havingIn('access_youtube.Email',Email)
};

let else_login = (Password)=>{
    return knex.select('Password').from('access_youtube').havingIn('access_youtube.Password',Password)
};

let putdate = (data) => {
    return knex('userTables').insert(data)
};

module.exports = {post_data,putdata,postdata,getdata,put_data,postData,access_login,else_login,putdate}