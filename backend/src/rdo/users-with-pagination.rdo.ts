import { Expose, Type } from "class-transformer"
import { UserRdo } from "./user.rdo"
import { ApiProperty } from "@nestjs/swagger";

export class UsersWithPagaintionRdo {
    @ApiProperty({description: 'Список карточек',})
    @Expose()
    @Type(() => UserRdo)
    entities: UserRdo[];

    @ApiProperty({description: 'Общее количество страниц для выбранного лимита',})
    @Expose()
    totalPages: number;

    @ApiProperty({description: 'Текущая страница',})
    @Expose()
    currentPage: number;

    @ApiProperty({description: 'Общее количество карточек соответствующих фильтру',})
    @Expose()
    totalItems: number;

    @ApiProperty({description: 'Количество карточек на страницу',})
    @Expose()
    itemsPerPage: number;
}
