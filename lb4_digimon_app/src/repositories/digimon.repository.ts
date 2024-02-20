import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Digimon, DigimonRelations} from '../models';

export class DigimonRepository extends DefaultCrudRepository<
  Digimon,
  typeof Digimon.prototype.id,
  DigimonRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Digimon, dataSource);
  }
}
