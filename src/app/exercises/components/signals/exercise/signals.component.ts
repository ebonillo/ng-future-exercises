import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComponent {
  value = signal(0)
  decrease() {
    this.value.update(x => x - 1)
  }
  increment() {
    this.value.update(x => x + 1)
  }
  reset() {
    this.value.update(x => (x = 0))
  }
}
