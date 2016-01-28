import { RhelenaViewModel } from './vendors_modules/Rhelena'

export default class AppModel extends RhelenaViewModel{

  constructor() {
    super({simpleText : 'Simple text defined as Model!'});
  }

  changeSimpleText() {
    this.dataModel = {simpleText : 'New text: ' + Math.random()};
  }
}
