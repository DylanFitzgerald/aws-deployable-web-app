import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) {
    console.log('data service connected ...');
  }

  getAllBoats() {
    return this.http.get('http://35.174.107.116/api/boats')
    .pipe(map(res => res.json()));
  }

  postNewBoat(boat:any) {
    return this.http.post('http://35.174.107.116/api/boats', boat)
    .pipe(map(res => res.json()));
  }

  deleteBoat(id:any) {
    return this.http.delete('http://35.174.107.116/api/boats/' + id)
    .pipe(map(res => res.json()));;
  }
}
