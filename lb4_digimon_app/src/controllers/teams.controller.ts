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
import {Teams} from '../models';
import {TeamsRepository} from '../repositories';

export class TeamsController {
  constructor(
    @repository(TeamsRepository)
    public teamsRepository : TeamsRepository,
  ) {}

  @post('/teams')
  @response(200, {
    description: 'Teams model instance',
    content: {'application/json': {schema: getModelSchemaRef(Teams)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teams, {
            title: 'NewTeams',
            exclude: ['id'],
          }),
        },
      },
    })
    teams: Omit<Teams, 'id'>,
  ): Promise<Teams> {
    return this.teamsRepository.create(teams);
  }

  @get('/teams/count')
  @response(200, {
    description: 'Teams model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Teams) where?: Where<Teams>,
  ): Promise<Count> {
    return this.teamsRepository.count(where);
  }

  @get('/teams')
  @response(200, {
    description: 'Array of Teams model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Teams, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Teams) filter?: Filter<Teams>,
  ): Promise<Teams[]> {
    return this.teamsRepository.find(filter);
  }

  @patch('/teams')
  @response(200, {
    description: 'Teams PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teams, {partial: true}),
        },
      },
    })
    teams: Teams,
    @param.where(Teams) where?: Where<Teams>,
  ): Promise<Count> {
    return this.teamsRepository.updateAll(teams, where);
  }

  @get('/teams/{id}')
  @response(200, {
    description: 'Teams model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Teams, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Teams, {exclude: 'where'}) filter?: FilterExcludingWhere<Teams>
  ): Promise<Teams> {
    return this.teamsRepository.findById(id, filter);
  }

  @patch('/teams/{id}')
  @response(204, {
    description: 'Teams PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teams, {partial: true}),
        },
      },
    })
    teams: Teams,
  ): Promise<void> {
    await this.teamsRepository.updateById(id, teams);
  }

  @put('/teams/{id}')
  @response(204, {
    description: 'Teams PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() teams: Teams,
  ): Promise<void> {
    await this.teamsRepository.replaceById(id, teams);
  }

  @del('/teams/{id}')
  @response(204, {
    description: 'Teams DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.teamsRepository.deleteById(id);
  }
}
