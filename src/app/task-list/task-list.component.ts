import { Component, inject } from '@angular/core';
import { TasksService } from '../shared/services/tasks.service';
import { IconButtonDirective } from '../shared/directives/icon-button.directive';
import { DatePipe } from '@angular/common';

@Component({
	standalone: true,
	selector: 'app-task-list',
	imports: [IconButtonDirective, DatePipe],
	template: `
		<div class="shadow rounded overflow-hidden">
			@for(task of tasks(); track $index){
			<div class="flex items-center p-4 gap-4 border-b text-neutral-900 bg-neutral-100 last:border-b-0">
				<input type="checkbox" name="check-all" id="check-all" class="peer" [checked]="task.done" />
				<span class="flex-1 text-xl font-medium transition-colors peer-checked:line-through peer-checked:text-neutral-500">
					{{ task.title }}
				</span>
				<button appIconButton>delete</button>
			</div>
			}
		</div>
	`,
	styles: ``,
})
export class TaskListComponent {
	private _tasksService = inject(TasksService);
	tasks = this._tasksService.tasks;
}
