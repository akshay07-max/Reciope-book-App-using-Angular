import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent implements OnInit{
  @Input() recipe:Recipe;
  @Input() index:number;
  
  ngOnInit(){
      
  }


}
