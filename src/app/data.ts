import {Carte, Class as Classe, Departement, Etudiants} from "./ipslModule";

export var deptGIT: Departement ={
  code:"GIT",
  nom:"Genie Informatique et Telecomminucation"
};

export var deptGeC: Departement ={
  code:"GeC",
  nom:"Genie Civil"
};

export var deptGEM: Departement ={
  code:"GEM",
  nom:"Genie Electro-Mecanique"
};

export var listeDept: Departement[] =[deptGIT,deptGeC,deptGEM];

export var ing3Info : Classe={
  code:"ING3",
  nom:"Ing 3 informatique",
  filliere:{code:"INF",nom:"Informatique",dept:deptGIT},

}
export var ing3Civil : Classe={
  code:"ING3",
  nom:"Ing 3 Civil",
  filliere:{code:"CIV",nom:"Civil",dept:deptGeC},

}

export var etudiantSylla: Etudiants={
  code:"P3156",
  nom:"Sylla",
  prenom:"Ablaye",
  adresse:"Ocass, Kaolack",
  email:"syllaAblaye@gmail.com",
  telephone:"768964523",
  classe:ing3Info
}

export var listeEtudiants:Etudiants []=[
  {
    code:"P3196",
    nom:"Mbaye",
    prenom:"Modou",
    adresse:"Kolda",
    email:"MbayeModou@gmail.com",
    telephone:"789874309",
    classe:ing3Civil
  },
  etudiantSylla,
  {
    code:"P3126",
    nom:"Ndiaye",
    prenom:"Ramatoulaye",
    adresse:"Dakar",
    email:"NdiayeRama@gmail.com",
    telephone:"786452309",
    classe:ing3Info
  },
  {
    code:"P3136",
    nom:"Ndiaye",
    prenom:"Fatou",
    adresse:"Saint-Louis",
    email:"NdiayeFatou@gmail.com",
    telephone:"782562309",
    classe:ing3Civil
  },

  {
    code:"P3101",
    nom:"Sall",
    prenom:"Mame Khady",
    adresse:"Mbour",
    email:"SallKhady@gmail.com",
    telephone:"786373930",
    classe:ing3Info
  }
]

export var carteSylla : Carte ={
  id:278176,
  anneDebut:2024,
  dateDeliv: new Date(Date.parse("2024-06-01")),
  etudiant: etudiantSylla,
  payante:false
}
