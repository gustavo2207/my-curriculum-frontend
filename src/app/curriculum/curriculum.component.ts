import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserInfomationService } from './user-infomation.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  user!: User[];
  constructor(protected userInformation: UserInfomationService) {}
  ngOnInit(): void {
    this.getInformation();
    console.log(this.user);
  }

  getInformation() {
    this.userInformation.getUserInformation().subscribe({
      next: (user: User[]) => (this.user = user),
      error: (error) => console.log(error),
      complete: () => console.log('Complete'),
    });
  }
}
