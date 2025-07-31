import { Module } from '@nestjs/common';
import { PlayerStatService } from './player-stat.service';
import { PlayerStatController } from './player-stat.controller';
import {PrismaModule} from "../../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [PlayerStatController],
  providers: [PlayerStatService],
})
export class PlayerStatModule {}
