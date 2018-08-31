class Project {
    name: string;
    startedOn: Date;

    constructor(name:string, startDate: Date) {
        this.name = name;
        this.startedOn = startDate;
    }
}

class ProjectCost {
    private projectCost:number;

    public getProjectCost(): number {
        return this.projectCost;
    }
    
    public addCost(amount:number) {
        this.projectCost += amount;
    }
}

class ProjectManager {
    private name: string;
    private experience: number;

    public assignProjectManager(manager: any) {
        this.name = manager;
    }

    public getProjectManagerExperience() {
        return this.experience;
    }
}
