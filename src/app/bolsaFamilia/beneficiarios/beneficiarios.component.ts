import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IbgeService } from '../services/ibge.service';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.scss'],
})
export class BeneficiariosComponent implements OnInit {

  public form: FormGroup;
  public estados: any = [];
  public cidades: any = [];

  constructor(
    private ibgeService: IbgeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.getUfs();
    this.form.get('cidade').disable();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  private getUfs() {
    this.ibgeService.getUfs().subscribe(
      (res) => {
        this.estados = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public selectUf() {
    const estado = this.form.get('estado').value;
    this.getCidades(estado);
  }

  private getCidades(estado) {
    this.ibgeService.getCidades(estado).subscribe(
      (res) => {
        this.cidades = res;
        this.form.get('cidade').enable();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public selectCidade() {
    const cidade = this.form.get('cidade').value;
    this.getBenefeciarios(cidade);
  }

  private getBenefeciarios(id) {
    this.ibgeService.getBeneficiarios(id).subscribe((res) => {
      console.log('beneficiarios', res);
    });
  }
}
