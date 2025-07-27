import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class TeamsService {
    constructor(private prismaService: PrismaService) {
    }

    async create(data:{name:string,tournamentId:string}){
        return this.prismaService.team.create({data});
    }

    async findAllByTournament(tournamentId:string){
        return this.prismaService.team.findMany({
            where: {tournamentId:tournamentId},
            include: {players:true}
        });
    }

    async update(id:string,data:{name?: string}){
        return this.prismaService.team.update({where: {id:id},data});
    }

    async delete(id:string){
        return this.prismaService.team.delete({where:{id:id}});
    }
}
