import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users:any;
  title = 'services';

  constructor(private httpclient:HttpClient){

  }
  ngOnInit(): void {
   let observable = this.httpclient.get("https://reqres.in/api/users");
   observable.subscribe((result:any)=>{
    

    this.users=result.data;
    console.log(this.users);
   })
    }
}
