import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() id: string = 'ID';
  @Input() title: string = 'Modal Title';
  @Input() data: string = 'Modal Data';

}
