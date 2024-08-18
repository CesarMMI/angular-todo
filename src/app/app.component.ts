import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
	standalone: true,
	selector: 'app-root',
	imports: [TaskFormComponent, TaskListComponent],
	template: `
		<main class="w-screen h-screen flex justify-center bg-neutral-200">
			<div style="width: min(600px, 90vw)" class="flex flex-col gap-4 p-4">
				<h1 class="text-4xl font-bold text-neutral-800">ToDo</h1>
				<app-task-form />
				<app-task-list />
			</div>
		</main>
	`,
})
export class AppComponent {}
