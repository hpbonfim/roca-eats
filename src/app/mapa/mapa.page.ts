import { Component, OnInit } from '@angular/core';
import Leaflet from 'leaflet';
import 'leaflet-routing-machine';

// Add this line to remove typescript errors
declare var L: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mapa: any;

  lat = -23.6719
  lng = -46.7771

  PointA_lat = -23.657
  PointA_lng = -46.767

  PointB_lat = -23.6229
  PointB_lng = -46.7142

  ionViewDidEnter() {
    this.drawMap();
  }

  drawMap(): void {
    // marcador do mapa
    const markerGroup = Leaflet.featureGroup();
    const marker = Leaflet.marker([this.lat, this.lng]);

    this.mapa = Leaflet.map('map').setView([this.lat, this.lng], 11);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© Open Street Map',
    zoom: 8,
    maxZoom: 18,
    minZoom: 4,
    minResolution: 4891.96981025128,
    maxResolution: 39135.75848201024,
    doubleClickZoom: true,
    center: [this.lat, this.lng]
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
