import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-todo-list';

  public items: string[] = [];
  public newTask: string = '';

  public addToList() {
    if (this.newTask.trim()) {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }
  
}
