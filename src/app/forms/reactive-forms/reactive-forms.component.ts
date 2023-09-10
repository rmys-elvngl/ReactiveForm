import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm: FormGroup;
  countryMenu: CountryDropMenu[] = [
    { text: 'Türkiye', value: 1 },
    { text: 'Amerika', value: 2 },
    { text: 'Fransa', value: 3 }
  ]
  // countryMenu: CountryDropMenu[] = [
  //   { text: "Seçiniz", value: 0 },
  //   { text: 'Türkiye', value: 1 },
  //   { text: 'Amerika', value: 2 }
  // ]

  genderMenu: GenderRadioMenu[] = [
    { text: "Male", value: 1 },
    { text: "Female", value: 2 }
  ]

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: fb.control('', Validators.required),
      password: fb.control('', [Validators.minLength(4)]), //birden fazla tanımlanmak istenirse
      rememberMe: false,
      country:fb.control('',Validators.required),
      //country: 0, //default değer
      gender: [1] ,//default değer,
      birthdate: fb.control('',[Validators.required,this.isOldEnough])
    })//form kontrol nesnesi
  }

  signIn() {
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {

  }

  isValidMessageShow(formControlName: string) {
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.dirty || this.loginForm.get('password')?.touched
  }
  isValid(formControlName: string): boolean {
    let formControl = this.loginForm.get(formControlName);
    if (!(formControl?.invalid && (formControl.dirty || formControl.touched))) return false
    if(formControl.errors?.['required']) return true;
    if(formControl.errors?.['minLength']) return true;
    return false;
  }
  isSuccessValid(formControlName: string) {
    let formControl = this.loginForm.get(formControlName);
    return formControl?.valid && (formControl.dirty || formControl.touched);
  }
  isOldEnough=(control:FormControl): {isYoung:true} | null=>
  {
    let birthdate = new Date(control.value)
    birthdate.setFullYear(birthdate.getFullYear() +18)
    return birthdate<new Date() ? null : {isYoung:true}
  }
}
