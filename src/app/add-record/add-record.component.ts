import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordService } from '../Services/record.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
//import ng form module to deal with angular html form
//import and initiate service to make http requests
//import location to navigate back, callback function in add function

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  //initialise service, location, toast.
  constructor(private recordService: RecordService,
    private location: Location,
    private toast: ToastrService) { }

  ngOnInit() {

  }//end oninit


  //function to add record to database using service. Takes values from form and uses them as paramterers for the servcie function
  //if statement to check if from is valid. if not it returns.
  //goes to previous page once add is complete and shows toast
  onAddRecord(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    this.recordService.AddRecord(
      form.value.title,
      form.value.artist,
      form.value.year,
      form.value.genre,
      form.value.cover,
      form.value.price).subscribe(() => {
      });
    this.toast.success('', 'Your record has successfuly been added to the database');
    this.location.back();
  }//end onAddRecord

}//end clas
