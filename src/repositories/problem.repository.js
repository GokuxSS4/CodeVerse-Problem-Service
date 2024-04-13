const {Problem} = require('../models/index');

class ProblemRepository{
    async addProblem(problemData){
        try {
            await Problem.create({
                title: problemData.title,
                description:problemData.description,
                testCases:problemData.testCases ? problemData.testCases :[]
            });
            return problemData
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;