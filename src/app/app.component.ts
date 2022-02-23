import { Component, OnInit } from '@angular/core';
import data from '../../../data/parrainagestotal.json';
import { Parrain } from './models/parrain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'parrainages';

  public metaJSONStr: string;

  ngOnInit() {
    console.log('init', data);
    const parrains: Parrain[] = data as any;
    const mandats: Set<string> = new Set();
    const candidats: Set<string> = new Set();
    parrains.forEach(parrain => {
      mandats.add(parrain.Mandat);
      candidats.add(parrain.Candidat);
    });
    this.metaJSONStr = encodeURIComponent(JSON.stringify({mandats: Array.from(mandats), candidats: Array.from(candidats)}));

    console.log(mandats, candidats)
  }
}
