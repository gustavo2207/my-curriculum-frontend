import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-experiance',
  templateUrl: './professional-experiance.component.html',
  styleUrls: ['./professional-experiance.component.css'],
})
export class ProfessionalExperianceComponent implements OnInit {
  @Input()
  title: String = '';
  @Input()
  description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
