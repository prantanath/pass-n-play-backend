import {PartialType} from "@nestjs/mapped-types";
import {CreateMatchDto} from "./create-match.dto";

export class UpdateMatchDTO extends PartialType(CreateMatchDto) {
    matchDate?: Date;
    venue?: string;
    scoreA?: number;
    scoreB?: number;
    status?: 'SCHEDULED' | 'LIVE' | 'COMPLETED';
}
