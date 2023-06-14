import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employees=[
    {no:1, name:"Raviraj",age:23},
    {no:2, name:"abhi",age:22 },
    {no:3, name:"ganesh",age:10},
    {no:4, name:"rohan",age:20}
  ]

  constructor() { }

  calculateage(todaydate:Date,birthdate:Date ):number{

    //difference calculation
    let difference =0;
    return difference;

  }
}
