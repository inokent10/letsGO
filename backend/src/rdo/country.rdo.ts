import { Expose } from "class-transformer";

export class CountryRdo {
    @Expose()
    name: string;

    @Expose()
    location: string;
}