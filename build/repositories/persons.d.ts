import { Person } from "../models";
export declare class Persons {
    private _collection;
    private _nextId;
    create(person: Person): Person;
    get(id: number): Person | null;
    update(person: Person): boolean;
    delete(id: number): Person | null;
    list(): Array<Person>;
}
