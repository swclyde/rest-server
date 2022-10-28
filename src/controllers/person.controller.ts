import { Get, Route, Tags, Post, Body, Path, Put, Delete } from "tsoa";
import { Person } from '../models';
import { Persons } from '../repositories';

@Route("persons")
@Tags("person")
export default class PersonController {
  private persons: Persons = Persons.instance();

  @Get("/")
  public async getPersons(): Promise<Array<Person>> {
    return this.persons.list();
  }

  @Get("/:id")
  public async getPerson(@Path() id: string): Promise<Person | null> {
    return this.persons.get(Number(id));
  }

  @Post("/")
  public async createPerson(@Body() body: Person): Promise<Person> {
    return this.persons.create(body);
  }

  @Put("/:id")
  public async updatePerson(@Path() id: string, @Body() body: Person): Promise<boolean> {
    return this.persons.update(Number(id), body);
  }

  @Delete("/all")
  public async deleteAll(): Promise<boolean> {
    return this.persons.deleteAll();
  }

  @Delete("/:id")
  public async deletePerson(@Path() id: string): Promise<Person | null> {
    return this.persons.delete(Number(id));
  }


}