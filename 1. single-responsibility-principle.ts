// If your description of a class have AND in it then you need to consider SRP
// Your class should have general project details, task details and financial details

class ProjectDump {
    private projectName: string;
    private startedDate: Date;
    private projectManager: any;
    private projectCost: number;

    constructor(name:string, startDate: Date) {
        this.projectName = name;
        this.startedDate = startDate;
    }

    public getProjectCost(): number {
        return this.projectCost;
    }
    
    public addCost(amount:number) {
        this.projectCost += amount;
    }

    public assignProjectManager(manager: any) {
        this.projectManager = manager;
    }

    public getProjectManagerExperience() {
        return this.projectManager.experience;
    }
}