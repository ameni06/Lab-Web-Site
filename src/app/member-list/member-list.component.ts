import {  Component,OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { GLOBAL } from "../app-config";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { Member } from "../models/member";
import { MemberService } from "../services/member.service";


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ["id", "cin", "name", "type", "cv", "createdDate","actions"];
  datasource :   MatTableDataSource<Member>;
  
  constructor( private Ms:MemberService,private dialog:MatDialog) {
    this.datasource=new MatTableDataSource(this.Ms.tab) }

  ngOnInit(): void {
  }

delete(currentID : any):void{
    //this.Ms.removeMemberById(currentID).then(()=>this.GetData())
   const dialogRef=this.dialog.open(ConfirmDialogComponent);
   dialogRef.afterClosed().pipe().subscribe(isDeleteConfirmed => {
       if(isDeleteConfirmed){
        this.Ms.removeMemberById(currentID).then(()=>this.GetData())
       }
     }
   )

  }
 GetData()
 {
   this.Ms.GetAll().then((data)=>this.datasource.data=data);
 }

 
 applyFilter(event: Event) {
   
  const filterValue = (event.target as HTMLInputElement).value;
  this.datasource.filter = filterValue.trim().toLowerCase();
}
}


