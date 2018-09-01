import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    headers;

    constructor(private http: HttpClient) {

    }

    getUser(): Observable<any> {
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer htO644q1aLo2D9P7qlrkEPOG0qC9a6TcP6TgHYY2Cbjm1wHvjrzhydAo2xLm'
        });
        return this.http.get('/api/user', {
            headers: this.headers
        });
    }
}
