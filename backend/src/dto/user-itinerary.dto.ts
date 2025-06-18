import { Optional } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class UserItineraryDto {
    @IsString()
    country: string;

    @IsString()
    @Optional()
    description: string;

    @IsNumber()
    @Transform(({value}) => parseInt(value, 10))
    position: number;
}