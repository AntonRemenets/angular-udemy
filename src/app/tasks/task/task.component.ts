import { Component, Input } from '@angular/core'

interface Task {
  id: number
  userId: string
  title: string
  summary: string
  dueDate: string
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  standalone: true,
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
}
