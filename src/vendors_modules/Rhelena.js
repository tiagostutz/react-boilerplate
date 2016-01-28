
export function  attachModelToView(modelInstance, viewInstance) {
  modelInstance.viewComponent = viewInstance;
  viewInstance.state = modelInstance.dataModel;
  viewInstance.viewModel = modelInstance;

  //Now we bind all of the ViewModels methods to its context.
  //http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
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

export class RhelenaViewModel {
  constructor(dataModelParam) {
    this.dataModel = dataModelParam;
    this.viewComponent = null;
  }

}

//get the initial Schema completed, even if the attributes of the objects are empty
RhelenaViewModel.prototype.getDataModelSample = function() { return this.dataModel; }

RhelenaViewModel.prototype.updateDataModel = function(newModel) {
  this.dataModel = newModel;
  this.viewComponent.setState(this.dataModel);
}
