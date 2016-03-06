import { RhelenaPresentationModel } from './vendors_modules/Rhelena'

export default class AppModel extends RhelenaPresentationModel{


    constructor() {
        super(
            {
              simpleText : 'Simple text defined as Model!',
              booksList : {},
              searchText : ""
            }
         );
     }

     changeSimpleText() {
         this.simpleText = 'New text: ' + Math.random();
     }
}
