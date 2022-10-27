export class Person {
    private _id?: number;
    private _firstName?: string;
    private _lastName?: string;
    private _favoriteColor?: string;
    private _birthYear?: number;

    public get id(): number | undefined {
        return this._id;
    }

    public set id(value: number | undefined) {
        this._id = value;
    }

    public get firstName(): string | undefined {
        return this._firstName;
    }

    public set firstName(value: string | undefined) {
        this._firstName = value;
    }

    public get lastName(): string | undefined {
        return this._lastName;
    }

    public set lastName(value: string | undefined) {
        this._lastName = value;
    }

    public get favoriteColor(): string | undefined {
        return this._favoriteColor;
    }

    public set favoriteColor(value: string | undefined) {
        this._favoriteColor = value;
    }

    public get birthYear(): number | undefined {
        return this._birthYear;
    }

    public set birthYear(value: number | undefined) {
        this._birthYear = value;
    }

}