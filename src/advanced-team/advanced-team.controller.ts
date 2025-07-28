import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { AdvancedTeamService } from './advanced-team.service';
import { CreateAdvancedTeamDto } from './dto/create-advanced-team.dto';
import { UpdateAdvancedTeamDto } from './dto/update-advanced-team.dto';
import {RoleGuard} from "../auth/role.guard";
import {Roles} from "../auth/roles.decorator";

@Controller('advanced-team')
export class AdvancedTeamController {
  constructor(private readonly service: AdvancedTeamService) {}

  @Post()
  @UseGuards(RoleGuard)
  @Roles('admin')
  create(@Body() dto: CreateAdvancedTeamDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('stage/:stageId')
  findByStage(@Param('stageId') stageId: string) {
    return this.service.findByStage(stageId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAdvancedTeamDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
