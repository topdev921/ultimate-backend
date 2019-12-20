import { Body, Controller, Get } from '@nestjs/common';
import { TenantEntity } from '@graphqlcqrs/repository';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { BooleanPayload } from '@ultimatebackend/contracts';
import { GetTenantQuery } from '../cqrs/query/impl/tenant';

@Controller('tenant')
export class TenantController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('find')
  async findOneTenant(@Body() data: { normalizedName: string, key: string, secret: string }): Promise<TenantEntity> {
    return await this.queryBus.execute(new GetTenantQuery({
      normalizedName: {
        _EQ: data.normalizedName,
      },
      tokens: {
        key: {
          _EQ: data.key,
        },
        secret: {
          _EQ: data.secret,
        },
      },
    }, null)) as TenantEntity;
  }

  @Get('exist')
  async tenantExist(@Body() data: { normalizedName: string, key: string, secret: string }): Promise<BooleanPayload> {
    const tenant = await this.queryBus.execute(new GetTenantQuery({
      normalizedName: {
        _EQ: data.normalizedName,
      },
      tokens: {
        key: {
          _EQ: data.key,
        },
        secret: {
          _EQ: data.secret,
        },
      },
    }, null)) as TenantEntity;
    return {
      success: !!tenant,
    };
  }
}
