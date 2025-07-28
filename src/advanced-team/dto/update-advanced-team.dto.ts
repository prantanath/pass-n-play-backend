import { PartialType } from '@nestjs/mapped-types';
import { CreateAdvancedTeamDto } from './create-advanced-team.dto';

export class UpdateAdvancedTeamDto extends PartialType(CreateAdvancedTeamDto) {}
