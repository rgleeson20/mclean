export interface Project {
  id: ProjectId;
  yearWorkedOn: number;
  location: ProjectLocation;
  title: string;
  description: string;
}

export enum ProjectId {
  IceCave = 'ice-cave',
  Christmas2020 = 'christmas-2020',
  WhatNow = 'what-now',
  Dosist = 'dosist',
  NewBalance = 'new-balance',
  ReggieRobot = 'reggie-robot',
  EsteeLauder = 'estee-lauder',
  HondaAccord = 'honda-accord',
  Acadia = 'acadia',
  HondaCRV = 'honda-crv',
  HondaCoupe = 'honda-coupe',
  HondaSedan = 'honda-sedan',
  HondaSensing = 'honda-sensing',
  AlexiaFarm = 'alexia-farm',
  PocketCamera = 'pocket-camera',
  Scorpion = 'scorpion'
}

export enum ProjectLocation {
  SaddingtonBaynes = 'Saddington Baynes',
  University = 'University',
}
