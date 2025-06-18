import { Expose, Type } from "class-transformer";
import { ItineraryRdo } from "./itinerary.rdo";
import { CountryRdo } from "./country.rdo";

export class UserRdo {
    @Expose()
    id: string;

    @Expose()
    name: string;

    @Expose()
    @Type(() => CountryRdo)
    countries: CountryRdo[];

    @Expose()
    transport: string[];

    @Expose()
    music: string[];

    @Expose()
    meal: string;

    @Expose()
    hobby: string[];

    @Expose()
    level: number;

    @Expose()
    tags: string[];

    @Expose()
    likes: number;

    @Expose()
    @Type(() => ItineraryRdo)
    itineraryRequest: ItineraryRdo
}