const msg=require('../models/msg')

module.exports.ViewMsg=async(request,reply)=>{
    try{
    
    const result=await msg.MsgTable.findAll({attributes:['msg','endat','cat','id'],where:{uid:request.auth.credentials.uid}});

    //const res=JSON.parse(JSON.stringify(r))
    //console.log(JSON.parse(JSON.stringify(result[0])).endat.toUTCString())
    reply(JSON.parse(JSON.stringify(result)))
    }
    catch(err){
        console.log(err);
        reply('not ok').code(500)
    }
}