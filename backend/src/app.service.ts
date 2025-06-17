import { Injectable } from '@nestjs/common';
import { Country } from 'interfaces/interfaces';
import fs from 'node:fs';

@Injectable()
export class AppService {
  
  public async getCountries(): Promise<Country[]> {
    let countries: Country[] = []
    await fs.readFile('libs/data-generation/src/countries.json', 'utf8', (err, data) => {
      if (err) {
        console.log('An error occured',  err);
      }
      const countriesJson = <Record<string, Country>>JSON.parse(data);
      countries = [...Object.values(countriesJson)]
    })
    return countries;
  }
}
