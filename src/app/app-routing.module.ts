import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './pages/q1search/child/child.component';
import { ParentComponent } from './pages/q1search/parent/parent.component';
import { ReactiveFormsComponent } from './pages/forms/reactive-forms/reactive-forms.component';
import { PipeShowComponent } from './pages/pipe-show/pipe-show.component';
import { ParentRouteComponent } from './pages/param routing/parent-route/parent-route.component';
import { ChildRouteComponent } from './pages/param routing/child-route/child-route.component';
import { ParentPageComponent } from './pages/PTC-CTP/parent-page/parent-page.component';
import { ChildPageComponent } from './pages/PTC-CTP/child-page/child-page.component';
import { ConditionalTableComponent } from './pages/Conditional List/conditional-table/conditional-table.component';
import { UserListComponent } from './pages/CURD/user-list/user-list.component';
import { PaginationListComponent } from './pages/pagination/pagination-list/pagination-list.component';

const routes: Routes = [
  // {path:'', component:ParentComponent}
  { path: '', component: ReactiveFormsComponent },
  // { path: '', component: PipeShowComponent },
  // { path: '', component: ParentRouteComponent },
  // { path: 'child/:text', component: ChildRouteComponent },
  // { path: '', component: ParentPageComponent },
  // { path: '', component: ConditionalTableComponent },
  //  { path: '', component: UserListComponent },
  //  { path: '', component: PaginationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
