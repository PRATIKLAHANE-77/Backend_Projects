// const Sequelize = require('sequelize');
// const sequelize = require("./SDatabase.js");

// const Model = sequelize.define("model", {
//   id: {
//     type: Sequelize.INTEGER, 
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true, // Corrected
//   },
//   name: {
//     type: Sequelize.STRING, // Corrected
//     allowNull: false,
//   },
  
//   mode: {
//     type: Sequelize.STRING, // Corrected
//     allowNull: false,
//   },
//   city: {
//     type: Sequelize.STRING, // Corrected
//     allowNull: false,
//   },
// },
// {
//   tableName: 'model' // Specify the table name as 'model'
// });

// module.exports = Model;



const Sequelize = require('sequelize');
const sequelize = require("./SDatabase.js");

const Model = sequelize.define("model", {
  id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true, // Corrected
      },

  username: {
    type: Sequelize.STRING, // Corrected
    allowNull: false,
    // unique:true,
  },
  
  number: {
    type: Sequelize.BIGINT,
    allowNull: false,
    // unique:true,

  },
  email: {
    type: Sequelize.STRING, // Corrected
    allowNull: false,
    // unique:true,

  },
},
{
  tableName: 'model' // Specify the table name as 'model'
});

module.exports = Model;
