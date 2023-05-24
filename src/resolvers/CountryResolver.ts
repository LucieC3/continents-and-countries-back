import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Country } from '../entities/Country';
import { CountryInput } from '../inputs/CountryInput';
import { getRepository } from 'typeorm';


@Resolver()
export class CountryResolver {
  private countryRepository = getRepository(Country);

  @Mutation(() => Country)
  async addCountry(@Arg('data') data: CountryInput): Promise<Country> {
    const country = this.countryRepository.create(data);
    await this.countryRepository.save(country);
    return country;
  }

  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  @Query(() => Country)
  async country(@Arg('code') code: string): Promise<Country | undefined> {
    const country = await this.countryRepository.findOne({
      where: { code: code },
    });
    return country !== null ? country : undefined;
  }
}
