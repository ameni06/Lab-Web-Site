import {  Component,OnInit } from "@angular/core";
import { GLOBAL } from "../app-config";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ["id", "cin", "name", "type", "cv", "createdDate","actions"];
  datasource : any[]=GLOBAL._DB.members;
  constructor() { }

  ngOnInit(): void {
  }
 
}


