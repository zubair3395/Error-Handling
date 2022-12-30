const RouterFun = (fun) =>{
    return async(req,res,next) =>{
        try {
            fun(req,res)
           }
           catch(error){
            res.status(400).send({messeage: error.message} )
           }
    }
   
}
module.exports = RouterFun;