import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalImageService {
  private _hideModal: boolean = true;
  public img: string = '';

  get hideModal() {
    return this._hideModal;
  }

  showModal(img: string) {
    console.log(img);
    this.img = img;
    this._hideModal = false;
  }

  closeModal() {
    this._hideModal = true;
  }
}
