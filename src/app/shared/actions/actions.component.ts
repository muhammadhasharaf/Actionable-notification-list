import { Component, Input, OnInit } from '@angular/core';


export type Action = {
  control: 'button' | 'file';
  config?: { label: string };
};

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Input() action:Action | any

  constructor() { }

  ngOnInit(): void {
    console.log("action",this.action)
  }

}
