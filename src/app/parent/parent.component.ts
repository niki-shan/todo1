import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
getMsgFromParent!:string
msgForChild !:string
msgFromChild : string ="yes i can do"

@Output() getTodo :EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  
  }

  getMsgFromChild(eve:any){
       this.msgForChild=eve;
       console.log(eve)
  }

  onClick(data: HTMLInputElement){
    let val = data.value;
    this.getTodo.emit(val)
    

  }

 


}
