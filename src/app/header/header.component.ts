import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy{


  isAuthenticated = false;
  private userSub: Subscription

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      console.log(!user)
      console.log(!!user)
    })
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(){
      this.userSub.unsubscribe();
  }
}
