import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TypeMarche } from '../models/TypeMarche';

@Injectable({
  providedIn: 'root'
})
export class TypeMarcheService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.baseUrl+'/typemarche' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public liste1(){
    return this.http.get(this.baseUrl+"/Etat");
  
  }

  public ajouter(TypeMarche:TypeMarche,id:any){
    return this.http.post(this.baseUrl+"/ajouter/"+id,TypeMarche);
  
  }


  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }


  update(id:any,TypeMarche:TypeMarche,id1:any){
    return this.http.put(this.baseUrl+'/'+id+'/update/'+id1,TypeMarche);
  }

}
