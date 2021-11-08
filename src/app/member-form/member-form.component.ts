import { CdkVirtualForOf } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Member } from '../models/member';
import { MemberService } from '../services/member.service';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: any;
  currentID:any;
  item1:any;
  OnSubmit():void{
    
    console.log(this.form.value);
    const objectToSubmit={...this.item1,...this.form.value};
    this.memberService.saveMember(objectToSubmit)
    .then(()=>this.router.navigate(['./members']))
   
  }
  

  constructor(private memberService:MemberService,private router:Router, private activatedRoute:ActivatedRoute  ) { }

  ngOnInit(): void {
    
    this.currentID=this.activatedRoute.snapshot.params.id;
    if(!!this.currentID){
    //je suis dans edit
     this.memberService.getMemberById(this.currentID).then
      ((item)=>{this.item1=item;this.initform(this.item1)}) }
     
    else{

 //je suis dans create
 
    this.initform(null);
    }
  }
  initform(item:any):void{

    this.form=new FormGroup({
     cin:new FormControl(item?.cin,[Validators.required]),
     name:new FormControl(item?.name,[Validators.required]),
     cv:new FormControl(item?.cv,[]),
     type:new FormControl(item?.type,[Validators.required]),
    })
  }

}
