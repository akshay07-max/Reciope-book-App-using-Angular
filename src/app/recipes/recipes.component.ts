import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  
})
export class RecipesComponent implements OnInit {


  constructor(private dataStorageService: DataStorageService) {
    // setTimeout(()=>{
    //   this.display= !this.display
    // }, 4000)
  }

  display = false;

  close(){
    this.display = !this.display; 
  }

 

  ngOnInit() {
    this.dataStorageService.fetchRecipes().subscribe()
    // this.display = false
    }

}
