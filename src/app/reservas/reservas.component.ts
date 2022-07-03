import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { Reserva } from '../entity/reserva.model';
import { ReservasService } from './reservas.service';

@Component({
  selector: 'reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ReservasComponent implements OnInit {

  data: Reserva[];
  dataSource = new MatTableDataSource<Reserva>();
  displayedColumns = ['origen', 'destino', 'numeroDePasajeros','fecha', 'hora'];
  dialogRef: any;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('tableSort') sort: MatSort;

  constructor(
    private reservasService: ReservasService,
    private _matDialog: MatDialog,
    private _fuseSidebarService: FuseSidebarService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Al iniciar componente se obtienen las reservas
    this.getReservas();
  }

  // Metodo que retorna las reservas
  public getReservas = () => {
    this.dataSource.data = []
    this.dataSource.data =  this.reservasService.getReservas();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Cuando se presiona el boton agregar reserva
  agregarReserva(): void {
    var resultHttpAgregar;
    // Cuando se apreta boton agregar reserva se abre FORMULARIO agregar (en modal)
    this.dialogRef = this._matDialog.open(ReservaFormComponent, {
      panelClass: 'reserva-form-dialog',
      data: {
        action: 'new',
      }
    });
    // Cuando se cierra el FORM de agregar
    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        let reservaAgregar = response.value;
        // Se agrega reserva al localStorage
        this.reservasService.agregarReserva(reservaAgregar);
        this.getReservas();
      });
  }

  // Cuando se clcikea en row de la table: se abre modal con el detalle reserva
  verDetalleReserva(reserva): void {
    var resultHttpAgregar;
    this.dialogRef = this._matDialog.open(ReservaFormComponent, {
      panelClass: 'reserva-form-dialog',
      data: {
        action: 'detalle',
        reserva: reserva
      }
    });
    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
      });
  }

  // Filtro para table reservas
  aplicarFiltroSearch(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
