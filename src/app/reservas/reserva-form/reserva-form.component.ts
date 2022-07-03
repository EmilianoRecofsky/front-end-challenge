import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { Reserva } from '../../entity/reserva.model';

@Component({
  selector: 'reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservaFormComponent {

  action: string;
  reserva: Reserva;
  reservaForm: FormGroup;
  dialogTitle: string;

  constructor(
    public matDialogRef: MatDialogRef<ReservaFormComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder) {
    // Este mismo modal form es abstraido y reutilziado en: agregar reserva y ver detalle reserva
    this.action = _data.action;
    if (this.action === 'new') {
      this.dialogTitle = 'Nueva Reserva';
      this.reserva = new Reserva();
      this.reservaForm = this.createReservaForm();
    } else {
      this.dialogTitle = 'Detalle Reserva';
      this.reserva = _data.reserva
      this.reservaForm = this.verReservaForm(this.reserva);
    }
  }

  // Cuando se abre el form para agregar reserva se inicialzia el formulario
  createReservaForm(): FormGroup {
    var numericPattern = "^([0-9])*$";
    var charsPattern = "[A-Za-z]*";
    var caracteresEspecialesPattern = "[^\\\\/%]*";
    // Pattern fecha acepta dd/mm/yyyy
    var fechaPatter = "^([0-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])\\2(\\d{4})$";
    // Pattern hora acepta HH:MM
    var horaPattern = "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$";
    return this._formBuilder.group({
      origen : ['', [Validators.required]],
      destino: ['', [Validators.required]],
      numeroDePasajeros: ['', [Validators.required, Validators.pattern(numericPattern)]],
      fecha: ['', [Validators.required, Validators.pattern(fechaPatter)]],
      hora: ['', [Validators.required, Validators.pattern(horaPattern)]],
    });
  }

  // Cuando se abre el modal para ver detalle de reserva se inyectan los atributos del objeto reserva y se muestran en forma de vista (disabled)
  verReservaForm(reserva): FormGroup {
    var numericPattern = "^([0-9])*$";
    var charsPatern = "[A-Za-z]*";
    var caracteresEspeciales = "[^\\\\/%]*";
    return this._formBuilder.group({
      origen : new FormControl({value: reserva.origen, disabled: true}),
      destino : new FormControl({value: reserva.destino, disabled: true}),
      numeroDePasajeros : new FormControl({value: reserva.numeroDePasajeros, disabled: true}),
      fecha : new FormControl({value: reserva.fecha, disabled: true}),
      hora : new FormControl({value: reserva.hora, disabled: true}),
    });
  }

}
