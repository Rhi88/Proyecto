import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceitecom',
  templateUrl: './aceitecom.component.html',
  styleUrls: ['./aceitecom.component.css']
})
export class AceitecomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string ='Almacenamiento de aceite de uso domestico';
  lat: number = 19.4226264;
  lng: number = -99.1563623;

  zoom: number = 12;

markers: marker[] = [
  {
    lat: 19.4226,
    lng: -99.156423,
    label: 'E',
    type: 'info',
    draggable: false
   
  },
  {
    lat: 19.4226,
    lng: -99.156499,
    label : 'C',
    type: 'info',
    draggable: false
    
  },
  {
    lat: 19.4226250,
    lng: -99.166455,
    label :'B',
    type: 'info',
    draggable: false
   
  }
]

}
// just an interface for type safety.
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
type: string;

}

