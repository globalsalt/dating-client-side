import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-app';
  users:any;

  constructor(private http:HttpClient)
  {  }


  ngOnInit(): void {
   this.getUsers();
  }

  public getUsers()
  {
    this.http.get("https://localhost:44360/api/users").subscribe(response=>{
      this.users=response
    },
    error=>
    {
      console.log(error);
    });
  }
}
