import { Test, TestingModule } from '@nestjs/testing';
import { PlanService } from './plan.controller';
import { CqrsModule } from '@nestjs/cqrs';

describe('Plan Controller', () => {
  let controller: PlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [PlanService],
    }).compile();

    controller = module.get<PlanService>(PlanService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
