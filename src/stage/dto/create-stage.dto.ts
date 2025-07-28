import {StageType} from "@prisma/client";

export class CreateStageDto {
    name: string;
    type:StageType;
    tournamentId: string;
    advanceCount?: number;
}
