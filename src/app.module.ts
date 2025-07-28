import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { MatchesModule } from './matches/matches.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaService } from '../prisma/prisma.service';
import { StageModule } from './stage/stage.module';
import { GroupsModule } from './groups/groups.module';
import { AdvancedTeamModule } from './advanced-team/advanced-team.module';

@Module({
  imports: [
    TournamentsModule,
    TeamsModule,
    PlayersModule,
    MatchesModule,
    ProfileModule,
    StageModule,
    GroupsModule,
    AdvancedTeamModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
