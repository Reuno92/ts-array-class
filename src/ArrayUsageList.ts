export class RoomUsageList {

    public roomList : Array<RoomUsageList>

    constructor () {
        this.roomList = new Array<RoomUsageList>();
    }
}

export class SpecialObject<T> {

    public array : Array<T>

    constructor() {
        this.array = new Array<T>();
    }

    public addItem(value: T): void {
        this.array.push(value);
    }

    public addItems(values: Array<T>): void {
        this.array.push( ...values );
    }

    public reset(): void {
        this.array = new Array<T>();
    }

}
