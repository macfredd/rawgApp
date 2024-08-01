import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ModalImageService {
  private _hideModal: boolean = true;
  public img: string[] = [];
  public imgIndex: number = 0;

  get hideModal() {
    return this._hideModal;
  }

  showModal(img: string[] | string, index: number = 0) {
    if (Array.isArray(img)) {
      this.img = img;
    } else {
      this.img = [img];
    }
    this.imgIndex = index;
    this._hideModal = false;
  }

  closeModal() {
    this._hideModal = true;
  }
}
