import { Component, OnInit } from '@angular/core';
import { RecordService } from '../Services/record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.component.html',
  styleUrls: ['./search-records.component.css']
})
export class SearchRecordsComponent implements OnInit {

  public MyRecords: any = [];
  private recordsEqualTo: any = [];
  private searchOption: string;

  constructor(private recordService: RecordService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastrService) { }

  ngOnInit() {
    this.recordService.ViewAllRecords().subscribe((data) => {
      this.MyRecords = data.records;
      console.log(this.MyRecords);
    });
  }//end on init


  //get genre from mat-option input. set length to zero in order to remove previous results.
  //iterate through all objects, if chosen genre == any of the stored record genres, then push to new 
  //array called recordsEqualTo[]. if array has been populated, returns array with success toast. else sends error toast
  searchByGenre(genre: string) {
    this.recordsEqualTo.length = 0;
    for (let i = 0; i < this.MyRecords.length; i++) {
      if (genre == this.MyRecords[i].genre) {
        this.recordsEqualTo.push(this.MyRecords[i]);
      }//end if
    }//end for
    console.log("results = ", this.recordsEqualTo);
    if(this.recordsEqualTo.length > 0){
      this.toast.success('',this.recordsEqualTo.length +' results were found');
      return this.recordsEqualTo;
    }
    else{
      this.toast.error('','No results were found');
    }
    
  }//end searchByGenre

}//end class
