
export function  attachModelToView(modelInstance, viewInstance) {
  modelInstance.setViewComponent(viewInstance);
  viewInstance.state = modelInstance.getDataModel();
  viewInstance.viewModel = modelInstance;
}

export class RhelenaViewModel {
  constructor(dataModelParam) {
    this.dataModel = dataModelParam;
    this.viewComponent = null;
  }

  //get the initial Schema completed, even if the attributes of the objects are empty
  getDataModelSample() { return this.dataModel; }

  updateDataModel(newModel) {
    this.dataModel = newModel;
    this.viewComponent.setState(this.dataModel);
  }

  getDataModel() {
    return this.dataModel;
  }
  setViewComponent(viewComponentInstance) {
    this.viewComponent = viewComponentInstance;
  }

}
