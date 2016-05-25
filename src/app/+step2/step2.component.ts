import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';
import { FormFieldComponent } from '../shared/form-field';

@Component({
  moduleId: module.id,
  selector: 'app-step2',
  templateUrl: 'step2.component.html',
  styleUrls: ['step2.component.css'],
  directives: [FormFieldComponent]
})
export class Step2Component implements OnInit {
  step2: AbstractControl;
  progress: number;
  
  constructor(public fm: FormManager) {
    this.step2 = fm.mainForm.controls['step2'];
    console.log('Hello it`s step2', this.step2);
    this.progress = 0;

    this.step2.valueChanges.subscribe(data => {
      this.initProgress();
    });
  }

  initProgress() {
    var data = this.step2['controls'];
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
