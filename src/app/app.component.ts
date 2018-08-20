import { Component } from '@angular/core';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public cars:Array<string> = ["BMW" , "Honda" , "Benz"];
  title = 'app';
  inputForm:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.inputForm = this.formBuilder.group({
      fname:['' , Validators.required]
    })
    console.log(this.inputForm);
    this.inputForm.get('fname').setValue("Richmond");
  }
  customBuiltEvHandler(ev:any){
    console.log("KeyBoard event " , ev);
    console.log(this.inputForm.get('fname').value);
  }
}


