import { Component, Input, OnInit } from '@angular/core';
import { Stack } from '../stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent implements OnInit {
  @Input()
  title: String = '';

  @Input()
  stacks!: Stack[];

  constructor() {}

  ngOnInit(): void {}
}
