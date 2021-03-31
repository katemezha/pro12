import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;
  addForm: FormGroup;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {
    this.addForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required]),
        surname: new FormControl(null, [Validators.required]),
        // type: new FormControl(null, [Validators.required])
      }
    )
  }
  onAddWorker() {
    
    this.addWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type,
    });

  }
}
