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

  constructor(private recordService: RecordService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private location: Location) { }

  ngOnInit() {
    this.recordService.ViewRecord(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.record = data;
      }
    );

  }//end onInit

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
  }

}//end class UpdateRecordComponent
