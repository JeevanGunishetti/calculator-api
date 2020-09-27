exports.checkType = (req, res, next) => {
    const {num1, num2} = req.body;

    //console.log(num1,"type");

    if(typeof(num1) === "string" || typeof(num2) === "string"){
        return res.json({
            status:"error",
            message:"Invalid data types"
        });
    }
    next();
};
