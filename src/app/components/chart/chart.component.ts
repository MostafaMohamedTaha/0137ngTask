import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,AfterViewInit {
  @ViewChild('chart')
  chartEl!: ElementRef;

  options: ApexCharts.ApexOptions = {
    chart: {
      height: 156,
      width: 839,
      type: "area",
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      colors: ['#8A74F9']
    },
    colors: ['#8A74F9'],
    series: [{
      name: '250 استخدام',
      data: [10,11, 12, 11, 9, 8, 8, 7, 11, 12, 11, 10,9,9],
      
    }],
    xaxis: {
      categories: ['','يناير', "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",'']
    },
    yaxis: {
      show: false
    },

    tooltip: {
      theme: "dark",

      style: {
        fontSize: '10px',
        fontFamily: undefined,

      },
    },
  };

  chart: ApexCharts | undefined;

  constructor() { }
  ngOnInit(): void {
    const copyButton = document.getElementById('copyButton');
    const inputText = document.getElementById('inputText') as HTMLInputElement;

    if (copyButton && inputText) {
      copyButton.addEventListener('click', () => {
        inputText.select();
        document.execCommand('copy');
      });
    }
  }
  ngAfterViewInit(): void {
    this.chart = new ApexCharts(this.chartEl.nativeElement, this.options);
    this.chart.render();
  }
}
