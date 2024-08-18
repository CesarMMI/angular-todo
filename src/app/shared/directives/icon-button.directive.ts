import { Directive } from '@angular/core';

@Directive({
	standalone: true,
	selector: 'button[appIconButton]',
	host: {
		class: `
    material-symbols-rounded
    text-neutral-500
    transition-colors
    hover:text-neutral-900
    disabled:text-neutral-300
    `,
	},
})
export class IconButtonDirective {}
