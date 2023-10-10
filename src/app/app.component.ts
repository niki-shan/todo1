import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  title = 'todo1';
  todoArr: Array<string> =[];
   item : Array<string> = ["js"];
  
  
  
  constructor(){

  }



  addTodo( todo : HTMLInputElement){

    let val = todo.value;
    this.todoArr.push(val)
    
  }


  
  onClick(data: HTMLInputElement){
    let val = data.value
    this.item.push(val)
    console.log(val)

  }

  getnewitem(val:string){
    this.item.push(val)
       

  }
    
 
  
}


