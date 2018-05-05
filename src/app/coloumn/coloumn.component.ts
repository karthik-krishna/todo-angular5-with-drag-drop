import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-coloumn',
  templateUrl: './coloumn.component.html',
  styleUrls: ['./coloumn.component.css']
})
export class ColoumnComponent implements OnInit {

  constructor() { }

  @Input() arraytoprint:any;
  @Input() type:string='';
  @Input() heading:string='';
  @Input() id:string='';

  @Output() newTask = new EventEmitter<any>();

  public todo:Todo;

  ngOnInit() {
    this.todo={
  		todoTask:'',
  		progressTask:'',
  		doneTask:''
  	}
  }

  onSubmit(todoForm):void{
  	this.newTask.emit(todoForm);
  }

  deleteItem(arr,i):void{
  	arr.splice(i,1);
  }

}
