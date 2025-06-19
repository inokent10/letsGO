import { Hobby, Meal, MusicStyle, USER_MAX_LEVEL, Vehicle } from "backendSettings/settings";
import { Transform } from "class-transformer";
import { IsIn, IsNumber, IsOptional, isString, IsString, Max } from "class-validator";

export class AppQueryDto {
  @IsOptional()
  @IsNumber()
  @Transform(({value}) => (parseInt(value)))
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({value}) => (parseInt(value)))
  count?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({value}) => (parseInt(value)))
  page?: number;
  
  @IsOptional()
  @IsString({each: true})
  @Transform(({value}): string[] => (isString(value) ? [value,] : value))
  @IsIn(Object.values(Hobby), {each: true})
  hobby?: string[];

  @IsOptional()
  @IsString({each: true})
  @Transform(({value}): string[] => (isString(value) ? [value,] : value))
  @IsIn(Object.values(MusicStyle), {each: true})
  music?: string[];

  @IsOptional()
  @IsString()
  @IsIn(Object.values(Meal))
  meal?: string;

  @IsOptional()
  @IsString({each: true})
  @Transform(({value}): string[] => (isString(value) ? [value,] : value))
  @IsIn(Object.values(Vehicle), {each: true})
  transport?: string[];

  @IsOptional()
  @IsNumber()
  @Max(USER_MAX_LEVEL - 1)
  @Transform(({value}) => (parseInt(value, 10)))
  levelMin?: number;

  @IsOptional()
  @IsNumber()
  @Max(USER_MAX_LEVEL)
  @Transform(({value}) => (parseInt(value, 10)))
  levelMax?: number;
}