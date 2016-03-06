/**
  * This function attaches a PresentationModel instance to a ViewInstance
  */
export function  attachModelToView(presentationModelInstance, viewInstance) {
    presentationModelInstance.viewComponent = viewInstance;

    //initialize state
    viewInstance.state = presentationModelInstance._dataModel;
    if (typeof(viewInstance.actions) === "undefined" || viewInstance.actions==null) {
        viewInstance.actions = {};
    }

  /*
   * Now we bind all of the PresentationModels methods to its context and separate State and Actions
   * Reference: http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
   */
  let presentationModelMethods = Object.getOwnPropertyNames( presentationModelInstance.__proto__ );
  for (let i=0; i<presentationModelMethods.length; i++) {
      let propertyName = presentationModelMethods[i];

      if (propertyName == 'constructor') continue;

        if(typeof(presentationModelInstance[propertyName]) == 'function') {
          //if this binding is not done, the method cannot use the 'this' keyword
          //create proxies
          presentationModelInstance[propertyName].bind(presentationModelInstance)
          viewInstance.actions[propertyName] = function(){presentationModelInstance[propertyName]()};
      }
  }
}

/**
  * The RhelenaPresentationModel attaches the dataModel passed through constructor to the instance itself
  * so that the State of the View React Component has the same properties as the ViewModel and
  */
export class RhelenaPresentationModel {
    constructor(dataModelParam) {
        this._dataModel = dataModelParam;
        this.viewComponent = null;

        let _self = this;
        Object.keys(this._dataModel).forEach(function(propertyName) {

            Object.defineProperty(_self, propertyName, {
                set:  function(newValue) {
                        _self["_" + propertyName] = newValue;
                        let objState = {};
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
