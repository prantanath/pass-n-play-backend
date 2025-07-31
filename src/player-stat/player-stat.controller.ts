import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { PlayerStatService } from './player-stat.service';
import { CreatePlayerStatDto } from './dto/create-player-stat.dto';
import { UpdatePlayerStatDto } from './dto/update-player-stat.dto';

@Controller('player-stat')
export class PlayerStatController {
  constructor(private readonly playerStatService: PlayerStatService) {}

  @Post()
  create(@Body() createPlayerStatDto: CreatePlayerStatDto) {
    return this.playerStatService.create(createPlayerStatDto);
  }

  @Get()
  findAll() {
    return this.playerStatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerStatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerStatDto: UpdatePlayerStatDto) {
    return this.playerStatService.update(id, updatePlayerStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerStatService.remove(id);
  }

  @Get('match/:matchId')
  getByMatchId(@Param('matchId') matchId: string) {
    return this.playerStatService.getStatsByMatchId(matchId);
  }

  // 🏆 Top Scorers
  @Get('summary/top-scorers')
  getTopScorers(@Query('limit') limit?: string) {
    return this.playerStatService.getTopScorers(Number(limit) || 10);
  }

  // 🎯 Top Assists
  @Get('summary/top-assists')
  getTopAssists(@Query('limit') limit?: string) {
    return this.playerStatService.getTopAssists(Number(limit) || 10);
  }
}
