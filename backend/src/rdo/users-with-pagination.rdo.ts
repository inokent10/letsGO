import { Expose, Type } from "class-transformer"
import { UserRdo } from "./user.rdo"

export class UsersWithPagaintionRdo {
    @Expose()
    @Type(() => UserRdo)
    entities: UserRdo[];

    @Expose()
    totalPages: number;

    @Expose()
    currentPage: number;

    @Expose()
    totalItems: number;

    @Expose()
    itemsPerPage: number;
}
