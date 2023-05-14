import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private http:HttpClient){}

 ngOnInit(): void {
   this.http.get("https://localhost:5116/mywebapi/Users").subscribe({
    next:Response=>{console.log(Response)},
    error:err=>console.log(err),
    complete:()=>console.log("completed")
   })
 }
}
