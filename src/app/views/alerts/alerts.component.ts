import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css',
  standalone: true,
  imports: [SidebarComponent, CommonModule, HeaderComponent],
})
export class AlertsComponent {
  alerts = [
    { id: 1, message: 'Surto de dengue detectado em São Paulo', date: '2024-06-01', level: 'high' },
    { id: 2, message: 'Aumento de casos de gripe no Rio de Janeiro', date: '2024-06-03', level: 'medium' },
    { id: 3, message: 'Alerta de COVID-19 em Belo Horizonte', date: '2024-06-05', level: 'high' },
    { id: 4, message: 'Surto de chikungunya em Recife', date: '2024-06-07', level: 'high' },
    { id: 5, message: 'Vacinação contra febre amarela em Manaus', date: '2024-06-08', level: 'low' },
    { id: 6, message: 'Casos de sarampo controlados em Fortaleza', date: '2024-06-09', level: 'low' },
    { id: 7, message: 'Surto de gastroenterite em Salvador', date: '2024-06-10', level: 'medium' },
    { id: 8, message: 'Monitoramento de COVID-19 em Curitiba', date: '2024-06-11', level: 'low' },
    { id: 9, message: 'Aumento de casos de H1N1 em Porto Alegre', date: '2024-06-12', level: 'medium' },
    { id: 10, message: 'Surto de leptospirose em Belém', date: '2024-06-13', level: 'high' },
  ];

  getAlertClass(level: string): string {
    switch (level) {
      case 'high':
        return 'alert-item high';
      case 'medium':
        return 'alert-item medium';
      case 'low':
        return 'alert-item low';
      default:
        return 'alert-item';
    }
  }
}
