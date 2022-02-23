import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {geoEqualEarth, geoPath} from 'd3';

@Component({
  selector: 'app-france-map',
  templateUrl: './france-map.component.html',
  styleUrls: ['./france-map.component.scss']
})
export class FranceMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const projection = geoEqualEarth();
    const path = geoPath(projection);

    const svg = d3.create("svg").attr("viewBox", [0, 0, 975, 610]);
    svg.append(path);
    document.getElementById('#chart').append(svg);
  }

}
