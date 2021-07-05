export class UsageList {

    public array : Array<UsageList>

    constructor () {
        this.array = new Array<UsageList>();
    }
}

export class InstanciatedArray<T> {

    public array : Array<T>

    constructor() {
        this.array = new Array<T>();
    }

    public addItem(value: T): void {
        this.array.push( value );
    }

    public addItems(values: Array<T>): void {
        this.array.push( ...values );
    }

    public reset(): void {
        this.array = new Array<T>();
    }

}
