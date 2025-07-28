export class CreateMatchDto {
    stageId: string;
    groupId?: string;
    teamAId: string;
    teamBId: string;
    matchDate: Date;
    venue: string;
    scoreA?: number;
    scoreB?: number;
    status?: 'SCHEDULED' | 'LIVE' | 'COMPLETED';
}
