import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsComponent {
  errorMessage = ''
  habits: { habit: string; date: Date }[] = []
  habitForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  handleSubmit() {
    if (this.habitForm.status === 'INVALID') {
      this.errorMessage = 'El nombre del hábito debe tener, al menos, 2 letras'
      return
    }
    this.errorMessage = ''
    const newHabit: { habit: string; date: Date } = {
      habit: this.habitForm.value.name!,
      date: new Date(),
    }
    this.habits = [...this.habits, newHabit]
    this.habitForm.reset()
  }
}
