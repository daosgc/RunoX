import { Component, OnInit, Input } from '@angular/core';
import { IStack } from '@runox-game/game-engine/lib/models/stack.model';

@Component({
  selector: 'rnx-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent implements OnInit {
  @Input('stack') set(stack: IStack) {
    this.stack = stack;
    this.rotate();
  }
  @Input() stack: IStack = null;
  styleRotation = '';

  constructor() {}

  ngOnInit(): void {}

  rotate(): void {
    var rotation = Math.floor(Math.random() * 20) + 10;
    rotation *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.styleRotation = `rotate(${rotation}deg)`;
  }
}
