import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { RecordService } from '../Services/record.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {

  record: any;
  id: string;

  //initialise service, route, toast, location
  constructor(private recordService: RecordService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private location: Location) { }


  //on initialising, grabs id from the routerlink param and uses it to get corresponding data
  ngOnInit() {
    this.recordService.ViewRecord(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.record = data;
      }
    );

  }//end onInit


  //takes values entered on update form and assigns them to the object with the inported id.
  //on completion, goes to previous page and shows toast
  onUpdateRecord(form: NgForm) {
    this.recordService.UpdateRecord(this.record._id,
      form.value.title,
      form.value.artist,
      form.value.year,
      form.value.genre,
      form.value.cover,
      form.value.price).subscribe();
    this.toast.success('', 'Your record has successfuly been updated');
    this.location.back();
  }//end onUpdateRecord

}//end class UpdateRecordComponent
