import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill, bootstrapList, bootstrapCopy } from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { cssAdd } from '@ng-icons/css.gg';
import { ChartComponent } from './components/chart/chart.component';
import { CartComponent } from './components/cart/cart.component';
import { TableComponent } from './components/table/table.component';
import { CopyComponent } from './components/copy/copy.component';
import { TableModule } from 'primeng/table';
import { CustomerService } from './service/customerservice';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { QRCodeModule } from 'angularx-qrcode';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CustomerServiceAr } from './service/customerservicear';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { iconoirDownloadSquare } from '@ng-icons/iconoir';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CartComponent,
    TableComponent,
    CopyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    PaginatorModule ,
    TranslateModule,
    BrowserAnimationsModule,
		InputTextModule,
		TooltipModule,
    ButtonModule,
    QRCodeModule,
    InputSwitchModule,
    NgxApexchartsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    NgIconsModule.withIcons({ bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill,bootstrapList,cssAdd,bootstrapCopy,iconoirDownloadSquare}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CustomerService,CustomerServiceAr],
  bootstrap: [AppComponent]
})
export class AppModule { }
