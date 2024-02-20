import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Digimon} from '../models';
import {DigimonRepository} from '../repositories';

export class DigimonController {
  constructor(
    @repository(DigimonRepository)
    public digimonRepository : DigimonRepository,
  ) {}

  @post('/digimons')
  @response(200, {
    description: 'Digimon model instance',
    content: {'application/json': {schema: getModelSchemaRef(Digimon)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Digimon, {
            title: 'NewDigimon',
            exclude: ['id'],
          }),
        },
      },
    })
    digimon: Omit<Digimon, 'id'>,
  ): Promise<Digimon> {
    return this.digimonRepository.create(digimon);
  }

  @get('/digimons/count')
  @response(200, {
    description: 'Digimon model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Digimon) where?: Where<Digimon>,
  ): Promise<Count> {
    return this.digimonRepository.count(where);
  }

  @get('/digimons')
  @response(200, {
    description: 'Array of Digimon model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Digimon, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Digimon) filter?: Filter<Digimon>,
  ): Promise<Digimon[]> {
    return this.digimonRepository.find(filter);
  }

  @patch('/digimons')
  @response(200, {
    description: 'Digimon PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Digimon, {partial: true}),
        },
      },
    })
    digimon: Digimon,
    @param.where(Digimon) where?: Where<Digimon>,
  ): Promise<Count> {
    return this.digimonRepository.updateAll(digimon, where);
  }

  @get('/digimons/{id}')
  @response(200, {
    description: 'Digimon model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Digimon, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Digimon, {exclude: 'where'}) filter?: FilterExcludingWhere<Digimon>
  ): Promise<Digimon> {
    return this.digimonRepository.findById(id, filter);
  }

  @patch('/digimons/{id}')
  @response(204, {
    description: 'Digimon PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Digimon, {partial: true}),
        },
      },
    })
    digimon: Digimon,
  ): Promise<void> {
    await this.digimonRepository.updateById(id, digimon);
  }

  @put('/digimons/{id}')
  @response(204, {
    description: 'Digimon PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() digimon: Digimon,
  ): Promise<void> {
    await this.digimonRepository.replaceById(id, digimon);
  }

  @del('/digimons/{id}')
  @response(204, {
    description: 'Digimon DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.digimonRepository.deleteById(id);
  }
}
