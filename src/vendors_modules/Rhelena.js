/**
  * This function attaches a ViewModel instance to a ViewInstance
  */
export function  attachModelToView(modelInstance, viewInstance) {
  modelInstance.viewComponent = viewInstance;
  viewInstance.state = modelInstance;
  viewInstance.viewModel = modelInstance;

  /*
   * Now we bind all of the ViewModels methods to its context.
   * Reference: http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
   */
  var modelInstanceMethods = Object.getOwnPropertyNames( modelInstance.__proto__ );
  for (var i=0; i<modelInstanceMethods.length; i++) {
    var methodName = modelInstanceMethods[i];
    if (methodName == 'constructor') continue;

    if(typeof(modelInstance[methodName]) == 'function') {
      //if this binding is not done, the method cannot use the 'this' keyword
      modelInstance[methodName] = modelInstance[methodName].bind(modelInstance);
    }
  }
}

/**
  * The
  */
export class RhelenaViewModel {
  constructor(dataModelParam) {
    this._dataModel = dataModelParam;
    this.viewComponent = null;

    var _self = this;
    Object.keys(this._dataModel).forEach(function(propertyName) {

        Object.defineProperty(_self, propertyName, {
            set:  function(newValue) {
                    _self["_" + propertyName] = newValue;
                    var objState = {};
                    objState[propertyName] = this["_" + propertyName];
                    _self.viewComponent.setState( objState );
                  }
            ,
            get:  function() {
              return _self["_" + propertyName];
            }
        });

    });
  }

}
