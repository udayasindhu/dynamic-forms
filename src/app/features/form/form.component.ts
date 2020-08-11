import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() selectedItem: any;
  totalFields: Array<any> = [];

  itemsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItem = changes.selectedItem.currentValue;
    if (this.selectedItem && this.selectedItem.itemId) {
      this.loadTotalFields();
    }
    this.formBuilder.group({});
  }

  loadTotalFields() {
    this.totalFields = [];
    let formFields = {};
    for (let i = 0; i < this.selectedItem.itemId * 2; i++) {
      let fieldId = i + 1;
      let fieldLabel = "field" + fieldId;
      formFields[fieldLabel] = new FormControl();
      this.totalFields.push({ fieldId, fieldLabel });
    }
    this.itemsForm = this.formBuilder.group(formFields);
  }

  submitData() {
    console.log("Submited values: ", this.itemsForm.value);
  }
}
