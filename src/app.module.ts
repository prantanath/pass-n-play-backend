import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { MatchesModule } from './matches/matches.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    TournamentsModule,
    TeamsModule,
    PlayersModule,
    MatchesModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
