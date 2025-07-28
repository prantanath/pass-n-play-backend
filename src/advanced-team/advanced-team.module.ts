import { Module } from '@nestjs/common';
import { AdvancedTeamService } from './advanced-team.service';
import { AdvancedTeamController } from './advanced-team.controller';
import {PrismaModule} from "../../prisma/prisma.module";

@Module({
  imports:[PrismaModule],
  controllers: [AdvancedTeamController],
  providers: [AdvancedTeamService],
})
export class AdvancedTeamModule {}
