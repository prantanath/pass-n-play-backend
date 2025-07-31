import { Injectable } from '@nestjs/common';
import { CreatePlayerStatDto } from './dto/create-player-stat.dto';
import { UpdatePlayerStatDto } from './dto/update-player-stat.dto';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class PlayerStatService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePlayerStatDto) {
    return this.prisma.playerStat.create({
      data: {
        ...dto,
        goals: dto.goals || 0,
        assists: dto.assists || 0,
      },
    });
  }

  findAll(){
    return this.prisma.playerStat.findMany({
      include:{
        Player:true,
        Match:true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.playerStat.findUnique({
      where: {id:id},
      include: {Player:true,Match:true}
    })
  }

  update(id: string, data: UpdatePlayerStatDto) {
    return this.prisma.playerStat.update({
      where: {id},
      data: data
    })
  }

  remove(id: string) {
    return this.prisma.playerStat.delete({where: {id:id}});
  }


  async getStatsByMatchId(matchid: string) {
    return this.prisma.playerStat.findMany({
      where: { matchid },
      include: {
        Player: true,
        Match: true
      }
    });
  }


  // 🏆 Top scorers
  async getTopScorers(limit = 10) {
    const stats = await  this.prisma.playerStat.groupBy({
      by: ['playerid'],
      _sum: { goals: true },
      orderBy: { _sum: { goals: 'desc' } },
      take: limit,
    });
    const players = await this.prisma.player.findMany({
      where: {
        id: { in: stats.map(stat => stat.playerid) },
      },
      include: { team: true },
    });

    return stats.map(stat => {
      const player = players.find(p => p.id === stat.playerid);
      return {
        playerId: stat.playerid,
        totalGoals: stat._sum.goals,
        playerName: player?.name,
        teamName: player?.team?.name,
      };
    });
  }

  // 🎯 Top assist providers
  async getTopAssists(limit = 10) {
    const stats = await this.prisma.playerStat.groupBy({
      by: ['playerid'],
      _sum: { assists: true },
      orderBy: { _sum: { assists: 'desc' } },
      take: limit,
    });

    const players = await this.prisma.player.findMany({
      where: {
        id: { in: stats.map(stat => stat.playerid) },
      },
      include: { team: true },
    });

    return stats.map(stat => {
      const player = players.find(p => p.id === stat.playerid);
      return {
        playerId: stat.playerid,
        totalAssists: stat._sum.assists,
        playerName: player?.name,
        teamName: player?.team?.name,
      };
    });
  }

}
