import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
   @Input()getMsgFromParent!: string;
   @Output()msgFromChild: EventEmitter<string> = new EventEmitter();
  
   
   @Input() getArray: Array<string> = []
 



   getdata !: string
  constructor() { }

  ngOnInit(): void {
    // this.msgFromChild.emit(`yes i will work`)

  }

  sendMsg(){
    this.msgFromChild.emit(`yes i will work`)
    // this.msgFromChild = eve;
      
  }



}
