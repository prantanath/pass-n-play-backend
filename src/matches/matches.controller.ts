import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {MatchesService} from "./matches.service";
import {CreateMatchDto} from "./dto/create-match.dto";
import {UpdateMatchDTO} from "./dto/update-match.dto";
import {RoleGuard} from "../auth/role.guard";
import {Roles} from "../auth/roles.decorator";

@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) {}

    @Post()
    @UseGuards(RoleGuard)
    @Roles('admin')
    create(@Body() data: CreateMatchDto) {
        return this.matchesService.create(data);
    }

    @Get('stage/:stageId')
    findAllByStage(@Param('stageId') stageId: string) {
        return this.matchesService.findAllByStage(stageId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.matchesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdateMatchDTO) {
        return this.matchesService.update(id, data);
    }

    @Delete(':id')
    @UseGuards(RoleGuard)
    @Roles('admin')
    remove(@Param('id') id: string) {
        return this.matchesService.delete(id);
    }
}
