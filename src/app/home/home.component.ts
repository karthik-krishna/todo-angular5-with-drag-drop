import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public todoTasksArr:Array<any>=[];
	public progressTasksArr:Array<any>=[];
	public doneTasksArr:Array<any>=[];
  constructor() { }

  ngOnInit() {
  	
  }

  onSubmit(event,type):void{
  	if(type=='todo'){
  		this.todoTasksArr.push({task:event.form.value.todoTask})
  	}else if(type=='progress'){
  		this.progressTasksArr.push({task:event.form.value.progressTask})
  	}else if(type=='done'){
  		this.doneTasksArr.push({task:event.form.value.doneTask})
  	}
  }

  


}
