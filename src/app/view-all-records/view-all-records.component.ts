import { Component, OnInit } from '@angular/core';
import { RecordService } from '../Services/record.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Record } from '../record.model';

@Component({
  selector: 'app-view-all-records',
  templateUrl: './view-all-records.component.html',
  styleUrls: ['./view-all-records.component.css']
})
export class ViewAllRecordsComponent implements OnInit {

  //var for storing array of objects in this component
  private MyRecords: any = [];

  //initialise service to get functions 
  constructor( private recordService: RecordService,
                public router: ActivatedRoute) { }

  //on initialising, use the view all function from the service. set to local variable array.
  ngOnInit() {
    this.recordService.ViewAllRecords().subscribe((data) => {
      this.MyRecords = data.records;
      console.log(this.MyRecords);
    });
  }


}//end viewAllRecords Component
