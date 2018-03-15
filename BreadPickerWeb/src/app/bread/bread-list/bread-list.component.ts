import { Component, OnInit } from '@angular/core';
import { BreadService } from '../../shared/services/bread.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bread-list',
  templateUrl: './bread-list.component.html',
  styleUrls: ['./bread-list.component.css']
})
export class BreadListComponent implements OnInit {

  constructor(private breadService: BreadService) { }
  favoriteBreads: Observable<string[]>;
  ngOnInit() {
    this.favoriteBreads = this.breadService.getFavoriteBreads(); //Use async pipe in template to subscribe
  }

}
