export interface Departement{
  code:String;
  nom:String;
  description?:String;
}
export interface Filliere {
  code:String;
  nom:String;
  description?:String;
  dept:Departement;

}



export interface Class{
  code:String;
  nom:String;
  description?:String;
  filliere:Filliere;
}
export interface Etudiants {
  code:String;
  nom:String;
  prenom:String;
  adresse:String;
  telephone:String;
  email:String;
  classe:Class;

}

export interface EtudiantDTO{
  code: string;
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  email: string;
  codeClasse: string;
  codeFiliere: string;
  codeDept: string;
}

export interface Carte {
  id:number;
  dateDeliv:Date;
  anneDebut:Number;
  etudiant:Etudiants;
  payante:boolean


}
