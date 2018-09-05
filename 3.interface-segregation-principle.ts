// we have to modularizise interfaces, otherwise we might have to implement functions not relevant to the class
// Here Temprory Employees doesn't need bonus functions but since it implements from a common inteface we have to implement it aswell.

interface IEmployeesDump {
    getSalary(): number;
    getBonus(): number;
}

class PermanantEmployeeDump implements IEmployeesDump {
    getSalary(): number {
        return 100000;
    }
    getBonus(): number {
        return 40000;
    }
}

class TemproryEmployeeDump implements IEmployeesDump {
    getSalary(): number {
        return 20000;
    }
    getBonus(): number {
        return 0;
    }
}