import { Component, OnInit } from '@angular/core';
import {Service} from '../../service/service'
@Component({
  selector: 'app-kidsprof',
  templateUrl: './kidsprof.component.html',
  styleUrls: ['./kidsprof.component.css'],
  providers:[Service]
})
export class KidsprofComponent implements OnInit {

  private tasks ={}

  constructor(private todoService:Service)
  {
       let promise = todoService.kids();
       promise.then(snapshot =>{
       this.tasks = snapshot.val();
       var i = snapshot.val();
       console.log(snapshot);
       console.log(i.key);
      })
      this.getKeys();
  }

  ngOnInit() 
  {

  }
   getKeys()
  {
    try
    {
     var key = Object.keys(this.tasks);   
     console.log(key);  
    }
    catch(e)
    {
        console.log(e);      
    }
    return key;
  }

}
