import { Component, computed, signal } from '@angular/core'

@Component({
  selector: 'app-signals-computed',
  templateUrl: './signals-computed.component.html',
  styleUrl: './signals-computed.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComputedComponent {
  value = signal(0)
  double = computed(() => this.value() * 2)

  reset() {
    this.value.set(0)
  }

  increase() {
    this.value.update(value => value + 1)
  }

  decrease() {
    this.value.update(value => value - 1)
  }
}
