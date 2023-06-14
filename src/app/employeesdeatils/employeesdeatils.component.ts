import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employeesdeatils',
  templateUrl: './employeesdeatils.component.html',
  styleUrls: ['./employeesdeatils.component.css']
})
export class EmployeesdeatilsComponent {

  employees:any;
  constructor(private common:CommonService){
    this.employees=common.employees;
  }


  ngOnInit(): void {
    let difference=this .common.calculateage(new Date(),new Date());
  }

}
