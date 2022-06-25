
const msg=require('../models/msg')

module.exports.CreateMsg=async(request,reply)=>{
    try{
    var time=new Date();
    time.setMinutes(time.getMinutes()+parseInt(request.payload.state.ttl))
    console.log(time.getHours())
    const r=await msg.MsgTable.create({msg:request.payload.state.msg,endat:time,uid:request.auth.credentials.uid,cat:request.payload.state.cat});
    const res=JSON.parse(JSON.stringify(r))
    reply(res).code(200)
    }
    catch(err){
        console.log(err);
        reply('not ok').code(500)
    }
}