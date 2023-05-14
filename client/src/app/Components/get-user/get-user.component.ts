import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent  implements OnInit{
  users:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.http.get("https://localhost:5116/mywebapi/Users").subscribe((res)=>{
      this.users = res;
      
    })
  }

}
