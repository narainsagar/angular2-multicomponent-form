import { Component, OnInit } from '@angular/core';
import { FormManager } from '../shared/form-manager';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title: string = "Sidebar";

  constructor(public fm: FormManager) {}

  getSteps(): Array<string> {
    return Object.keys(this.fm.mainForm.value);
  }
  
  ngOnInit() {}
}
