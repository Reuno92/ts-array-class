import {RoomUsageList, SpecialObject} from "./ArrayUsageList";

const roomUsageList = new RoomUsageList();
const special = new SpecialObject();

const onSubmit = (value: any): void => {
    roomUsageList.roomList.push(value);
}

onSubmit(2);
onSubmit(3);
onSubmit(4);
onSubmit(8);
special.addItem({id: 0, name: "test"});
special.addItem({id: 1, name: "toto"});
special.addItem({id: 2, name: "titi"});
special.addItem({id: 3, name: "tata"});
special.addItem({id: 4, name: "tutu"});
special.addItem({id: 5, name: "sylvain"});
special.addItem({id: 6, name: "alexandre"});
special.addItem({id: 7, name: "renaud"});
special.array.map( x => onSubmit(x) );
special.reset();
special.addItems([{ id: 8, name: "Walid" }, { id: 9, name: "Reza" }, { id: 10, name: "Thomas T." }, { id: 11, name: "Thomas L." }, { id: 12, name: "Romain" }]);
special.array.map( x => onSubmit(x) );
special.reset();
console.log(roomUsageList); // 2,3,4,8, { id: 0, name: "TEST" }, { id: 10, name: "Romain" }...
