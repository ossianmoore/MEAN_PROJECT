import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from '../record.model';
//import http client and instntiaite in constructor
//import model for Record object
//import observable to retrieve record objects



@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private records: Observable<Record[]>;

  constructor(private httpClient: HttpClient) { }

  //function to retrieve a single record from the collection using unique id
  ViewRecord(id:string):Observable<any>{
    return this.httpClient.get('http://localhost:3000/api/records/records/'+id);
  }

  //function to return http request all records from the database
  ViewAllRecords():Observable<any>{
    return this.httpClient.get('http://localhost:3000/api/records/records');
  }

  //function to add record object to database with http post request
  //params are passed through input on add record page.
  AddRecord(title: string,
            artist: string,
            year: string,
            genre: string,
            cover: string,
            price: number
            ):Observable<any>{
    const record:Record = { title : title,
                            artist : artist,
                            year : year,
                            genre : genre,
                            cover : cover,
                            price : price
                          };
                          console.log("working");
    return this.httpClient.post('http://localhost:3000/api/records/records/', record);
  }

  //function to delete record object from database with a http delete. 
  //id is used to identify object and is passed as a parameter in the request
  DeleteRecord(id:string):Observable<any>{
    console.log(id, "deleted");
    return this.httpClient.delete('http://localhost:3000/api/records/records/'+id);
  }

  //function to update existing record via inputs on update component
  //updates correct record through unique id. vat is calculated in function
  UpdateRecord(id: string,
               title: string,
               artist: string,
               year: string,
               genre: string,
               cover: string,
               price: number
               ):Observable<any>{
    const record:Record = {title : title,
                           artist : artist,
                           year : year,
                           genre : genre,
                           cover : cover,
                           price : price
                          };
    return this.httpClient.put('http://localhost:3000/api/records/records/'+id,record);
  }




} //end class RecordService
