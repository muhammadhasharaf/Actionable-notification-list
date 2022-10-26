import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/providers/notification-data';



@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {

  openIndex:any;
  notificationData=Notification.notificationData





  constructor() {}

  ngOnInit(): void {
  }

  assignIndex(i:any){
    this.openIndex=i
  }
}
