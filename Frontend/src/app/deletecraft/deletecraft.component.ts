import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CraftService } from '../craft.service';
import { craftModel } from '../craftlist/craft.model';

@Component({
  selector: 'app-deletecraft',
  templateUrl: './deletecraft.component.html',
  styleUrls: ['./deletecraft.component.css']
})
export class DeletecraftComponent implements OnInit {

  craft = new craftModel('', '', '', '','');
  constructor(private craftService: CraftService, private router: Router) {}
  ngOnInit(): void {
    let cId = localStorage.getItem('craftId');
    this.craftService.delCraft(cId).subscribe((data) => {
      this.craft = JSON.parse(JSON.stringify(data));
    });
  }
}
