import { Injectable } from '@angular/core'
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipes.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({providedIn: 'root'})

export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageService: DataStorageService, private recipeService:RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeService.getRecipe();

        if(recipes.length === 0){

            return this.dataStorageService.fetchRecipes();
        }
        else{
            return recipes;
        }
    }

}