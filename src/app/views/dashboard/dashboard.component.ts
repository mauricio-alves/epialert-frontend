import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendChartComponent } from '../../components/trend-chart/trend-chart.component';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { AreaChartComponent } from '../../components/area-chart/area-chart.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { StackedColumnChartComponent } from '../../components/stacked-column-chart/stacked-column-chart.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    FontAwesomeModule,
    TrendChartComponent,
    BarChartComponent,
    AreaChartComponent,
    PieChartComponent,
    StackedColumnChartComponent,
    HeaderComponent
]
})
export class DashboardComponent {
  selectedChartType: string = 'line'; // Define um tipo padrão para o gráfico

  onChartTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedChartType = target.value;
  }
}
