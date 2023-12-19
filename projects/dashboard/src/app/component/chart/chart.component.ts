import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('horizontalBarChartCanvas')
  horizontalBarChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('comparisonChartCanvas')
  comparisonChartCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    this.createPieChart();
    this.createBarChart();
    this.createHorizontalBarChart();
    this.createComparisonChart();
  }

  createPieChart() {
    new Chart(this.pieChartCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
    });
  }

  createBarChart() {
    new Chart(this.barChartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [300, 50, 100],
            backgroundColor: '#FF6384',
          },
        ],
      },
    });
  }

  createHorizontalBarChart() {
    new Chart(this.horizontalBarChartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [300, 50, 100],
            backgroundColor: '#FF6384',
          },
        ],
      },
      options: {
        indexAxis: 'y',
      },
    });
  }

  createComparisonChart() {
    new Chart(this.comparisonChartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [300, 50, 100],
            backgroundColor: '#FF6384',
          },
          {
            label: 'Dataset 2',
            data: [200, 150, 200],
            backgroundColor: '#36A2EB',
          },
        ],
      },
    });
  }
}
