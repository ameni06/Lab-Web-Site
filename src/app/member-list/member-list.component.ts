import {  Component,OnInit } from "@angular/core";
import { GLOBAL } from "../app-config";
import { Member } from "../models/member";
import { MemberService } from "../services/member.service";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ["id", "cin", "name", "type", "cv", "createdDate","actions"];
  datasource : Member[];
  constructor( private Ms:MemberService) {this.datasource=this.Ms.tab }

  ngOnInit(): void {
  }
 
}


