import { Expose, Type } from "class-transformer";
import { CountryRdo } from "./country.rdo";
import { ApiProperty } from "@nestjs/swagger";

export class UserRdo {
    @ApiProperty()
    @Expose()
    id: string;

    @ApiProperty({description: 'Полное имя человека',})
    @Expose()
    name: string;

    @ApiProperty({description: 'Список стран, которые готов посетить человек',})
    @Expose()
    @Type(() => CountryRdo)
    countries: CountryRdo[];

    @ApiProperty({description: 'Предпочитаемые виды передвижения',})
    @Expose()
    transport: string[];

    @ApiProperty({description: 'Предпочитаемая музыка',})
    @Expose()
    music: string[];

    @ApiProperty({description: 'Предпочитаемая еда',})
    @Expose()
    meal: string;

    @ApiProperty({description: 'Список хобби',})
    @Expose()
    hobby: string[];

    @ApiProperty()
    @Expose()
    level: number;

    @ApiProperty({description: 'Список произвольных тегов',})
    @Expose()
    tags: string[];

    @ApiProperty({description: 'Количество лайков профиля',})
    @Expose()
    likes: number;
}