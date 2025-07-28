import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {CreateMatchDto} from "./dto/create-match.dto";
import {UpdateMatchDTO} from "./dto/update-match.dto";

@Injectable()
export class MatchesService {
    constructor(private prismaService: PrismaService) {
    }

    async create(data: CreateMatchDto){
        return this.prismaService.match.create({ data })
    }

    async findAllByStage(stageId:string){
        return this.prismaService.match.findMany({
            where: {stageId},
            include:{
                teamA:true,
                teamB:true,
                group:true,
            }
        })
    }

    async findOne(id: string) {
        return this.prismaService.match.findUnique({
            where: {id:id},
            include: {
                teamA:true,
                teamB:true,
                stage:true,
                group:true,
            }
        })
    }

    async update(id:string,data: UpdateMatchDTO){
        return this.prismaService.match.update({
            where: {id},
            data
        })
    }

    async delete(id:string){
        return this.prismaService.match.delete({where:{id:id}});
    }
}
