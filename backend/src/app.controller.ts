import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { fillDto } from 'helpers/helpers';
import { CountryRdo } from './rdo/country.rdo';
import { ItineraryDto } from './dto/itinerary.dto';
import { UserRdo } from './rdo/user.rdo';
import { AppQueryDto } from './dto/app-query.dto';
import { UsersWithPagaintionRdo } from './rdo/users-with-pagination.rdo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/countries')
  getCountries() {
    const countries = this.appService.getCountries()
    return fillDto(CountryRdo, countries);
  }

  @Post('/itinerary')
  uploadItinerary(@Body() dto: ItineraryDto) {
    const users = this.appService.saveItinerary(dto);
    return fillDto(UserRdo, users);
  }

  @Get('/catalog')
  showUsersCards(@Query() query?: AppQueryDto) {
    const paginatedUsers = this.appService.getUserCards(query);
    return fillDto(UsersWithPagaintionRdo, paginatedUsers);
  }


}
