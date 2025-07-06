/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Transform, Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsBoolean, IsDateString, IsNumber, ValidateNested } from "class-validator";
import { UserItineraryDto } from "./user-itinerary.dto";
import { ApiProperty } from "@nestjs/swagger";

export class ItineraryDto {
    @ApiProperty({description: 'Количество попутчиков',})
    @IsNumber()
    @Transform(({value}) => parseInt(value, 10))
    tripmatesCount: number;

    @ApiProperty({description: 'Продолжительность путешествия',})
    @IsNumber()
    @Transform(({value}) => parseInt(value, 10))
    tripDuration: number;

    @ApiProperty({description: 'Флаг с детьми или нет',})
    @IsBoolean()
    @Transform(({value}) => {
        if (value === 'true' || value === 'false') {
           return value === 'true' 
        }
        return value === true        
    })
    isChildrenAccepted: boolean;

    @ApiProperty({description: 'Дата отправки в формате ISO 8601',})
    @IsDateString()
    startDate: string;

    @ApiProperty({description: 'Дата окончания в формате ISO 8601',})
    @IsDateString()
    finishDate: string;

    @ApiProperty({description: 'План маршрута',})
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => UserItineraryDto)    
    itinerary: UserItineraryDto[]
}