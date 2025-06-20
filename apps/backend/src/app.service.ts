import { BadRequestException, Injectable} from '@nestjs/common';
import { Country, User } from 'interfaces/interfaces';
import { ItineraryDto } from './dto/itinerary.dto';
import { AppRepository } from './app.repository';
import *  as dayjs from 'dayjs';
import { AppQueryDto } from './dto/app-query.dto';
import { UsersWithPagaintion } from 'interfaces/interfaces/users-with-pagination.interface';

@Injectable()
export class AppService {

  constructor(
    private readonly repository: AppRepository
  ) {

  }
  
  public getCountries(): Country[] {
    return this.repository.getCountries();
      
  }

  private validateItinerary(dto: ItineraryDto): [boolean, string[]] {
    const messages: string[] = []
    let status: boolean = true;
    if (dayjs(dto.startDate).isBefore(dayjs(Date.now()))) {
      status = false;
      messages.push('Дата начала путешествия уже наступила или уже в прошлом')
    }
    if (dayjs(dto.startDate).isAfter(dto.finishDate)) {
      status = false;
      messages.push('Дата начала путешествия не должна быть позже даты окончания')
    }
    if (dayjs(dto.finishDate).diff(dayjs(dto.startDate), 'day') !== dto.tripDuration) {
      status = false;
      messages.push('Указанная продолжительность путешествия не соответствует выбранным датам')
    }
    return [status, messages]
  }

  public saveItinerary(dto: ItineraryDto): User[] {
    const result = this.validateItinerary(dto);
    if (!result.at(0)) {
      throw new BadRequestException(result.at(1))
    }
    return this.repository.saveItinerary(dto);
  }

  public getUserCards(query?: AppQueryDto): UsersWithPagaintion {
    return this.repository.getUsers(query);
  }
}
