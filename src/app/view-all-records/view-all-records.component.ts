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

  private MyRecords: any = [];

  constructor( private recordService: RecordService) { }

  ngOnInit() {
    this.recordService.ViewAllRecords().subscribe((data) => {
      this.MyRecords = data.records;
      console.log(this.MyRecords);
    });
  }

}//end viewAllRecords Component
