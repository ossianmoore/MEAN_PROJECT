import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordService }  from '../Services/record.service';
import { Record } from '../record.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.css']
})
export class ViewRecordComponent implements OnInit {

  myRecord: any;
  id: string;

  constructor( private activatedRoute: ActivatedRoute,
               private recordService: RecordService
               ) { }


  //get id from activated route parameter.
  //if id is populated, subscribe to data 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log('the id got from param is:' + this.id);

    
      this.recordService.ViewRecord(this.id).subscribe((record) => {
        this.myRecord = record;
        //console.log(this.myRecord);
      });
    
  }

  onDeleteRecord(id: string){
    this.recordService.DeleteRecord(id).subscribe();
  }

}
