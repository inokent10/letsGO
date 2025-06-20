import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { Itinerary } from "interfaces/interfaces";

export class ItineraryRdo {
    @ApiProperty({description: 'Количество попутчиков',})
    @Expose()
    tripmatesCount: number;

    @ApiProperty({description: 'Продолжительность путешествия',})
    @Expose()
    tripDuration: number;

    @ApiProperty({description: 'Флаг с детьми или нет',})
    @Expose()
    isChildrenAccepted: boolean;

    @ApiProperty({description: 'Дата отправки в формате ISO 8601',})
    @Expose()
    startDate: string;

    @ApiProperty({description: 'Дата окончания в формате ISO 8601',})
    @Expose()
    finishDate: string;

    @ApiProperty({description: 'План маршрута',})
    @Expose()
    itinerary: Itinerary[]
}