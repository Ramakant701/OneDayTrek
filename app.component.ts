import { Component } from '@angular/core';

export class Manufacturer {
  id: number;
  name: string;
  lng: number;
  lat: number;
  zoom: number;
  details: {
    marketName: string;
    lngMark: number;
    latMark: number;
  };
}

const MANUFACTURERS: Manufacturer[] = [
  { id: 11, name: 'Borivali Market', lat: 19.237275, lng: 72.853677, zoom: 17, details: {
    marketName: 'Rex Market',
    lngMark: 19.237275,
    latMark: 72.853677
  }},
  { id: 12, name: 'Bhuleswar Market', lat: 18.9528782, lng: 72.8296229, zoom: 17 , details: {
    marketName: 'Bhuleswar Market',
    lngMark: 18.9528782,
    latMark:  72.8296229
  }},
  { id: 13, name: 'Crawford Market', lat: 18.9470154, lng: 72.8323953, zoom: 17 , details: {
    marketName: 'Crawford Market',
    lngMark: 18.9470154 ,
    latMark: 72.8323953
  } },
  { id: 14, name: 'Fashion Street', lat: 18.9412435, lng: 72.8294682, zoom: 19 , details: {
    marketName: 'Fashion Street',
    lngMark: 18.9412435,
    latMark: 72.8294682
  } }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})



export class AppComponent {
  title = 'Tour of Mumbai Market';
  name = 'RS Bangles';
  manufacturers = MANUFACTURERS;
  selectedManufacturer: Manufacturer;
  lat: number = 19.2994269;
  lng: number = 72.8446707;
  latMark: number = 19.2994269 ;
  lngMark: number = 72.8446707;
  // google maps zoom level
  zoom: number = 21;
  onSelect(manufacturer: Manufacturer): void {
    this.name = manufacturer.details.marketName;
    this.lat = manufacturer.lat;
    this.lng = manufacturer.lng;
    this.zoom = manufacturer.zoom;
    this.lngMark = manufacturer.details.lngMark;
    this.latMark = manufacturer.details.latMark;
    // document.getElementsByClassName('view-link')[0].innerHTML.split('href="')[1].split('"> <span')[0];
  }
}
