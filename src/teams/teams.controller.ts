import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {TeamsService} from "./teams.service";
import {RoleGuard} from "../auth/role.guard";
import {Roles} from "../auth/roles.decorator";

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Post()
    @UseGuards(RoleGuard)
    @Roles('admin')
    create(@Body() body: {name:string;tournamentId:string}) {
        return this.teamsService.create(body);
    }

    @Get(':tournamentId')
    getAll(@Param('tournamentId') tournamentId: string) {
        return this.teamsService.findAllByTournament(tournamentId);
    }

    @Patch(':id')
    @UseGuards(RoleGuard)
    @Roles('admin')
    update(@Param('id') id: string, @Body() body:{name?:string}) {
        return this.teamsService.update(id, body);
    }

    @Delete(':id')
    @UseGuards(RoleGuard)
    @Roles('admin')
    delete(@Param('id') id: string) {
        return this.teamsService.delete(id);
    }

}
