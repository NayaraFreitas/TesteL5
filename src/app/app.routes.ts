import { Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { DescriptionComponent } from './pages/description/description.component';

export const routes: Routes = [
  {
    path:'produtos',
    component:ListProductsComponent
  },
  {
    path:'categorias',
    component: ListCategoriesComponent
  },
  {
    path:'descricao',
    component: DescriptionComponent
  }

];
