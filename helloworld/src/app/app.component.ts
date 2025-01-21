import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  condition=true;
  number=123;
  source="assets/image.png";
  nameListe=['Ahmed', 'Imen','Ali'];
}
