import { Component, Input, input } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { HabitSolutionComponent } from '../_solution/habit.component'
import { HabitComponent } from '../habit.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'

@Component({
  selector: 'app-habit-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/habit/README.md" />
      <app-habit-solution solution habit="Meditar" />
      <app-habit user-solution name="Meditar" />
      <app-habit user-solution [text]="textVar" />
    </app-solution-component>
  `,
  imports: [SolutionComponent, HabitSolutionComponent, HabitComponent, MdComponent],
})
export class EventExercisePage {
  textVar = 'Esto es un valor de prueba'
  getMessage() {
    return 'Hola mundo'
  }
}
