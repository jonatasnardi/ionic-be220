import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-title',
  templateUrl: './block-title.component.html',
  styleUrls: ['./block-title.component.scss'],
})
export class BlockTitleComponent implements OnInit {
  @Input() title: string;
  @Input() isNew: boolean = false;

  constructor() { }

  ngOnInit() {}

}
