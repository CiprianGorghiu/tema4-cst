import { FormControl } from '@angular/forms';

export function passwordMatchValidator(control1: FormControl, control2: FormControl) {
    return control1.value === control2.value ? null : { 'mismatch': true };
}