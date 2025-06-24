import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { fillDto } from 'helpers/helpers';
import { CountryRdo } from './rdo/country.rdo';
import { ItineraryDto } from './dto/itinerary.dto';
import { UserRdo } from './rdo/user.rdo';
import { AppQueryDto } from './dto/app-query.dto';
import { UsersWithPagaintionRdo } from './rdo/users-with-pagination.rdo';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('http://localhost:5000')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: 200, description: 'Отправлен список стран', type: CountryRdo})
  @Get('/countries')
  getCountries() {
    const countries = this.appService.getCountries()
    return fillDto(CountryRdo, countries);
  }

  @ApiResponse({ status: 201, description: 'План маршрута успешно сохранён', type: UserRdo})
  @ApiResponse({ status: 400, description: 'Ошибка валидации отправленных данных'})
  @ApiBody({ type: ItineraryDto })
  @Post('/itinerary')
  uploadItinerary(@Body() dto: ItineraryDto): UserRdo {
    const users = this.appService.saveItinerary(dto);
    return fillDto(UserRdo, users);
  }

  @ApiResponse({ status: 200, description: 'Отправлен список карточек', type: UsersWithPagaintionRdo})
  @ApiResponse({ status: 400, description: 'Ошибка валидации фильтров'})
  @Get('/catalog')
  showUsersCards(@Query() query?: AppQueryDto) {
    const paginatedUsers = this.appService.getUserCards(query);
    return fillDto(UsersWithPagaintionRdo, paginatedUsers);
  }
}
