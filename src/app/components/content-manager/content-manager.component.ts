import { Component, OnInit } from '@angular/core';
import {Service} from '../../service/service'
@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styleUrls: ['./content-manager.component.css'],
  providers:[Service]
})
export class ContentManagerComponent implements OnInit {

   private tasks ={}
   fname:string;
   lname:string;
   dob:string;
   gender:string;
   doa:string;
   edmove:string;
   rleave:string;
   dleave:string;
   profile:string;
   doe:string;

   //Workers 

   idno:string;
   pnumber:string;
   dor:string;
   address:string
  


  constructor(private todoService:Service)
  {
        this.fname = "";
        this.lname = "";
        this.dob = "";
        this.gender = "";
        this.doa = "";
        this.edmove = "";
        this.rleave = "";
        this.dleave = "";
        this.profile = "";
        this.idno = "";
        this.pnumber = "";
        this.dor = "";
        this.address = ""

       let promise = todoService.workers();
       promise.then(snapshot =>{
       this.tasks = snapshot.val();
       var i = snapshot.val();
       console.log(snapshot);
       console.log(i.key);
      })
      this.getKeys();
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

  ngOnInit() {
  }
  saveChild()
 {
  let kids = 
  {
      first_name:this.fname,
      last_name:this.lname,
      dofbirth:this.dob,
      gender:this.gender,
      dateOfAdmin:this.doa,
      educationaMove:this.edmove,
      reasonOfleaving:this.rleave,
      dateOfLeaving:this.dleave,
      profile:this.profile
  }
    this.todoService.saveChild(kids);
       
  }

 saveWorker()
 {
  let worker = 
  {
      first_name:this.fname,
      last_name:this.lname,
      dofbirth:this.dob,
      gender:this.gender,
      dateofEmp:this.doe,
      dateOfresignation:this.dor,
      profile:this.profile,
      address:this.address,
      idnumber:this.idno,
      phoneNumber:this.pnumber
  }
    this.todoService.saveWorker(worker);
       
  }

}
