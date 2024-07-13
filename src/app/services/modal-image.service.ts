import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalImageService {

  private _hideModal: boolean = true;
  public img: string = '';

  constructor() { }

  get hideModal() {
    return this._hideModal;
  }

  showModal(img: string) {
    this.img = img;
    this._hideModal = false;
  }

  closeModal() {
    this._hideModal = true;
  }

}
