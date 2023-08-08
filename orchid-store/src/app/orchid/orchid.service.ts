import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrchid } from '../shared/interfaces/orchid';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl + "/jsonstore"
@Injectable({
  providedIn: 'root'
})
export class OrchidService {

  constructor(private http: HttpClient) { }
  addOrchid(data: any){
    return this.http.post(`${API_URL}/orchids`, {data})
  }
  getAllOrchids(){
    // let all = this.http.get<any>(`${API_URL}/orchids`)
    // return all;
    return this.http.get<{ [key: string]: any }>(`${API_URL}/orchids`)
    .pipe(
      map(response => {
        const orchids: IOrchid[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            // can create an orchid obj to include the ID
            //  { identifierName, name make etc}
            let orchid = response[key].data;
            orchid["_id"] = key;
            orchids.push(orchid);
          }
        }
        return orchids;
      })
    );
  }
  getOneOrchid(id: string){
    return this.http.get<any>(`${API_URL}/orchids/${id}`) .pipe(
      map(response => {
        let orchid: IOrchid = response.data;
        orchid["_id"] = response["_id"];
        
        return orchid;
      })
    );
  }
  editOrchid(id: string | undefined, data: {}){
    return this.http.put<IOrchid>(`${API_URL}/Orchids/${id}`, data)
  }
  deleteOrchid(id: string | undefined){
    return this.http.delete(`${API_URL}/orchids/${id}`)
  }
  getTop3Orchids(){
    return this.http.get<IOrchid[]>(`${API_URL}/orchids/most`)
  }
  addToFavourite(id: string | undefined){
    return this.http.get(`${API_URL}/orchids/favourites/${id}`)
  }
  getFavouriteOrchids(){
    return this.http.get<IOrchid[]>(`${API_URL}/orchids/favourite-orchids`)
  }
  removeFromFavourites(id: string | undefined){
    return this.http.delete(`${API_URL}/orchids/favourites/${id}`)
  }
}
