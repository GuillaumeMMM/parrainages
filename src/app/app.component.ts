import { Component, OnInit } from '@angular/core';
/* import data from '../../../data/parrainagestotal.json';
import { Parrain } from './models/parrain'; */
import { DataService } from './services/data.service';
/* import communes from '../../../data/communes.json';
import { Commune } from './models/commune'; */
import parrainages from '../assets/parrainagesS.json';
import { Parrain } from './models/parrain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'parrainages';

  public metaJSONStr: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    /* console.log('init', data);
    const parrains: Parrain[] = data as any;
    const mandats: Set<string> = new Set();
    const candidats: Set<string> = new Set();
    parrains.forEach(parrain => {
      mandats.add(parrain.Mandat);
      candidats.add(parrain.Candidat);
    });
    this.metaJSONStr = encodeURIComponent(JSON.stringify({mandats: Array.from(mandats), candidats: Array.from(candidats)})); */
/* 
    const parrains: Parrain[] = (data as Parrain[]).filter(parrain => parrain.Mandat === 'Maire');
    const parrainsWithCommune: Parrain[] = this.dataService.addCommunesInfo(parrains, communes as Commune[]);

    console.log(JSON.stringify(parrainsWithCommune.filter(parrain => !!parrain.Commune))) */

    console.log(parrainages)
  }
}
