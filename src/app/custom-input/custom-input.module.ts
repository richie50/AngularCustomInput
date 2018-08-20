import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CustomInputComponent } from './custom-input.component';

@NgModule({
declarations:[
    CustomInputComponent
],
imports:[
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
],
exports:[
    CustomInputComponent
],
providers:[

]
})

export class CustomInputModule{

}