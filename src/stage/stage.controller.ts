import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { StageService } from './stage.service';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import {RoleGuard} from "../auth/role.guard";
import {Roles} from "../auth/roles.decorator";
import {StageType} from "@prisma/client";

@Controller('stage')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @Post()
  @UseGuards(RoleGuard)
  @Roles('admin')
  create(@Body() createStageDto: CreateStageDto) {
    return this.stageService.create(createStageDto);
  }

  @Get('tournament/:tournamentId')
  findAllByTournament(@Param('tournamentId') tournamentId:string) {
    return this.stageService.findAllByTournament(tournamentId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<{ name: string; type: StageType; advanceCount: number }>) {
    return this.stageService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.stageService.delete(id);
  }
}
