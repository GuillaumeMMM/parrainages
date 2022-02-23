
export enum Candidat {};
export enum Mandat {};

export class Parrain {
    Candidat: string;
    Circonscription: string;
    Civilite: "M." | "Mme";
    DatePublication: string; /* "2022-02-01T00:00:00" */
    Departement: string;
    Mandat: "Maire"
    Nom: string;
    Prenom: string;
}