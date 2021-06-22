import { CreateElement } from './CreateElements';

export class BuildSelect {
  constructor(selectID) {
    this.parentClass = selectID;
    this.newElements = new CreateElement(selectID);

    this.newElements.init();
  }

}