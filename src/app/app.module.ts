import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './pages/q1search/parent/parent.component';
import { ChildComponent } from './pages/q1search/child/child.component';
import { ListService } from './service/list.service';
import { ReactiveFormsComponent } from './pages/forms/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AllCapitalizePipePipe, CapitalizePipePipe } from './pipes/capitalize-pipe.pipe';
import { PipeShowComponent } from './pages/pipe-show/pipe-show.component';
import { CurrencyFormatorPipe } from './pipes/currency-formator.pipe';
import { ChildRouteComponent } from './pages/param routing/child-route/child-route.component';
import { ParentRouteComponent } from './pages/param routing/parent-route/parent-route.component';
import { ParentPageComponent } from './pages/PTC-CTP/parent-page/parent-page.component';
import { ChildPageComponent } from './pages/PTC-CTP/child-page/child-page.component';
import { ConditionalTableComponent } from './pages/Conditional List/conditional-table/conditional-table.component';
import { UserListComponent } from './pages/CURD/user-list/user-list.component';
import { PaginationListComponent } from './pages/pagination/pagination-list/pagination-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ReactiveFormsComponent,
    CapitalizePipePipe,
    PipeShowComponent,
    AllCapitalizePipePipe,
    CurrencyFormatorPipe,
    ChildRouteComponent,
    ParentRouteComponent,
    ParentPageComponent,
    ChildPageComponent,
    ConditionalTableComponent,
    UserListComponent,
    PaginationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
