function pingProblem(req,res){
    return res.status(200).json({
        message:"Ping Controller is alive"
    })
}

function addProblem(req,res){
    return res.status(501).json({
        message: "Not Implemented !"    
    })
};

function getProblem(req,res){
    return res.status(501).json({
        message: "Not Implemented !"    
    })
};

function getAllProblems(req,res){
    return res.status(501).json({
        message: "Not Implemented !"    
    })
};

function updateProblem(req,res){
    return res.status(501).json({
        message: "Not Implemented !"    
    })
};

function deleteProblem(req,res){
    return res.status(501).json({
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