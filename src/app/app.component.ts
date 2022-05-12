import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveForms';
  newForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl(''),
    mobileNo:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
  })
  userForm(){
    console.warn(this.newForm.value);
    
  }
  get fname(){
    return this.newForm.get('firstname');
  }
  get mobNo(){
    return this.newForm.get('mobileNo');
  }
  get email(){
    return this.newForm.get('email');
  }
}
