import { Person } from '../models';
export default class UserController {
    private persons;
    getPersons(): Promise<Array<Person>>;
    getPerson(id: string): Promise<Person | null>;
    createPerson(body: Person): Promise<Person>;
    updatePerson(body: Person): Promise<boolean>;
    deletePerson(id: string): Promise<Person | null>;
}
