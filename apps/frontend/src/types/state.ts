import { Country } from './country.interface';
import { ItineraryPlan } from './itineraryPlan.interface';
import { Query } from './query.interface';
import { UsersWithPagaintion } from './users-with-pagination.interface';

export interface TripmatesState {
    countries: Country[] | null,
    userCards: UsersWithPagaintion | null,
    itineraryPlan: ItineraryPlan | null,
    query: Query    
}