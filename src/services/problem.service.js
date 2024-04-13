const markdownSanitizer = require('../utils/markDownSanitizer');

class ProblemService {
    constructor(problemRepostiory){
        this.problemRepostiory = problemRepostiory; 
    }

    async addProblem(problemData){
        problemData.description = markdownSanitizer(problemData.description); 
        const problem = await this.problemRepostiory.addProblem(problemData);
        return problem
    }
};

module.exports = ProblemService;