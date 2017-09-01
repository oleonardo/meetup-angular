import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/* Models */
import { Person } from './person';

/* Externals */
import { DateAdapter, NativeDateAdapter } from "@angular/material";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  data: Person = new Person();
  rForm: FormGroup;

  constructor(
    dateAdapter: DateAdapter<NativeDateAdapter>,
    private fb: FormBuilder) {
    dateAdapter.setLocale('pt-BR');
    this.createForm();
  }

  createForm() {
    this.rForm = this.fb.group({
      name: ['', Validators.required],
      birthday: [, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }

  saveTemplate() {
    console.log(JSON.stringify(this.data));
  }

  saveReactive() {
    if (!this.rForm.valid) return;

    console.log(JSON.stringify(this.rForm.value));
  }

  checkIfRequired(field): boolean {
    const dataField = this.rForm.get(field);

    if (dataField && dataField.errors) {
      return dataField.errors['required'];
    }
    return false;
  }

  checkIfEmail(field): boolean {
    const dataField = this.rForm.get(field);

    if (dataField && dataField.errors) {
      return !dataField.errors['required'] && dataField.errors['email'];
    }
    return false;
  }
}
