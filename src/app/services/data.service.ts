import { Injectable } from '@angular/core';
import { Parrain } from '../models/parrain';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public addLocation = (data: Parrain[]): Parrain[] => {
    return data;
  }
}
