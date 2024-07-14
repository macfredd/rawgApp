import { Component } from '@angular/core';
import { ModalImageService } from '../../services/modal-image.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  constructor(private modalImageService: ModalImageService) {}

  get hideModal() {
    return this.modalImageService.hideModal;
  }

  get image() {
    return this.modalImageService.img[this.modalImageService.imgIndex];
  }

  get imageList() {
    return this.modalImageService.img;
  }

  get imageIndex() {
    return this.modalImageService.imgIndex;
  }

  nextImage() {
    this.modalImageService.imgIndex =
      (this.modalImageService.imgIndex + 1) % this.modalImageService.img.length;
  }

  prevImage() {
    this.modalImageService.imgIndex =
      (this.modalImageService.imgIndex - 1 + this.modalImageService.img.length) % this.modalImageService.img.length;
  }

  closeModal() {
    this.modalImageService.closeModal();
  }
}
