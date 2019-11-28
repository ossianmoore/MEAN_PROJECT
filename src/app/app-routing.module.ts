import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { ViewAllRecordsComponent } from './view-all-records/view-all-records.component';
import { ViewRecordComponent } from './view-record/view-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { SearchRecordsComponent } from './search-records/search-records.component'


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
  },
  {
    path: 'update-record/:id',
    component: UpdateRecordComponent
  },
  {
    path: 'search-records',
    component: SearchRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
