import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userchat-dashboard',
  templateUrl: './userchat-dashboard.component.html',
  styleUrls: ['./userchat-dashboard.component.css']
})
export class UserchatDashboardComponent implements OnInit {

  users: any[] = [
    
    { id: 1, name: 'Aman_Choudhary' },
    { id: 2, name: 'Vishnu_Paul' },
    { id: 3, name: 'Mahesh_Jain' },
    { id: 4, name: 'Sanjay_Das' }
  ];
  message: string = '';
  loggedInUserId: number = 0;
  userId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      console.log('Sending message:', this.message);
      // Implement logic to send message here
      this.message = ''; // Clear message input
    }
  }

  sendEvent() {
 
    // socketIO.emit("sendEvent", {
    //     "myId": this.loggedInUserId,
    //     "userId": this.userId,
    //     "message": this.message
    // });
}

}
