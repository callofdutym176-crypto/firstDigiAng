import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { SimpleService } from '../simple-service';
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-simplegrid',
  imports: [AgGridModule],
  templateUrl: './simplegrid.html',
  styleUrl: './simplegrid.scss',
})
export class Simplegrid implements OnInit {
  constructor(
    private simpleService: SimpleService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}
  rowData: any[] = [];

  defaultColDef = {
    flex: 1,
    resizable: true,
    sortable: true,
    cellStyle: { textAlign: 'left' },
    headerClass: 'center-header',
    filter: true,
  };
  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone Number', field: 'phnNum' },
    {
      headerName: 'Edit',
      width: 100,
      filter: false,
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'Edit';
        button.className = 'edit-btn';

        button.style.backgroundColor = '#2563eb';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.padding = '6px 12px';
        button.style.borderRadius = '6px';
        button.style.fontSize = '13px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
          this.editrow(params.data);
        });

        button.addEventListener('mouseover', () => {
          button.style.backgroundColor = '#1e40af';
        });

        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = '#2563eb';
        });

        return button;
      },
    },
    {
      headerName: 'Delete',
      width: 100,
      filter: false,
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'Delete';
        button.className = 'delete-btn';

        button.style.backgroundColor = '#2563eb';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.padding = '6px 12px';
        button.style.borderRadius = '6px';
        button.style.fontSize = '13px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
          this.deleterow(params.data);
        });

        button.addEventListener('mouseover', () => {
          button.style.backgroundColor = '#1e40af';
        });

        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = '#2563eb';
        });
        return button;
      },
    },
  ];
  ngOnInit() {
    this.loadget();
  }
  editbutton(params: any) {
    const button = document.createElement('button');
    button.innerText = 'Edit';
    button.className = 'edit-btn';
    button.addEventListener('click', () => {
      this.editrow(params.data);
    });
    return button;
  }
  deletebutton(params: any) {
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.className = 'delete-btn';
    button.addEventListener('click', () => {
      this.deleterow(params.data);
    });
    return button;
  }
  editrow(data: any) {
    console.log('Edit row:', data);
    this.router.navigate(['/form', data.id]);
  }
  deleterow(data: any) {
    if (confirm('Are You Sure You Want to Delete ' + JSON.stringify(data.name) + '?')) {
      this.simpleService.delete(data.id).subscribe(() => {
        alert('Deleted successfully');
        this.loadget();
      });
    }
  }
  loadget() {
    this.simpleService.get().subscribe({
      next: (data) => {
        this.rowData = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
}
