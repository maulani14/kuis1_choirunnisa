import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  // <!-- membuat warna tulisan menjadi putih -->
  styles:[`
  .next{
    color: yellow;
    }
  `]
})
export class Tugas3Component implements OnInit {
  serverCreationStatus = '';
  i= 0;
  log = [];
  constructor() { }

  ngOnInit() {
  }
  onCreationStatus() {
    this.serverCreationStatus = 'POLITEKNIK NEGERI MALANG';
    this.log.push(this.log.length+1);
    this.i++;
  }

  
}
