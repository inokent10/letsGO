import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UserItineraryDto {
    @ApiProperty({description: 'Название страны для посещения',})
    @IsString()
    country: string;

    @ApiProperty({description: 'Описание плана путешествия',})
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({description: 'Порядковый номер страны в выбранном маршруте',})
    @IsNumber()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    @Transform(({value}) => parseInt(value, 10))
    position: number;
}