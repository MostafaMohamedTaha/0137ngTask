import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig, SortEvent } from "primeng/api";
import { Customer } from "src/app/domain/customer";
import { CustomerService } from "src/app/service/customerservice";
import { CustomerServiceAr } from "src/app/service/customerservicear";
import { Table } from 'primeng/table';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    formGroup!: FormGroup;
    value: string | undefined;
    stateOptions: any[] = [
        { label: 'En', value: 'en' },
        { label: 'Ar', value: 'ar' }
    ];
    @ViewChild('dt') dt!: Table;
    selectedCustomers!: Customer;
    selectedLanguage!: string;
    customers: Customer[] = [];
    first = 0;
    metaKeySelection: boolean = true;
    rows = 10;

    constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService, @Inject(DOCUMENT) private document: Document, private customerService: CustomerService, private customerServiceAr: CustomerServiceAr) {
        this.selectedLanguage = 'en';
        this.primengConfig.setTranslation({
            // Add translations for PrimeNG components
            // Example:
            // 'primeng': {
            //     // Add translations for PrimeNG components here
            // }

        });
        this.formGroup = new FormGroup({
            value: new FormControl('on')
        });
    }

    switchLanguage(selectedLanguage: string = 'en') {
        const direction = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
        this.document.body.dir = direction;
        selectedLanguage === 'en' ? this.customerService.getCustomersLarge().then((x: Customer[]) => (this.customers = x )) : this.customerServiceAr.getCustomersLarge().then((x: Customer[]) => (this.customers = x ));
        this.translate.use(selectedLanguage); // Change the active language
    }
    onInputChange(event: Event) {
        const inputValue = (event.target as HTMLInputElement).value;
        this.dt.filterGlobal(inputValue, 'contains');
      }
    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl('on')
        });
        this.customerService.getCustomersLarge().then((x: Customer[]) => (this.customers = x ));
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === this.customers.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }

    customSort(event: SortEvent) {
        if (event.data && event.data.length > 0 && event.order) {
            event.data.sort((data1: any, data2: any) => {
                if (event.field) {
                    var value1 = data1[event.field];
                    var value2 = data2[event.field];
                }

                if (value1 == null && value2 != null) return -1;
                else if (value1 != null && value2 == null) return 1;
                else if (value1 == null && value2 == null) return 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string') return value1.localeCompare(value2);
                else return (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            });

            if (event.order === -1) {
                event.data.reverse();
            }
        }
    }
}

