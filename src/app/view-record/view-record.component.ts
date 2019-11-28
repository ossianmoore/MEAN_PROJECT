import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordService } from '../Services/record.service';
import { Record } from '../record.model';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.css']
})
export class ViewRecordComponent implements OnInit {

  myrecord: any;
  id: string;
  priceAfterVat: number;

  constructor(private activatedRoute: ActivatedRoute,
    private recordService: RecordService,
    private location: Location,
    private toast: ToastrService
  ) { }


  //get id from activated route parameter. if id is populated, subscribe to data 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.recordService.ViewRecord(this.id).subscribe((record) => {
      this.myrecord = record;
      console.log(this.myrecord);

      //calculation to get price of record plus VAT
      //will not round number for some reason
      var vat = 23;
      this.priceAfterVat =  Math.round(this.myrecord.price / 100) * (vat + 100);
      Math.round(this.priceAfterVat).toFixed(2);
      console.log(this.priceAfterVat);
    });

  }

  //delete function. object id is used as paramater to identify unique object. calls service delete function. callback function returns to previous page
  onDeleteRecord(id: string) {
    id = this.id;
    console.log("Deleting this record = ", id);
    this.recordService.DeleteRecord(id).subscribe(
      () => {
        this.toast.warning('', 'Your record has successfuly been deleted from the database');
        this.location.back();
      }
    );
  }

}
