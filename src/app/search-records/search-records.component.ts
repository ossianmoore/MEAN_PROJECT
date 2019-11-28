import { Component, OnInit } from '@angular/core';
import { RecordService } from '../Services/record.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.component.html',
  styleUrls: ['./search-records.component.css']
})
export class SearchRecordsComponent implements OnInit {

  private myRecords: any = [];

  constructor(recordService : RecordService,
              activatedRoute : ActivatedRoute) { }

  ngOnInit() {
  }

}
