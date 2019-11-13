import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../models/user'
import { global } from './global'

@Injectable()
export class UserServiceProvider {
        public url: string

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url
    }

    test(){
        return "hello world from a service"
    }

    register(user): Observable<any> {
        const json = JSON.stringify(user)
        const params = 'json='+json

        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

        return this._http.post(this.url+'/register', params, {headers: headers})
    }
}