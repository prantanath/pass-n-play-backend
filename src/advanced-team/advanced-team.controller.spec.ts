import { Test, TestingModule } from '@nestjs/testing';
import { AdvancedTeamController } from './advanced-team.controller';
import { AdvancedTeamService } from './advanced-team.service';

describe('AdvancedTeamController', () => {
  let controller: AdvancedTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvancedTeamController],
      providers: [AdvancedTeamService],
    }).compile();

    controller = module.get<AdvancedTeamController>(AdvancedTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
