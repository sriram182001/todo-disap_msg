const controllers = require('../controllers');

const routes=['/','/signup','/signin','/welcome','/addTodo','/{any*}','/getTodo','/createmsg','/m/{id?}','/viewmsg']
module.exports = [
    ...routes.map(route=>({
        method:'GET',
        path:route,
        config:{
            handler:controllers.app.app,
            auth:false
        }
    })),
    {
        method:'POST',
        path:'/api/storedata',
        config:{
            handler:controllers.signup.SignUp,
            auth:false
            
        }
            
    },
    {
        method:'POST',
        path:'/api/login',
        config:{
            handler:controllers.login.LogIn,
            auth:{mode:'try',strategy:'session'}
        }
    },
    {
        method:'GET',
        path:'/api/logout',
        config:{
            handler:controllers.logout.LogOut
            ,auth:{mode:'required',strategy:'session'}
        }

    },
    {
        method:'GET',
        path:'/api/authenticate',
        config:{
            handler:controllers.authenticate.Authenticate,
            auth:{mode:'try',strategy:'session'}
        }

    },
   {
        method:'GET',
        path:'/api/getdetails',
        config:{
            handler:controllers.getdetails.GetDetails,
            auth:{mode:'required',strategy:'session'}
        }
   },{
       method:'POST',
       path:'/api/addtask',
       config:{
           handler:controllers.addtask.AddTask,
           auth:{mode:'required',strategy:'session'}
       }
   },
   {
    method:'GET',
    path:'/api/gettask',
    config:{
        handler:controllers.gettask.GetTask,
        auth:{mode:'required',strategy:'session'}
    }
    },
    {  
        method:'POST',
        path:'/api/deletetask',
        config:{
            handler:controllers.deletetask.DeleteTask,
            auth:{mode:'required',strategy:'session'}
        }
    },
    {
        method:'POST',
        path:'/api/createmsg',
        config:{
            handler:controllers.createmsg.CreateMsg,
            auth:{mode:'required',strategy:'session'}
        }

    },
   {
        method:'POST',
        path:'/api/getmsg',
        config:{
            handler:controllers.getmsg.GetMsg,
            auth:false
        }

   },
   {
    method:'GET',
    path:'/api/viewmsg',
    config:{
        handler:controllers.viewmsg.ViewMsg,
        auth:{mode:'required',strategy:'session'}
    }
   }]