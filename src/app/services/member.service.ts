import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
 
  constructor(private httpClient :HttpClient){}
  public tab :Member[]=GLOBAL._DB.members;
 
  getMemberById(id:string):Promise<Member>
  {
    
   //return this.httpClient.get<Member>('linkToRestAPI').toPromise();
   
   return new Promise(resolve => resolve(
    this.tab.filter(item=> item.id ===id)[0]??null))
    
   }

  


  saveMember(member: Member):Promise<Member>
  {
    //this.httpClient.post<Member>('linkToRestAPI', member).toPromise();
    const memberToSave={
      ...member, // extraire les obj illi jew mil form
    }
    memberToSave.id=member.id?? Math.ceil(Math.random()*10000).toString();
    memberToSave.createdDate=member.createdDate??new Date().toISOString();
    this.tab=[memberToSave,...this.tab.filter(item=>item.id !==member.id)] //pour eviter illi member nal9ah m3awed martin
    return new Promise(resolve =>resolve(memberToSave))
  }
  
  removeMemberById(currentID : any):Promise<void>{
    //this.httpClient.delete<Member>("linkToRestAPI").toPromise();
    this.tab =this.tab.filter(item => item.id !=currentID)
    return new Promise  (resolve => resolve())
  }
  GetAll():Promise<Member[]>
  {
    //this.httpClient.get<Member>("linkToRestAPI").toPromise();
    return new Promise  (resolve => resolve(this.tab));
  }
  }
 
  
  

  

  
