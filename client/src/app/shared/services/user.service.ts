import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private header = new HttpHeaders().set('Content-Type', 'application/json');
  noAuthHeader = { headers: new HttpHeaders({ 'noauth': 'true' }) };
  constructor(private _http: HttpClient) { }
  /*============registration======================*/
  postUser(user): Observable<any> {
    return this._http.post(environment.apiBaseUrl + '/register', user, this.noAuthHeader);


  }
  /*================login===========================*/
  login(email, password) {
    const model = {
      email: email,
      password: password
    };
    return this._http.post(environment.apiBaseUrl + '/login', model, this.noAuthHeader)

  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayload() {
    // var token = localStorage.getItem('token');
    var token = this.getToken();
    if (token) {
      console.log(token);
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);

    } else return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) { return userPayload.exp > Date.now() / 1000; }
  }
  /*==============list users ===============*/
  getAllUsers(): Observable<any> {
    return this._http.get(environment.apiBaseUrl + '/list');

  }
  getUserById(userId) {
    //localhost:3000/users/getUser/5d888afcaa82ba3b8c495d54
    console.log(environment.apiBaseUrl + `/getUser/${userId}`);
    console.log("service return :" + this._http.get(environment.apiBaseUrl + `/getUser/${userId}`));
    return this._http.get(environment.apiBaseUrl + `/getUser/${userId}`, { headers: this.header });

  }
  // Delete user
  deleteUser(id): Observable<any> {
    return this._http.delete(environment.apiBaseUrl + `/delete/${id}`, { headers: this.header });
  }

  updateUser(id,body) {
    return this._http.put(environment.apiBaseUrl + `/update/${id}`, body);
  }

  /*=========recuperer le user connecté=============*/
  getUserProfile() {
    console.log("hello I am using the update service ");
    return this._http.get(environment.apiBaseUrl + '/userProfile');
  }

}
