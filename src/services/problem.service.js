class ProblemService {
    constructor(problemRepostiory){
        this.problemRepostiory = problemRepostiory; 
    }

    async addProblem(problemData){

        const problem = await this.problemRepostiory.addProblem(problemData);

        return problem
    }
};

module.exports = ProblemService;