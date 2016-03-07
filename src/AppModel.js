import { RhelenaPresentationModel } from './vendors_modules/Rhelena'

export default class AppModel extends RhelenaPresentationModel{


    constructor() {
        super();
        this.simpleText = '0.000';
        this.booksList = {};
        this.searchText = "";
     }

     changeSimpleText() {
         this.simpleText = 'New text: ' + Math.random();
     }
}
