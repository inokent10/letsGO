import { userCardGenerator } from "@data-generation/data-generation";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DEFAULT_CARDS_PER_PAGE, DEFAULT_PAGE_NUMBER } from "backendSettings/settings";
import { Country, User } from "interfaces/interfaces";
import { readFileSync } from "node:fs";
import { ItineraryDto } from "./dto/itinerary.dto";
import { AppQueryDto } from "./dto/app-query.dto";
import { UsersWithPagaintion } from "interfaces/interfaces/users-with-pagination.interface";

@Injectable()
export class AppRepository {
    private users: User[] = []
    private countries: Country[] = []

    constructor() {
        const limit = 100;
        const countries = this.getCountries();
        this.users = userCardGenerator(limit, countries);
    }

    private filterUsers(query: AppQueryDto): User[] {
        return this.users.filter((user) => {
            if (query['hobby[]'] && !user.hobby.some((item) => query['hobby[]']?.includes(item))) {                
                return false
            }
            if (query['music[]'] && !user.music.some((item) => query['music[]']?.includes(item))) {
                return false
            }
            if (query.meal && !(user.meal === query.meal)) {
                return false
            }
            if (query['transport[]'] && !user.transport.some((item) => query['transport[]']?.includes(item))) {
                return false
            }
            if (query.levelMin && !(user.level >= query.levelMin)) {
                return false
            }
            if (query.levelMax && !(user.level <= query.levelMax)) {
                return false
            }
            query['continent[]'] = query['continent[]']?.map((continent) => (continent === 'Острова' ? 'Океания' : continent)) 
            if (query['continent[]'] && !user.countries.some((item) => query['continent[]']?.includes(item.location))) {
                return false
            }
            if (query['country[]'] && !query['country[]'].every((item) => user.countries.map((country) => country.name).includes(item))) {
                return false
            }
            return true
        })
    }

    public getUsers(query?: AppQueryDto): UsersWithPagaintion {  
        const limit = query?.limit ?? DEFAULT_CARDS_PER_PAGE;
        const count = query?.count ?? limit ?? DEFAULT_CARDS_PER_PAGE;
        const page = query?.page ?? DEFAULT_PAGE_NUMBER;
        const take =  limit * page - count;
        const filteredUsers = (query) ? this.filterUsers(query) : this.users;
        const slicedUsers = filteredUsers.slice(take, limit * page);    

        return {
            entities: slicedUsers,
            totalPages: Math.ceil(filteredUsers.length / limit),
            currentPage: page,
            totalItems: filteredUsers.length,
            itemsPerPage: limit,
        }
    }

    public getCountries(): Country[] {
        try {
            const data = readFileSync('libs/data-generation/src/countries.json', {encoding: 'utf8'});
            const countriesJson = <Record<string, Country>>JSON.parse(data);
            this.countries = [...Object.values(countriesJson)]   
            return this.countries.slice(0, -2).filter((country) => (country.name.length < 20 && country.location !== 'Африка')); 
        } catch (err) {
            throw new InternalServerErrorException(err);
        } 
    }

    public saveItinerary(dto: ItineraryDto): UsersWithPagaintion {
        const countries = dto.itinerary.map((breakpoint) => breakpoint.country)
        const slicedFilteredUSers = this.getUsers({"country[]": countries});
        return slicedFilteredUSers;
    }

}