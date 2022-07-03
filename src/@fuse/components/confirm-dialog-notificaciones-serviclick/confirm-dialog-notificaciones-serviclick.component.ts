import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'fuse-confirm-dialog-notificaciones-serviclick',
    templateUrl: './confirm-dialog-notificaciones-serviclick.component.html',
    styleUrls  : ['./confirm-dialog-notificaciones-serviclick.component.scss']
})
export class FuseConfirmDialogNotificacionesServiclickComponent
{
    public nombreUsuario: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<FuseConfirmDialogNotificacionesServiclickComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<FuseConfirmDialogNotificacionesServiclickComponent>
    )
    {
    }

}
