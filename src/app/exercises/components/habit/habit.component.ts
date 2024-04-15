import { Component, input } from '@angular/core'

@Component({
  selector: 'app-habit',
  styleUrl: './habit.component.css',
  templateUrl: './habit.component.html',
  standalone: true,
  imports: [],
})
export class HabitComponent {
  name = input('Unknown')
  text = input('Unknown')

  getClasses() {
    let classes: string[] = []
    if (this.text().length > 5) classes.push('more-than-5-chars')
    if (this.text().toLocaleLowerCase().endsWith('a')) classes.push('start-with-a')
    return classes
  }
}
