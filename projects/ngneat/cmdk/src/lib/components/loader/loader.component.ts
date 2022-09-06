import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmdk-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() progress?: number;

  constructor() {}

  ngOnInit(): void {}
}
