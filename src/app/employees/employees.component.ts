import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any;
  constructor(private common:CommonService){
    this.employees=common.employees;
  }

  ngOnInit(): void {
    let difference=this .common.calculateage(new Date(),new Date());
  }

}
