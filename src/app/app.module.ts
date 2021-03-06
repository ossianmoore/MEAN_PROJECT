import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
MatInputModule,
MatCardModule,
MatButtonModule,
MatToolbarModule,
MatExpansionModule, } from '@angular/material';
import { AddRecordComponent } from './add-record/add-record.component';
import { ViewAllRecordsComponent } from './view-all-records/view-all-records.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material';

import { ViewRecordComponent } from './view-record/view-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { SearchRecordsComponent } from './search-records/search-records.component';

import { ToastrModule} from 'ngx-toastr';
import { MatSelectModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ViewAllRecordsComponent,
    ViewRecordComponent,
    UpdateRecordComponent,
    SearchRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
