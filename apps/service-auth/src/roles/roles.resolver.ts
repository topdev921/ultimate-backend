import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { NotImplementedError } from '@graphqlcqrs/common';
import { NestCasbinService } from 'nestjs-casbin-mongodb';
import { Role, RoleMutationArgs } from '../types';

@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly casbin: NestCasbinService) {}

  @Query(() => [Role])
  async roles() {
    throw new NotImplementedError('Not implemented');
  }

  @Query(() => Role)
  async role(@Args('id') id: string) {
    throw new NotImplementedError('Not implemented');
  }

  @Mutation(() => Role, { name: 'role'})
  async roleMutation(@Args() cmds: RoleMutationArgs) {
    const actions = this.casbin.addPolicy('juicycleff', 'tenantx', 'project/001', 'read');
    // tslint:disable-next-line:no-console
    console.log(actions);
    throw new NotImplementedError('Not implemented');
  }
}
