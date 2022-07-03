import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { FuseConfirmDialogNotificacionesServiclickComponent } from '@fuse/components/confirm-dialog-notificaciones-serviclick/confirm-dialog-notificaciones-serviclick.component';

@NgModule({
    declarations: [
        FuseConfirmDialogNotificacionesServiclickComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        FuseConfirmDialogNotificacionesServiclickComponent
    ],
})
export class FuseConfirmDialogNotificacionesServiclickModule
{
}
