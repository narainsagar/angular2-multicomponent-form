import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';
import { FormFieldComponent } from '../shared/form-field';

@Component({
  moduleId: module.id,
  selector: 'app-step1',
  templateUrl: 'step1.component.html',
  styleUrls: ['step1.component.css'],
  directives: [FormFieldComponent]
})
export class Step1Component implements OnInit {
    
  step1: AbstractControl;
  progress: number;

  constructor(public fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
    console.log('Hello it`s step1', this.step1);
    this.progress = 0;

    this.step1.valueChanges.subscribe(data => {
      this.initProgress();
    });
  }


  initProgress() {
    var data = this.step1['controls'];
    var totalCount = Object.keys(data).length;
    console.log('totalCount', totalCount);
    var counter = 0;
    for (var key in data) {
      if (data[key].value) {
        counter++;
      }
      this.progress = ((100/totalCount) * counter);
    }
  }

  ngOnInit() {
    this.initProgress();
  }

}
