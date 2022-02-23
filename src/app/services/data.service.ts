import { Injectable } from '@angular/core';
import { Commune } from '../models/commune';
import { Parrain } from '../models/parrain';
import departements from '../../../../data/departements.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public addCommunesInfo = (parrains: Parrain[], communes: Commune[]): Parrain[] => {
    return parrains.map(parrain => {
      let communeForParrain = communes.find(commune => commune.nom_commune_complet.toLowerCase() === parrain.Circonscription.toLowerCase() || commune.nom_region.toLowerCase() === parrain.Circonscription.toLowerCase());

      if (!communeForParrain) {
        communeForParrain = this.getCommuneForDepartement(parrain.Departement, communes);
      }

      return {...parrain, Commune: communeForParrain};
    });
  }

  private getCommuneForDepartement = (departement, communes: Commune[]): Commune => {
    const matchingDepartement = departements.find(dep => dep.DeptNom.toLowerCase() === departement.toLowerCase())
    return communes.find(commune => commune.nom_commune_complet.toLowerCase() === matchingDepartement.Commune.toLowerCase())
  }
}
