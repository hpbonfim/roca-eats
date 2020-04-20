import { Component, OnInit } from '@angular/core';
import Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { IonicSelectableComponent } from 'ionic-selectable';

class Selecao {
  public id: number;
  public nome: string;
  public lat: number;
  public lng: number;
}

// Add this line to remove typescript errors
declare var L: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  instituicoes: Selecao[];
  selecionar_instituicao: Selecao;

  produtor = [
    {
      id: 0,
      lat: -23.6993036,
      lng: -46.2514117
    }
  ]

  PointA_lat = this.produtor[0].lat
  PointA_lng = this.produtor[0].lng

  PointB_lat: number;
  PointB_lng: number;

  mapa: any;
  
  constructor() { 
    this.instituicoes = [
      {
        id: 1,
        nome: "Parque Ibirapuera",
        lat: -23.5874162,
        lng: -46.6598223
      },
      {
        id: 2,
        nome: "Praça da Sé",
        lat: -23.5503099,
        lng: -46.6363896
      }
    ]
  }

  ngOnInit() {
    this.PointB_lat = this.instituicoes[0].lat;
    this.PointB_lng = this.instituicoes[0].lng;
  }

  selectChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('selecao:', event.value);
    console.log('latitude', event.value.lat);
    console.log('longitude', event.value.lng);
  }
 

  redirectDashboard(){
    return window.location.replace('http://34.231.173.124/dashboard');
  }

  redirecExit(){
    return window.location.replace('http://34.231.173.124/');
  }

  ionViewDidEnter() {
    this.drawMap();
  }

  drawMap(): void {
    // marcador do mapa
    //const markerGroup = Leaflet.featureGroup();
    //const marker = Leaflet.marker([this.lat, this.lng]);

    this.mapa = Leaflet.map('map').setView([this.produtor[0].lat, this.produtor[0].lng], 11);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© Open Street Map',
    zoom: 8,
    maxZoom: 18,
    minZoom: 4,
    minResolution: 4891.96981025128,
    maxResolution: 39135.75848201024,
    doubleClickZoom: true,
    center: [this.produtor[0].lat, this.produtor[0].lng]
    }).addTo(this.mapa);

    Leaflet.Routing.control({
      language: 'pt-BR',
      serviceUrl: 'http://router.project-osrm.org/route/v1',
      waypoints: [
        Leaflet.latLng(this.PointA_lat, this.PointA_lng),
        Leaflet.latLng(this.PointB_lat, this.PointB_lng)
      ],
      routeWhileDragging: true,
    }).addTo(this.mapa);

  }

}