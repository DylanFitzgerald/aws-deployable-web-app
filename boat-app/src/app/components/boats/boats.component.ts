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

  }

  postBoatToBackend(boat:any) {
    this.dataService.postNewBoat(boat).subscribe((status) => {
      console.log(status);
    });
  }

  postNewBoat(shipName, shipType) {
    var boat = {shipName: shipName, shipType: shipType};
    if (boat.shipName == '' || boat.shipType == '') {
      alert('Must enter boat name and ship type!');
    }
    else {
      this.postBoatToBackend(boat);
      location.reload();
    }   
  }

  deleteBoatBasedOnId(shipId) {
    if (shipId == '') {
      alert('Must enter a ship id!');
    }
    else {
      this.dataService.deleteBoat(shipId).subscribe((status) => {
        console.log(status);
      })
      location.reload();
    }  
  }
}

interface Boat {
  shipId:number,
  shipName:string,
  shipType:string
}
