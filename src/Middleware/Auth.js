const Authencation = (req,res,next)=>{
    let api = req.headers.api;
    if(api !== undefined && api=== "96543cv"){
        next();
    }
    else
    {
        res.status(400).send("api is not valid");
    }
}
module.exports = Authencation;