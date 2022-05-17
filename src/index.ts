import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//string sort
const characterCollection = new CharactersCollection('hello');
characterCollection.sort();
console.log(characterCollection.data);

//number array sort
const numbersCollection = new NumbersCollection([8, 7, 9, 2, 5, -2]);
numbersCollection.sort();
console.log(numbersCollection.data);

//linked list sort
let link = new LinkedList();
link.add(200);
link.add(-5);
link.add(39);
link.sort();
console.log(link);
