/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ApiProperty } from "@nestjs/swagger";
import { Hobby, Meal, MusicStyle, USER_MAX_LEVEL, Vehicle } from "backendSettings/settings";
import { Transform } from "class-transformer";
import { IsIn, IsNumber, IsOptional, IsString, Max } from "class-validator";

export class AppQueryDto {
  @ApiProperty({
      description: 'Количество карточек на странице',
      default: 4
  })  
  @IsOptional()
  @IsNumber()
  @Transform(({value}) => (parseInt(value)))
  limit?: number;

  @ApiProperty({description: 'Количество запрашиваемых карточек',
                default: 'Совпадает с limit'
  })
  @IsOptional()
  @IsNumber()
  @Transform(({value}) => (parseInt(value)))
  count?: number;

  @ApiProperty({description: 'Номер страницы',
                default: 1
  })
  @IsOptional()
  @IsNumber()
  @Transform(({value}) => (parseInt(value)))
  page?: number;

  @ApiProperty({description: 'Список или строка с указанием хобби',})
  @IsOptional()
  @IsString({each: true})
  @Transform(({value}) => typeof value === 'string' ? [value] : [...value])
  @IsIn(Object.values(Hobby), {each: true})
  'hobby[]'?: string[];

  @ApiProperty({description: 'Список или строка с указанием предпочитаемого стиля музыки',})
  @IsOptional()
  @IsString({each: true})
  @Transform(({value}) => typeof value === 'string' ? [value] : [...value])
  @IsIn(Object.values(MusicStyle), {each: true})
  'music[]'?: string[];

  @ApiProperty({description: 'Предпочитаемый тип питания',})
  @IsOptional()
  @IsString()
  @IsIn(Object.values(Meal))
  meal?: string;

  @ApiProperty({description: 'Список или строка с указанием возможных способов передвижения',})
  @IsOptional()
  @IsString({each: true})
  @Transform(({value}) => typeof value === 'string' ? [value] : [...value])
  @IsIn(Object.values(Vehicle), {each: true})
  'transport[]'?: string[];

  @ApiProperty({description: 'Список с указанием выбранных стран',})
  @IsOptional()
  @Transform(({value}) => typeof value === 'string' ? [value] : [...value])
  @IsString({each: true})
  'country[]'?: string[];

  @ApiProperty({description: 'Список с указанием выбранных континентов',})
  @IsOptional()
  @Transform(({value}) => typeof value === 'string' ? [value] : [...value])
  @IsString({each: true})
  'continent[]'?: string[];

  @ApiProperty({description: 'Минимальный уровень. Значение не больше 100',})
  @IsOptional()
  @IsNumber()
  @Max(USER_MAX_LEVEL)
  @Transform(({value}) => (parseInt(value, 10)))
  levelMin?: number;

  @ApiProperty({description: 'Максимальный уровень. Значение не больше 100',})
  @IsOptional()
  @IsNumber()
  @Max(USER_MAX_LEVEL)
  @Transform(({value}) => (parseInt(value, 10)))
  levelMax?: number;
}