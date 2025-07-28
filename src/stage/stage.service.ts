import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import {PrismaService} from "../../prisma/prisma.service";
import {StageType} from "@prisma/client";

@Injectable()
export class StageService {
  constructor(private prismaService: PrismaService) {
  }
  async create(createStageDto: CreateStageDto) {
    return this.prismaService.stage.create({
      data: createStageDto
    });

  }

  async findAllByTournament(tournamentId: string) {
    return this.prismaService.stage.findMany({
      where: {tournamentId},
      include: {
        groups:true,
        matches:true,
        advancedTeams:true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} stage`;
  }

  async update(id: string, data: Partial<{ name: string; type: StageType; advanceCount: number }>) {
    return this.prismaService.stage.update({
      where:{id},
      data
    })
  }

  async delete(id: string) {
    return this.prismaService.stage.delete({where:{id:id}});
  }
}
