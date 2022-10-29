import { Person } from "../models";

export class Persons {
    private static _instance: Persons;
    private _collection: { [id : string] : Person } = {};
    private _nextId: number = 1;

    public static instance() : Persons {
        if (!Persons._instance) {
            Persons._instance = new Persons();
        }
        return Persons._instance;
    }

    public create(person: Person) : Person {
        person.id = this._nextId;
        this._collection[this._nextId++] = person;    
        return person;
    }

    public get(id: number) : Person | null {
        return this._collection[id] || null;
    }

    public update(id: number, person: Person) : boolean {
        if (id==0 || !person || (!!person.id && id != person.id)) {            
            return false;
        }
        person.id = id;
        this._collection[id] = person;
        return true;
    }

    public deleteAll() : boolean {
        this._collection = {};
        this._nextId = 1;
        return true;
    }

    public delete(id: number) : Person | null {
        if (id == 0) {
            return null;
        }        
        const person = this._collection[id] || null;
        delete this._collection[id];
        return person;
    }

    public list() : Array<Person> {
        return Object.values(this._collection);
    }

}