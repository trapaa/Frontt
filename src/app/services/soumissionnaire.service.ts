import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Soumissionnaire } from '../models/Soumissionnaire';
@Injectable({
  providedIn: 'root'
})
export class SoumissionnaireService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/sou' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public listeforme(){
    return this.http.get(environment.baseUrl+'/forme');
  
  }

  public listefonction(){
    return this.http.get(environment.baseUrl+'/fonction');
  
  }

  public listegouvernerat(id:any){
    return this.http.get(environment.baseUrl+'/gouv/'+id);
  
  }



  public listepays(){
    return this.http.get(environment.baseUrl+'/pays');
  
  }

  public listemarche(){
    return this.http.get(environment.baseUrl+'/typemarche');
  
  }

  public listeville(id:any){
    return this.http.get(environment.baseUrl+'/ville/'+id);
  
  }

  public listeEtat(){
    return this.http.get(environment.baseUrl+'/etat');
  
  }






  public ajouter(Soumissionnaire:Soumissionnaire,){
    return this.http.post(this.baseUrl+"/ajouter/",Soumissionnaire);
  
  }


  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }


  update(Soumissionnaire:Soumissionnaire){
    return this.http.put(this.baseUrl+'/update',Soumissionnaire);
  }
}
