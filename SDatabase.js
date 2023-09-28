// const Sequelize = require('sequelize');  // importing contructor function/class here

// const sequelize = new Sequelize('newtable', 'root', 'Pratik@123', {dialect:'mysql', host:'localhost'});

// module.exports = sequelize;
 
const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('project1', 'root', 'Pratik@123', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;

