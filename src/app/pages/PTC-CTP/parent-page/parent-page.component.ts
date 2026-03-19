import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css'],
})
export class ParentPageComponent {
  parentMessage: any =
    'I am Nilasish Banerjee . I am practicing Angular parent to child communication.';
  messageFromChild = '';

  receiveMessage(event: string) {
    this.messageFromChild = event;
  }
}
