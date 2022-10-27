"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persons = void 0;
class Persons {
    constructor() {
        this._collection = {};
        this._nextId = 1;
    }
    create(person) {
        person.id = this._nextId;
        this._collection[this._nextId++] = person;
        return person;
    }
    get(id) {
        return this._collection[id] || null;
    }
    update(person) {
        if (!person || !person.id) {
            return false;
        }
        this._collection[person.id] = person;
        return true;
    }
    delete(id) {
        const person = this._collection[id] || null;
        delete this._collection[id];
        return person;
    }
    list() {
        return Object.values(this._collection);
    }
}
exports.Persons = Persons;
//# sourceMappingURL=persons.js.map