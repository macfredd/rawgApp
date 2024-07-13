import { Component, Input } from '@angular/core';
import { ModalImageService } from '../../services/modal-image.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css'
})
export class ImageViewerComponent {


  constructor(private modalImageService: ModalImageService) { }

  get hideModal() {
    return this.modalImageService.hideModal;
  }

  getImage() {
    return this.modalImageService.img;
  }

  closeModal() {
    this.modalImageService.closeModal();
  }
}