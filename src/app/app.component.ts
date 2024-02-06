import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} <h1><mat-icon>favorite</mat-icon> Hello, with a Material icon!</h1> </div>`,
})
export class AppComponent {
  value = 'World JESUS CHRIST';
}
