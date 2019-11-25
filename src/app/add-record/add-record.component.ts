import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordService } from '../Services/record.service';
import { Location } from '@angular/common';
//import ng form module to deal with angular html form
//import and initiate service to make http requests

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  constructor(private recordService: RecordService,
              private location: Location) { }

  ngOnInit() {
  }


  //function to add record to database using service. Takes values from form and uses them as paramterers for the servcie function
  //logs values and resets form
  //if statement to check if from is valid. if not it returns.
  //goes to previous page once add is complete
  onAddRecord(form: NgForm){
    if (!form.valid){
      return;
    }
    console.log(form.value);
     this.recordService.AddRecord(
       form.value.title,
       form.value.artist,
       form.value.year,
       form.value.genre,
       form.value.cover,
       form.value.price).subscribe(()=> {
         this.location.back();
       });
    console.log(form.value);
    //form.resetForm();
  }

}
