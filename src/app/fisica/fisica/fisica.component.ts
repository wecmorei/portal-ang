import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { FisicaService } from './../services/fisica.service';
import { Fisica } from './../model/fisica';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.component.html',
  styleUrls: ['./fisica.component.scss']
})
export class FisicaComponent implements OnInit {

  @Input() fisica: Fisica[] = [];
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();
  fisica$: Observable<Fisica[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(private fisicaService: FisicaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.fisica$ = this.fisicaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao trazer dados.');
        return of([])
       })
    )
   };

   onError(errorMsg: string){
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
   });  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onEdit(fisica: Fisica){
    this.router.navigate(['edit', fisica._id], {relativeTo: this.route})
  }

}
