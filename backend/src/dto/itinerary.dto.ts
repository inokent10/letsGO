import { Transform, Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsBoolean, IsDateString, IsNumber, ValidateNested } from "class-validator";
import { UserItineraryDto } from "./user-itinerary.dto";

export class ItineraryDto {
    @IsNumber()
    @Transform(({value}) => parseInt(value, 10))
    tripmatesCount: number;

    @IsNumber()
    @Transform(({value}) => parseInt(value, 10))
    tripDuration: number;

    @IsBoolean()
    @Transform(({value}) => {
        if (value === 'true' || value === 'false') {
           return value === 'true' 
        }        
    })
    isChildrenAccepted: boolean;

    @IsDateString()
    startDate: string;

    @IsDateString()
    finishDate: string;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => UserItineraryDto)    
    itinerary: UserItineraryDto[]
}