import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  form = this.fb.group({
    dbconf: ['']
  });

  constructor(private fb: FormBuilder){
    if(localStorage.getItem('dbconf')) {
      this.form.controls.dbconf.setValue(localStorage.getItem('dbconf'));
    } else {
      this.form.controls.dbconf.setValue('offline');
    }
  }

  save() {
    localStorage.setItem('dbconf', this.form.controls.dbconf.value || 'offline');
    location.reload()
  }
}
