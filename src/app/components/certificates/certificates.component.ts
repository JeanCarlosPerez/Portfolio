import { Component, OnInit } from '@angular/core';
import { Certificates } from '../../interfaces/certificades.interface';
import { CertificatesService } from '../../services/certificates/certificates.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit {

Certificates: Certificates[] = []

constructor(private CertificatesService: CertificatesService) { }

ngOnInit(): void {
  this.CertificatesService.getCertificates().subscribe(data => {
    this.Certificates = data;
  });
}
}
