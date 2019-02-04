import {Item} from './item';
var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypescript', 1980);
aBook.say(elem);