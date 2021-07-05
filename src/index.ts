import {UsageList, InstanciatedArray} from "./ArrayUsageList";

const list = new UsageList();
const operatedList = new InstanciatedArray();

const onSubmit = (value: any): void => {
    list.array.push(value);
}

onSubmit(2);
onSubmit(3);
onSubmit(4);
onSubmit(8);
operatedList.addItem({id: 0, name: "test"});
operatedList.addItem({id: 1, name: "toto"});
operatedList.addItem({id: 2, name: "titi"});
operatedList.addItem({id: 3, name: "tata"});
operatedList.addItem({id: 4, name: "tutu"});
operatedList.addItem({id: 5, name: "sylvain"});
operatedList.addItem({id: 6, name: "alexandre"});
operatedList.addItem({id: 7, name: "renaud"});
operatedList.array.map( x => onSubmit(x) );
operatedList.reset();
operatedList.addItems([{ id: 8, name: "Walid" }, { id: 9, name: "Reza" }, { id: 10, name: "Thomas T." }, { id: 11, name: "Thomas L." }, { id: 12, name: "Romain" }]);
operatedList.array.map( x => onSubmit(x) );
operatedList.reset();
console.log(list); // 2,3,4,8, { id: 0, name: "TEST" }, { id: 10, name: "Romain" }...
