const {StatusCodes} = require('http-status-codes');

const {ProblemService} = require('../services/index');
const {ProblemRepository} = require('../repositories/index');

const problemService = new ProblemService(new ProblemRepository());

function pingProblem(req,res){
    return res.status(StatusCodes.OK).json({
        message:"Ping Controller is alive"
    })
}

async function addProblem(req,res,next){
    try {
        const problemData = req.body;
        const problem = await problemService.addProblem(problemData);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: problem
        })
    } catch (error) {
     next(error);   
    }
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