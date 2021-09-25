import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CraftService } from '../craft.service';
import { craftModel } from '../craftlist/craft.model';

@Component({
  selector: 'app-singlecraft',
  templateUrl: './singlecraft.component.html',
  styleUrls: ['./singlecraft.component.css']
})
export class SinglecraftComponent implements OnInit {
  imageWidth: Number = 70;
  imageMargin: Number = 3;
  craftdata = new craftModel('', '', '', '','');

  constructor( public craftService: CraftService,private router: Router ){}

  ngOnInit(): void {
    let craftId = localStorage.getItem('craftId');
    this.craftService.getCraft(craftId).subscribe((crafts) => {
      this.craftdata = JSON.parse(JSON.stringify(crafts));
    });
  }
  deleteCraft(craftdata: any) {
    localStorage.setItem('craftId', craftdata._id.toString());
    this.router.navigate(['/deletecraft']);
  }
}

