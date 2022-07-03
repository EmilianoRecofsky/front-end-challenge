import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        MatSelectModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
