import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/app/shared/services/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class IbgeService extends BaseService {

  protected urlIbge: string = environment.ibge;
  protected urlTransparencia: string = environment.transparencia;

  constructor(private http: HttpClient) {
    super();
  }

  getUfs(): Observable<any> {
    const response = this.http
      .get(`${this.urlIbge}/localidades/estados`, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  getCidades(id): Observable<any> {
    const response = this.http
      .get(
        `${this.urlIbge}/localidades/estados/${id}/municipios`,
        this.ObterHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  getBeneficiarios(id): Observable<any> {
    const response = this.http
      .get(
        `${this.urlTransparencia}/bolsa-familia-por-municipio?mesAno=202008&codigoIbge=3556602&pagina=1`,
        this.ObterHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }
}
