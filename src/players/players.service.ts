import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class PlayersService {
    constructor(private prismaService: PrismaService) {
    }

    async create(data:{name:string;number:number;teamId:string}){
        return this.prismaService.player.create({data:data});
    }

    async findAllByTeam(teamId:string){
        console.log('team id',teamId);
        const players = await this.prismaService.player.findMany({
            where: {
                teamId: teamId,
            },
        });
        console.log('players', players);
        return players;
    }

    async update(id:string,data:{name?: string;number?:number}){
        return this.prismaService.player.update({where: {id:id},data});
    }

    async delete(id:string){
        return this.prismaService.player.delete({where:{id:id}});
    }
}
