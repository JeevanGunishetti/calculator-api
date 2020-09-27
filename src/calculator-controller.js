
exports.add = (req,res) =>{
  const {num1, num2} = req.body;

  const sum = num1+num2;

  if(sum > 1000000){
    return res.json({
      status:`failure`,
      message:`overflow`,
    });
  }

  return res.json({
    status:`success`,
    message:`the sum of given two number`,
    sum:sum,
  });
};

exports.subtract =(req,res) =>{
  const {num1,num2} = req.body;
  const result = num1-num2;

  if( num1 < 1000000 || num2 < 1000000){
    return res.json({
      status:`failure`,
      message:`underflow`,
    });
  }

  return res.json({
    status:`success`,
    message:`the difference of given two number`,
    sum:result,
  });

};


exports.multiply =(req,res) =>{
  const {num1,num2} = req.body;
  const result = num1*num2;

  if( num1 > 1000000 || num2 > 1000000){
    return res.json({
      status:`failure`,
      message:`overflow`,
    });
  }

  return res.json({
    status:`success`,
    message:`The product of given numbers`,
    sum:result,
  });
};


exports.divide = (req,res) =>{

  const {num1,num2} = req.body;


  if(num2 == 0){
    return res.json({
      status:`failure`,
      message:`Cannot divide by zero`,
    });
  }

  const result = num1/num2;

  return res.json({
    status:`success`,
    message:`The division of given numbers`,
    sum:result,
  });
};
