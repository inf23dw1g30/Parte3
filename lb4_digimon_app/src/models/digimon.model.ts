import {Entity, model, property} from '@loopback/repository';

@model()
export class Digimon extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo1: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo2: string;


  constructor(data?: Partial<Digimon>) {
    super(data);
  }
}

export interface DigimonRelations {
  // describe navigational properties here
}

export type DigimonWithRelations = Digimon & DigimonRelations;
