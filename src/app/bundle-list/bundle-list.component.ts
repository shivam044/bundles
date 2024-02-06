import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from '../mock-data.service'
import { bundle } from './bundles'
interface Bundle {
  id: number;
  name: string;
  price: number;
  active: boolean;
}
@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styleUrls: ['./bundle-list.component.css']
})
export class BundleListComponent implements OnInit {

  filteredBundles = [...bundle];
  showActiveOnly = true;
  defaultMode = true;

  constructor(private router: Router, private dataService: MockDataService) { }

  ngOnInit(): void {
  }

  // This method now directly accepts a string
  onSearch(searchTerm: string) {
    this.filteredBundles = bundle.filter(bundle =>
      bundle.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (this.showActiveOnly ? bundle.active : true)
    );
  }

  // This method is used in the template to handle the event and extract the value
  onSearchInput(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.onSearch(searchTerm);
  }
  navigateToAddBundle() {
    this.router.navigate(['/bundles/add']);
  }

  navigateToEditBundle(bundle: any) {
    this.dataService.setBundleData(bundle);
    this.router.navigate([`/bundles/edit/:${bundle.id}`]);
  }


  toggleActive() {
    this.showActiveOnly = !this.showActiveOnly;
    this.onSearch('');
  }
}
