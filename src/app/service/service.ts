import {Injectable} from '@angular/core'
declare var firebase;

@Injectable()
export class Service{

  public todos()
  {
      return firebase.database().ref('kids').once('value');
  }
  public kids()
  {
      return firebase.database().ref('kids').once('value');
  }
  public workers()
  {
     return firebase.database().ref('workers').once('value');
  }
   public admin()
  {
     return firebase.database().ref('kids').once('value');
  }

  public saveChild(kids)
  {
      return firebase.database().ref("/kids/").push(kids);
  }
   public saveWorker(w)
  {
      return firebase.database().ref("/workers/").push(w);
  }
  


}
