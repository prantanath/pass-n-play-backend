import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from '../profile/dto/create-tournament.dto';
import { Roles } from '../auth/roles.decorator';
import { RoleGuard } from '../auth/role.guard';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {
  }

  @Post()
  @UseGuards(RoleGuard)
  @Roles('admin')
  create(@Body() dto: CreateTournamentDto) {
    return this.tournamentsService.create(dto);
  }

  @Get()
  findAll() {
    return this.tournamentsService.findAll();
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  @Roles('admin')
  delete(@Param('id') id: string) {
    return this.tournamentsService.delete(id);
  }
}
