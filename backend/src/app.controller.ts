import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { fillDto } from 'helpers/helpers';
import { CountryRdo } from './rdo/country.rdo';
import { ItineraryDto } from './dto/itinerary.dto';
import { UserRdo } from './rdo/user.rdo';

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


}
