/* Этот компонент написан на сигналах */
import { Component, computed, input } from '@angular/core'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  avatar = input.required<string>()
  name = input.required<string>()

  imagePath = computed(() => {
    return  'assets/users/' + this.avatar()
  })

  onSelectUser() {
  }
}
