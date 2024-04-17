import { Component, computed, effect, signal } from '@angular/core'

@Component({
  selector: 'app-signals-effect',
  templateUrl: './signals-effect.component.html',
  styleUrl: './signals-effect.component.css',
  standalone: true,
  imports: [],
})
export class SignalsEffectComponent {
  value = signal(0)
  showAlert = computed(() => this.value() > 5)

  constructor() {
    effect(() => {
      if (this.showAlert()) {
        alert('Valor mayor a 5')
      }
    })
  }

  increase() {
    this.value.update(value => value + 1)
  }

  decrease() {
    this.value.update(value => value - 1)
  }
}
