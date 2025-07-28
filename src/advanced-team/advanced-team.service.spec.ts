import { Test, TestingModule } from '@nestjs/testing';
import { AdvancedTeamService } from './advanced-team.service';

describe('AdvancedTeamService', () => {
  let service: AdvancedTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvancedTeamService],
    }).compile();

    service = module.get<AdvancedTeamService>(AdvancedTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
