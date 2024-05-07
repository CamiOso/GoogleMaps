

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { lugar } from '../interfaces/lugar';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement!: ElementRef;
  map!: google.maps.Map;
  marcadores: google.maps.Marker[] = [];


  lugares: lugar[] = [


    {
      nombre: 'Udemy',
      lat: 37.784679,
      lng: -122.395936
    },
    {
      nombre: 'Bahía de San Francisco',
      lat: 37.798933,
      lng: -122.377732
    },
    {
      nombre: 'The Palace Hotel',
      lat: 37.788578,
      lng: -122.401745
    }
  ];

  constructor() { }

  ngOnInit() {
    this.cargarMapa();
  }

  cargarMapa() {
    const latLng = new google.maps.LatLng(37.784679, -122.395936);

    const mapaOpciones: google.maps.MapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapaOpciones);

    for (const lugar  of this.lugares) {
      this.agregarMarcador(lugar);
    }
  }


  agregarMarcador( lugar: lugar ) {
    const latLng = new google.maps.LatLng( lugar.lat, lugar.lng );
    const marker= new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });


  }

  }


