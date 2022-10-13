import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FisicaService } from './../services/fisica.service';

@Component({
  selector: 'app-fisica-form',
  templateUrl: './fisica-form.component.html',
  styleUrls: ['./fisica-form.component.scss']
})
export class FisicaFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: FisicaService,
    private snackBar: MatSnackBar,
    private location: Location
    ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
    //this.form = this.formBuilder.group
  }

  onSubmit(){
    this.service.save(this.form.value);
    this.onCancelar();
  }

  onCancelar(){
    this.location.back();
  }

  onSuccess(){
    this.snackBar.open('Salvo com sucesso');
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso');
  }

}
