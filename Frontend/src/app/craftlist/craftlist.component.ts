import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { craftModel } from './craft.model';
import { CraftService } from '../craft.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-craftlist',
  templateUrl: './craftlist.component.html',
  styleUrls: ['./craftlist.component.css']
})
export class CraftlistComponent implements OnInit {
  imageWidth: Number = 70;
  imageMargin: Number = 3;
  
  cdata: craftModel[];

  constructor( public craftService: CraftService,private router: Router){}

  ngOnInit(): void {
    this.craftService.getCrafts().subscribe((crafts) => {
      this.cdata = JSON.parse(JSON.stringify(crafts));
    });
  }

  ReadCraft(crafts: any) {
    localStorage.setItem('craftId', crafts._id.toString());
    this.router.navigate(['/singlecraft']);
  }
  
  
}

