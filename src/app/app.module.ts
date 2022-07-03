import 'hammerjs';

import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
    MAT_DATE_LOCALE,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';

import {
    MatAutocompleteModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, 
    MatChipsModule, MatDividerModule, MatExpansionModule, MatGridListModule,
    MatListModule, MatProgressBarModule, MatRadioModule, MatSidenavModule, 
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatStepperModule, MatTreeModule
} from '@angular/material';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuseConfirmDialogModule, FuseConfirmDialogNotificacionesServiclickModule, FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from 'app/app.component';
import { fuseConfig } from 'app/fuse-config';
import { LayoutModule } from 'app/layout/layout.module';
import { routing } from './app.routing';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader/loader.interceptor.';
import { LoaderService } from './loader/loader.service';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasService } from './reservas/reservas.service';
import { ReservaFormComponent } from './reservas/reserva-form/reserva-form.component';
import { MatSelectSearchModule } from 'app/components/mat-select-search/mat-select-search.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SnackbarErrorComponent } from './components/snackbar-error/snackbar-error.component';
import { SnackbarSuccessComponent } from './components/snackbar-success/snackbar-success.component';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { ChartsModule } from 'ng2-charts/ng2-charts';

// import { LoaderInterceptorService } from './loader/loader.interceptor.';
@NgModule({
    declarations: [
        AppComponent,
        ReservasComponent,
        ReservaFormComponent,
        LoaderComponent,
        SnackbarSuccessComponent,
        SnackbarErrorComponent,
    ],
    imports : [
        MatSelectSearchModule,
        FuseWidgetModule,
        NgxChartsModule,
        routing,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ChartsModule,

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatTabsModule,     
        MatBadgeModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatTooltipModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,      
        LayoutModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,
        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseConfirmDialogNotificacionesServiclickModule,
        FuseSidebarModule,        
        BrowserModule,
        HttpModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatMomentDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        SatPopoverModule,
    ],
    exports   : [
        MatSelectSearchModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatMomentDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule
    ],
    bootstrap : [
        AppComponent
    ],
    providers : [
        ReservasService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        //datepicker to string
        DatePipe,
        //strign to datepicker
        { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
        LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
    entryComponents: [
        ReservaFormComponent,
        SnackbarSuccessComponent,
        SnackbarErrorComponent,
    ]
})
export class AppModule
{
}
