import { Component, Input, AfterViewInit, Output , EventEmitter, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
    selector:'custom-input',
    inputs: ['controlPath: control'],
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.scss']
})

export class CustomInputComponent implements AfterViewInit , OnInit{
    controlPath:string
    control:AbstractControl; // the parent class of Form control typescript was complaining
    @Input('theCar') cars:Array<string>;
    @Input('theFormControl') formControl:FormGroup;
    @Input('theFname') fname:any;
    @Output() someEvent:EventEmitter<any> = new EventEmitter<any>();

    express:boolean;


    constructor(){
        this.express = true;
    }
    ngOnInit(){
        console.log("Control Path " , this.controlPath);
        this.control = this.formControl.get(this.controlPath);
    }
    ngAfterViewInit(){
        console.log("Passed down from the parent component " , this.cars);
        console.log("passes down ok " , this.control);
        //this.controls = this.formControl.get(this.controlPath);
       
    }

    emitEvent=(e:any)=>{
        this.someEvent.emit(e);
    }
}