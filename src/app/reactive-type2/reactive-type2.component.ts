import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderRadioMenu } from '../models/gender-radio-menu';
import { CountryDropMenu } from '../models/country-drop-menu';

@Component({
  selector: 'app-reactive-type2',
  templateUrl: './reactive-type2.component.html',
  styleUrls: ['./reactive-type2.component.css']
})
export class ReactiveType2Component implements OnInit {
  //form nesnesi üretildi
  loginForm: FormGroup
  
  countryMenu: CountryDropMenu[] = [
    { text: "Seçiniz", value: 0 },
    { text: 'Türkiye', value: 1 },
    { text: 'Amerika', value: 2 }
    ]
  
    
  genderMenu: GenderRadioMenu[] = [
    {text:"Male", value:1},
    {text:"Female", value:2}
  ]

  constructor() {
    
    //formControl nesneleri oluşturuldu
    this.loginForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
      rememberMe: new FormControl('true'),
      coutnry: new FormControl(0),
      gender: new FormControl(2)
    })
  }
  ngOnInit(): void {

  }
  signIn(){
   console.log(this.loginForm.value)
  }
  isValidMessageShow(formControlName:string)
  {
    return this.loginForm.get('password')?.invalid && this.loginForm.get ('password')?.dirty || this.loginForm.get('password')?.touched
  }
}
