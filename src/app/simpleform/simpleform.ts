import { Component } from '@angular/core';
import { SimpleService } from '../simple-service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-simpleform',
  imports: [ReactiveFormsModule],
  templateUrl: './simpleform.html',
  styleUrl: './simpleform.scss',
})
export class Simpleform implements OnInit {
  constructor(
    private SimpleService: SimpleService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  editId: any = null;
  isEditMode = false;
  simpleForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phnNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  });

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('id');

    if (this.editId) {
      this.isEditMode = true;
      this.loadRowData(this.editId);
    }
  }
  loadRowData(id: string) {
    this.SimpleService.getById(id).subscribe((data: any) => {
      this.simpleForm.patchValue({
        name: data.name,
        email: data.email,
        phnNum: data.phnNum,
      });
    });
  }
  onSubmit() {
    if (this.simpleForm.invalid) {
      this.simpleForm.markAllAsTouched();
      return;
    }

    const formValue = this.simpleForm.getRawValue();

    if (this.isEditMode && this.editId) {
      this.SimpleService.update(this.editId, formValue).subscribe({
        next: () => {
          alert('Updated successfully');
          this.router.navigate(['/grid']);
        },
        error: (err) => console.error('Update failed:', err),
      });
    } else {
      this.SimpleService.insert(formValue).subscribe({
        next: () => {
          alert('Saved successfully');
          this.router.navigate(['/grid']);
        },
        error: (err) => console.error('Insert failed:', err),
      });
    }
  }
}
