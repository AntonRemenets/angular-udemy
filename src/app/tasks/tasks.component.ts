import { Component, Input } from '@angular/core'
import { TaskComponent } from './task/task.component'

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  standalone: true,
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  tasks = [
    {
      id: 1,
      userId: 'u1',
      title: 'Task 1',
      summary: 'Done',
      dueDate: '2025-12-20'
    },
    {
      id: 2,
      userId: 'u2',
      title: 'Task 2',
      summary: 'Adidas',
      dueDate: '2025-10-20'
    },
    {
      id: 3,
      userId: 'u4',
      title: 'Task 6',
      summary: 'Adidas buy',
      dueDate: '2025-10-20'
    },
  ]

  get selectedUserTasks () {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
