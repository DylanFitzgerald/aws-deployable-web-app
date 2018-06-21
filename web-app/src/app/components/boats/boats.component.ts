import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})

export class BoatsComponent implements OnInit {
  boats:Boat[];
  boat:Boat;
  shipName:string;
  shipType:string;
  
  constructor(private dataService:DataService) {
    console.log('Boats constructor loaded...');

    this.dataService.getAllBoats().subscribe((boats) => {
      this.boats = boats['boats'];
      console.log(this.boats);
    });
  }

  ngOnInit() {
    //console.log('Boats ngOnInit loaded...');
  }

  postBoatToBackend(boat:any) {
    this.dataService.postNewBoat(boat).subscribe((status) => {
      console.log(status);
    });
  }

  postNewBoat(shipName, shipType) {
    var boat = {shipName: shipName, shipType: shipType};
    this.postBoatToBackend(boat);
    location.reload();
    return false;
  }

  deleteBoatBasedOnId(shipId) {
    this.dataService.deleteBoat(shipId).subscribe((status) => {
      console.log(status);
    })
    location.reload();
  }
}

interface Boat {
  shipId:number,
  shipName:string,
  shipType:string
}
