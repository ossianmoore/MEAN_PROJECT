import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { ViewAllRecordsComponent } from './view-all-records/view-all-records.component';


const routes: Routes = [
  {
    path: 'addRecord',
    component: AddRecordComponent
  },
  {
  path: 'viewAllRecords',
  component: ViewAllRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
