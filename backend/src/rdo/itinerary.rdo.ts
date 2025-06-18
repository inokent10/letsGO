import { Expose } from "class-transformer";
import { Itinerary } from "interfaces/interfaces";

export class ItineraryRdo {
    @Expose()
    tripmatesCount: number;

    @Expose()
    tripDuration: number;

    @Expose()
    isChildrenAccepted: boolean;

    @Expose()
    startDate: string;

    @Expose()
    finishDate: string;

    @Expose()
    itinerary: Itinerary[]
}