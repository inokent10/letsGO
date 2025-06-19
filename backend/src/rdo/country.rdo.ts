import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CountryRdo {
    @ApiProperty({description: 'Название страны',})
    @Expose()
    name: string;

    @ApiProperty({description: 'Континент',})
    @Expose()
    location: string;
}