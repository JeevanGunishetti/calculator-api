exports.checkString = (req,res,next) =>{

  const {num1,num2} = req.body;
  if(typeof num1 === "String" || typeof num2 ==="String"){
    return res.json({
      status:`error`,
      message:`invalid data types`,
    });
  }
  next();
};
