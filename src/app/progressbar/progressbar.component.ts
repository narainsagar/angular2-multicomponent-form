import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, AbstractControl } from '@angular/common';
import { FormManager } from '../shared/form-manager';
import {Angular2MulticomponentFormAppComponent} from '../../app';

@Component({
  moduleId: module.id,
  selector: 'app-progress-bar',
  templateUrl: 'progressbar.component.html',
  styleUrls: ['progressbar.component.css']
})
export class ProgressBarComponent implements OnInit {
  step1: AbstractControl;
  step2: AbstractControl;

  activeStep: string;
  progress: Object;
  
  constructor(public fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
    this.step2 = fm.mainForm.controls['step2'];
    
    this.progress = {
      step1: 0,
      step2: 0
    };

    this.binding(this.step1);
    this.binding(this.step2);
  }

  binding(step) {
    step.valueChanges.subscribe(data => {
      this.initProgress(step);
    });
  }

  initProgress(step) {
    var data = step['controls'];
    var totalCount = Object.keys(data).length;
    console.log('totalCount', totalCount);
    var counter = 0;
    for (var key in data) {
      if (data[key].value) {
        counter++;
      }
      this.progress[step] = ((100/totalCount) * counter);
    }
  }

  ngOnInit() {
    //var isStep1 = Angular2MulticomponentFormAppComponent.getLinkStyle('/step1');
    //var isStep2 = Angular2MulticomponentFormAppComponent.getLinkStyle('/step2');

    //console.log('isStep1:' + isStep1, ', isStep2:' + isStep2);
    
    this.initProgress(this.step1);
    this.initProgress(this.step2);
  }

}
