import { Component, OnInit } from '@angular/core';
import {UsersDataService} from '../service/users-data.service'
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  users:any;
  constructor(private userData:UsersDataService) { }
  ngOnInit(): void {
    //this.ccd.getList().subscribe((result)=>{
      //console.warn(result); 
    //})
    // this.ccd.getList().subscribe(
    //   (result)=>
    //   {
    //     this.lists = result;
    //   },

    //   (error)=>
    //   {
    //     console.log("Error Occured : "+error);
    //   }
    // )
  }

}
