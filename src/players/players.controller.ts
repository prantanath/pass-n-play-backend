import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {PlayersService} from "./players.service";
import {RoleGuard} from "../auth/role.guard";
import {Roles} from "../auth/roles.decorator";

@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) {
    }

    @Post()
    @UseGuards(RoleGuard)
    @Roles('admin')
    create(@Body() body:{name:string;number:number;teamId:string}) {
        return this.playersService.create(body);
    }

    @Get(':teamId')
    getAllByTeam(@Param('teamId') teamId:string){
        return this.playersService.findAllByTeam(teamId);
    }

    @Patch(':id')
    @UseGuards(RoleGuard)
    @Roles('admin')
    update(@Param('id') id: string, @Body() body:{name?:string;number:number;}) {
        return this.playersService.update(id, body);
    }

    @Delete(':id')
    @UseGuards(RoleGuard)
    @Roles('admin')
    delete(@Param('id') id: string) {
        return this.playersService.delete(id);
    }
}
