import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../types/task';

@Injectable({
	providedIn: 'root',
})
export class TasksService {
	private _tasks = signal<Task[]>([
		{
			id: '92da695f-0a3a-4cf9-8cec-d05b09958f71',
			title: 'teste 1',
			done: false,
			createdAt: new Date(2024, 7, 18, 0, 0, 0, 0),
		},
		{
			id: '7896f9ae-e02a-445f-aeb6-0d7fe244efd3',
			title: 'teste 2',
			done: false,
			createdAt: new Date(2024, 7, 10, 0, 0, 0, 0),
		},
		{
			id: '619ac542-72d0-47a6-a04f-797fd61f3a15',
			title: 'teste 3',
			done: true,
			createdAt: new Date(2024, 6, 20, 0, 0, 0, 0),
		},
	]);

	readonly tasks = computed(() =>
		this._tasks()
			.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
			.sort((a, b) => (a.done ? 1 : b.done ? -1 : 0))
	);

	addTask = (title: string) =>
		this._tasks.update(tasks => {
			tasks.push({
				id: crypto.randomUUID(),
				title,
				done: false,
				createdAt: new Date(),
			});
			console.log(tasks);
			return tasks;
		});
}
