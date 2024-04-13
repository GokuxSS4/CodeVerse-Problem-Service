const {StatusCodes} = require('http-status-codes');

function pingProblem(req,res){
    return res.status(StatusCodes.OK).json({
        message:"Ping Controller is alive"
    })
}

function addProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented !"    
    })
};

function getProblem(req,res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented !"    
    })
};

function getAllProblems(req,res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented !"    
    })
};

function updateProblem(req,res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented !"    
    })
};

function deleteProblem(req,res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented !"    
    })
};

module.exports={
    pingProblem,
    addProblem,
    getProblem,
    getAllProblems,
    updateProblem,
    deleteProblem
}