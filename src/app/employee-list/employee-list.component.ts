import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

  
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  UserName:string = "Enter UserName"

  employee= new Employee;
  userlist = new Array<Employee>();
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees(){
  
    this.loginService.getEmployees()
                      .subscribe( data => {
                        console.log(data);
                        this.userlist= data ;
                      });
  }

  createEmployee(){
    this.loginService.createEmployee(this.employee)
                      .subscribe( data => {
                        console.log(data);
                        this.userlist.push(data);
                       }
                      ,
                      error => {
                        console.log(error,error.status);
                        if(error.status == 403 && error.error.error === 'Forbidden')
                            alert('Access Denied');
                      }
                      );
  }

}

export class Employee {
  name:string;
  role:string;
}