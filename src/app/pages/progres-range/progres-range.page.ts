import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-range',
  templateUrl: './progres-range.page.html',
  styleUrls: ['./progres-range.page.scss'],
})
export class ProgresRangePage implements OnInit {

  porcentaje: number = 0;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( evento ) {
    console.log(evento.detail.value);

    this.porcentaje = (evento.detail.value / 100);
  }

}
