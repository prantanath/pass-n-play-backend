import { Injectable } from '@nestjs/common';
import { CreateAdvancedTeamDto } from './dto/create-advanced-team.dto';
import { UpdateAdvancedTeamDto } from './dto/update-advanced-team.dto';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class AdvancedTeamService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAdvancedTeamDto) {
    return this.prisma.advancedTeam.create({ data: dto });
  }

  findAll() {
    return this.prisma.advancedTeam.findMany({
      include: {
        stage: true,
        team: true,
      },
    });
  }

  findByStage(stageId: string) {
    return this.prisma.advancedTeam.findMany({
      where: { stageId },
      include: {
        team: true,
      },
    });
  }

  update(id: string, dto: UpdateAdvancedTeamDto) {
    return this.prisma.advancedTeam.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.advancedTeam.delete({ where: { id } });
  }
}
