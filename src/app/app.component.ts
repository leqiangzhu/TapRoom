import { Component } from '@angular/core';
import { TapRoom } from './models/taproom.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TAP ROOM';
  taps:TapRoom []=[
    new TapRoom("NameA","brandA",9.5 ,3,100),
    new TapRoom("NameB","brandB",11.5 ,4,100),
    new TapRoom("NameC","brandc",4.5 ,3,100)
  ]

  selectedTap: TapRoom = null;
  editTap(clickedTap) {
   this.selectedTap = clickedTap;
 }

 finishedEditing() {
  this.selectedTap = null;
}
   

  addTap(){
    let newTap =new TapRoom();
    newTap=new TapRoom(newTap.title,newTap.brand,newTap.price,newTap.alcoholContent);
    this.taps.push(newTap);
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


  income(clickedTap){
   let incomed =clickedTap.price*(100-clickedTap.pints);
    alert(incomed);

  }




}
