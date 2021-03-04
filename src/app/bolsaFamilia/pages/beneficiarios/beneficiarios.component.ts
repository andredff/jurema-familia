import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IbgeService } from '../../services/ibge.service';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.scss'],
})
export class BeneficiariosComponent implements OnInit {
  canvas: any;
  ctx: any;

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

    this.createChart();
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

  createChart() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        datasets: [
          {
            label: 'Total de familias.',
            data: [
              886789,
              213024,
              189973,
              158183,
              153129,
              138078,
              886789,
              87026,
              82804,
              62773,
              50036,
              42797,
            ],
            backgroundColor: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: false,
        display: true,
      },
    });
  }
}
