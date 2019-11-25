import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordService }  from '../Services/record.service';
import { Record } from '../record.model';
import { Observable } from 'rxjs';
import { Location} from '@angular/common';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.css']
})
export class ViewRecordComponent implements OnInit {

  myrecord: any;
  id: string;

  constructor( private activatedRoute: ActivatedRoute,
               private recordService: RecordService,
               private location : Location
               ) { }


  //get id from activated route parameter.
  //if id is populated, subscribe to data 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.recordService.ViewRecord(this.id).subscribe((record) => {
        this.myrecord = record;
        console.log(this.myrecord);
      });
    
  }

  onDeleteRecord(id: string){
    id = this.id;
    console.log("Deleting this record = ", id);
    this.recordService.DeleteRecord(id).subscribe(
      ()=>{
        this.location.back();
      }
    );
  }

}
