import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Country } from 'interfaces/interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/countries')
  getCountries(): Country[]{
    return this.appService.getCountries();
  }


}
