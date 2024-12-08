import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-geomonitor',
  templateUrl: './geomonitor.component.html',
  styleUrls: ['./geomonitor.component.css'],
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
})
export class GeomonitorComponent implements OnInit {
  private map: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadLeaflet();
    }
  }

  private async loadLeaflet(): Promise<void> {
    const L = await import('leaflet');
    this.initMap(L);
  }

  private initMap(L: any): void {
    this.map = L.map('map').setView([-14.8619, -40.8447], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    const points: [number, number][] = [
      [-14.8619, -40.8447],
      [-14.8563, -40.8438],
      [-14.8665, -40.85],
    ];

    points.forEach((point) => {
      L.circleMarker(point, { color: 'red', radius: 8 }).addTo(this.map);
    });
  }
}
