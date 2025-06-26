import { User } from "./user.interface";

export interface UsersWithPagaintion {
    entities: User[],
    totalPages: number,
    currentPage: number,
    totalItems: number,
    itemsPerPage: number,
}