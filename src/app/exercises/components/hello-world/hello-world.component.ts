import { Component } from '@angular/core'

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `<h1 class="hello">Hello world</h1>`,
  styles: `
    .hello {
      color: var(--primary-color);
    }
  `,
})
export class HelloWorldComponent {}
