import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../shared/services/tasks.service';
import { IconButtonDirective } from '../shared/directives/icon-button.directive';

@Component({
	standalone: true,
	selector: 'app-task-form',
	imports: [ReactiveFormsModule, IconButtonDirective],
	template: `
		<div class="size-full rounded shadow flex px-4 py-4 gap-4 bg-neutral-50 transition-all focus-within:ring">
			<input type="checkbox" name="check-all" id="check-all" />
			<form class="flex-1 flex" [formGroup]="form" (ngSubmit)="submit()">
				<input
					type="text"
					formControlName="title"
					placeholder="What needs to be done?"
					class="flex-1 outline-none bg-transparent font-medium text-xl"
				/>
				<button appIconButton type="submit" [disabled]="form.invalid">send</button>
			</form>
		</div>
	`
})
export class TaskFormComponent {
	private _formBuilder = inject(FormBuilder);
	private _tasksService = inject(TasksService);

	form = this._formBuilder.group({
		title: ['', Validators.required],
	});

	submit() {
		const title = this.form.value.title;
		if (!title) return;
		this.form.reset();
		this._tasksService.addTask(title);
	}
}
