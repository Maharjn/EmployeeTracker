const inquirer = require('inquirer');
const { getDepartments, addDepartment } = require('./operations/department');
const { getEmployees,viewAllRoles,addRole } = require('./operations/employee');



function main(){
  return inquirer.prompt([
    {
      message: "What you want?",
      type: 'list',
      name: 'operation',
      choices: [
        'View all departments',
        'Add a department',
        'View all Employees',
        'View all roles',   
        'Add a role',
        'Update employee roles',   // once user selected this, should see a list of employee name to choose from, select the new role
        'exit',
      ]
    },
    {
      message: "What is the department name?",
      type: 'input',
      name: "department_name",
      when: (ans) => ans.operation === 'Add a department',
    },
  ]).then(async (ans) => {
    console.log({ans})
    
    switch (ans.operation){
  
      case "Add a department":
        const department = await addDepartment(ans.department_name);
        break;

      case "View all departments":
        const departments = await getDepartments();
        console.table(departments);
        break;

        case "View all Employees":
          const empDetails =  await getEmployees();
          console.table(empDetails);
          break;  
  
      case "View all roles":
        const rolesDetails = await viewAllRoles();
        console.log('\n');
        console.table(rolesDetails);
        break;

      case "Add a role":
        const insertRoles = await addRole();
        break;
      case "exit":
        process.exit(0);
        break;
        
    }
  
    await main();
  
  })

}

main();

//  create a CLI to manage employees

// view all departments, 

// view all roles, 
// view all employees, 
// add a department, 

// add a role, add an employee, and update an employee role



