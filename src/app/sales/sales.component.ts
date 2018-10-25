import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
//this class is to record the thr order ,oder time,price,we can see when the store had most people,when is less,
//and do some plan to boss
//and see which one is most porplar
  constructor(
    public orderTime? : number



  ) { }

  ngOnInit() {
  }

  /**
   * name
   */
  public name() {
    
  }

}
