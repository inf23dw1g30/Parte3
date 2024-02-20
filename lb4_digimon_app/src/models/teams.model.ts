import {Entity, model, property} from '@loopback/repository';

@model()
export class Teams extends Entity {
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
    type: 'number',
  })
  id_digimon?: number;

  @property({
    type: 'number',
  })
  id_trainer?: number;


  constructor(data?: Partial<Teams>) {
    super(data);
  }
}

export interface TeamsRelations {
  // describe navigational properties here
}

export type TeamsWithRelations = Teams & TeamsRelations;
