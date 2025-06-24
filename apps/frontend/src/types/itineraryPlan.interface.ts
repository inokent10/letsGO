import { ItineraryBreakpoint } from './itinerary-breakpoint.interface';

export interface ItineraryPlan {
    tripmatesCount: number;
    tripDuration: number;
    isChildrenAccepted: boolean;
    startDate: string;
    finishDate: string;   
    itinerary: ItineraryBreakpoint[]
}