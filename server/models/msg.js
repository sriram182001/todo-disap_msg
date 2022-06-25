const Connection =require('../dbconfig/dbconnect');
const { DataTypes, Sequelize }=require('sequelize');

const dbConnection=Connection.connect;

const Msg=dbConnection.define('msg',{
    msg:{
        type:DataTypes.STRING,
        allowNull:false
    },
    uid:{
        type:DataTypes.STRING,
        allowNull:false
    },
    endat:{
        type:'TIMESTAMP',
        default:Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull:false
    },
    cat:{
       type:DataTypes.STRING,
       allowNull:false
    },
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }
)
module.exports.MsgTable=Msg;