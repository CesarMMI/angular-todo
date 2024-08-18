export type Task = {
	id: string;
	title: string;
	done: boolean;
	createdAt: Date;
	doneAt?: Date;
};
