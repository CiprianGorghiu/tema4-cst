import { AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[passwordMatch]',
})
export class PasswordMatchDirective {
    @Input('passwordMatch') controlToCompare: string;

    validate(control: AbstractControl): {[key: string]: any} | null {
        const controlToCompare = control.parent.get(this.controlToCompare);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'passwordMismatch': true };
        }
        return null;
    }
}