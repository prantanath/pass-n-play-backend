import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class GroupsService {
  constructor(private prismaService: PrismaService) {
  }
  async create(createGroupDto: CreateGroupDto) {
    const { teams, ...rest } = createGroupDto;

    return this.prismaService.group.create({
      data: {
        ...rest,
        ...(teams && {
          teams: {
            connect: teams.map(id => ({ id })),
          },
        }),
      },
      include: {
        teams: true,
      },
    });
  }


  async findAllByStage(stageId: string) {
    return this.prismaService.group.findMany({
      where: {stageId},
      include: {
        teams:true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  async update(id: string, data: UpdateGroupDto) {
    return this.prismaService.group.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prismaService.group.delete({where:{id:id}});
  }
}
