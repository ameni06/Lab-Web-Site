import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [

  {path:'members',
  pathMatch:'full',
  component:MemberListComponent,

},
{path:'Form',
  pathMatch:'full',
  component:MemberFormComponent,

},
{path:'members/:id/edit',
pathMatch:'full',
component:MemberFormComponent,},
{path:'members/:id/delete',
pathMatch:'full',
component:MemberListComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
