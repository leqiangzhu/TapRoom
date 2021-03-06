import { Component } from '@angular/core';
import { TapRoom } from './models/taproom.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();
  hour:number=this.currentTime.getHours();
  minutes : number=this.currentTime.getMinutes();
  seconds : number=this.currentTime.getSeconds();
  

  title = 'TAP ROOM';
  taps:TapRoom []=[
    new TapRoom("NameA","brandA",9.5 ,3,9),
    new TapRoom("NameB","brandB",11.5 ,4,45),
    new TapRoom("NameC","brandc",4.5 ,3,100)
  ]

  selectedTap: TapRoom = null;
  newTap =null;
  editTap(clickedTap) {
   this.selectedTap = clickedTap;
 }

 finishedEditing() {
  this.selectedTap = null;
}
   

  addTap(){
    let addTap =new TapRoom();
    this.newTap=addTap;
    this.taps.push(this.newTap);
  }
   
  finishedAdding() {
    this.newTap = 0;
  }


count :number =0;
  sell(clickedTap){
    
    this.count++;
    if(clickedTap.pints>0){
      clickedTap.pints--;
    }
    if(clickedTap.pints<=0){
      alert("sold out!!")
      clickedTap.pints===0;
    }
    
  }


  priorityColor(currentTap){
    if (currentTap.price < 5){
      return "bg-danger";
    } 
     if (currentTap.price > 34) {
      return  "bg-warning";
    } 
    if(currentTap.price == 20)
     {
      return "bg-info";
    }
  }

  priorityPintsColor(currentTap){
    if (currentTap.pints <= 10){
      return "progress-bar-danger";
    } else if (currentTap.pints > 10 && currentTap.pints<50) {
      return  "progress-bar-info";
    } else if(currentTap.pints > 50)
     {
      return "progress-bar-success";
    }
  }


  income(clickedTap){
   let incomed =clickedTap.price*(100-clickedTap.pints);
    alert(incomed);

  }
//this method just clear the values
  // removeTap(clickedTap){
  //   let clickId=this.taps.indexOf(clickedTap);
  //   delete this.taps[clickId];

  // }
  removeTap(clickedTap){
    let clickId=this.taps.indexOf(clickedTap);
    this.taps.splice(clickId,1);
  }

  happyHour(){
    if(this.hour>12 && this.minutes > 20){


    }
  }

  getColor(){
    if(6<10){
      return 'red';
    }
    
  }





}
