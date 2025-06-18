import { userCardGenerator } from "@data-generation/data-generation";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DEFAULT_CARDS_PER_PAGE } from "backendSettings/settings";
import { Country, User } from "interfaces/interfaces";
import { readFileSync } from "node:fs";
import { ItineraryDto } from "./dto/itinerary.dto";

@Injectable()
export class AppRepository {
    private users: User[] = []
    private countries: Country[] = []

    constructor() {
        const limit = 100;
        const countries = this.getCountries();
        this.users = userCardGenerator(limit, countries);
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getCountries(): Country[] {
        try {
            const data = readFileSync('libs/data-generation/src/countries.json', {encoding: 'utf8'});
            const countriesJson = <Record<string, Country>>JSON.parse(data);
            this.countries = [...Object.values(countriesJson)]   
            return this.countries; 
        } catch (err) {
            console.log('An error occured',  err);
            throw new InternalServerErrorException(err);
        } 
    }

    public saveItinerary(_dto: ItineraryDto): User[] {
        return this.users.slice(0, DEFAULT_CARDS_PER_PAGE)
    }

}