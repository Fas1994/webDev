export default class EmployeeService {
    employee = [];
    //employee : will hold an array of employee
    addEmployee= (employee) => {
       let res =  this.employee.push(employee);
       try{

       if (res == 1) {
        return "success";
       } 
    } catch (err){
        console.log("error occured",err);
        return "error";

       }
    };
      
    getEmployeeById = (id) => {
        let emp = null;
        
        this.employee.forEach((e)=>{if(e.empId == id)
        {emp = e;}
    });
    return emp;
};

    
    updateEmployee=(eid, employee) =>{};
    deleteEmployeebyId= (eid) => {};


getEmployee = () => this.employee;
//it should return all employee related info.
//array => employee
//are we using => employee
 }

