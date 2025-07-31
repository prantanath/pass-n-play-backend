import { Test, TestingModule } from '@nestjs/testing';
import { PlayerStatController } from './player-stat.controller';
import { PlayerStatService } from './player-stat.service';

describe('PlayerStatController', () => {
  let controller: PlayerStatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerStatController],
      providers: [PlayerStatService],
    }).compile();

    controller = module.get<PlayerStatController>(PlayerStatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
