interface IEmployees {
    getSalary(): number;
}

interface IEmployeeBonus {
    getBonus(): number;
}

class PermanantEmployee implements IEmployees, IEmployeeBonus {
    getSalary(): number {
        return 100000;
    }
    getBonus(): number {
        return 40000;
    }
}

class TemproryEmployee implements IEmployees {
    getSalary(): number {
        return 20000;
    }
}