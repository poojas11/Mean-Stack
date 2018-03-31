var jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    if(!req.headers.token){
        res.json({
            success: false,
            msg: "Please provide authentication details"
        })
    }else{
        jwt.verify(req.headers.token, req.app.get('secret'), (err, data)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Verification Failed"
                })
            }else{
                req.decoded =data;
                next();
            }
        })
    }
}