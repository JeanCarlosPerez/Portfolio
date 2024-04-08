import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificates } from '../../interfaces/certificades.interface';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private url2 = '../../../assets/data/certificates.json'

  constructor(private http: HttpClient) { }

  getCertificates(): Observable<Certificates[]> {
    return this.http.get<Certificates[]>(this.url2);
  }
}
