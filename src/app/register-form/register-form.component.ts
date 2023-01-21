import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../_core/services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private registerService : RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() : void {
    this.registerForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.minLength(3)]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,[Validators.required,Validators.minLength(8)]],
      gender:[null,[Validators.required]]
    });
  }

  

  register() : void 
  {

      if(this.registerForm.invalid)
    {
      return;
    }

    const payLoad = { name:this.name.value, email:this.email.value , password: this.password.value,confirmPassword: this.confirmPassword.value, gender:this.gender.value};
    this.registerService.register(payLoad).subscribe({
      next : (response) => {
        window.localStorage["token"] = response.token;
        this.router.navigate(["login"]);
      } ,
      error : () => 
      {

      }
    });
    

  }

  get email() : FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get password() : FormControl {
    return this.registerForm.get("password") as FormControl;
  }

  get name() : FormControl {
    return this.registerForm.get("name") as FormControl;
  }

  get confirmPassword() : FormControl {
    return this.registerForm.get("confirmPassword") as FormControl;
  }

  get gender(): FormControl 
  {
    return this.registerForm.get('gender') as FormControl;
  }

}
