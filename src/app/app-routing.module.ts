import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { ViewAllRecordsComponent } from './view-all-records/view-all-records.component';
import { ViewRecordComponent } from './view-record/view-record.component';


const routes: Routes = [
  {
    path: 'addRecord',
    component: AddRecordComponent
  },
  {
  path: 'viewAllRecords',
  component: ViewAllRecordsComponent
  },
  {
  path: 'view-record/:id',
  component: ViewRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
