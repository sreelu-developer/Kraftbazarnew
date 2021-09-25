import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AuthGuard } from './auth.guard';
import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ValidateproductsComponent } from './validateproducts/validateproducts.component';
import { FormsModule } from '@angular/forms';
import { VerifyproductComponent } from './verifyproduct/verifyproduct.component';
import { UpdateComponent } from './update/update.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CraftlistComponent } from './craftlist/craftlist.component';
import { SinglecraftComponent } from './singlecraft/singlecraft.component';
import { DeletecraftComponent } from './deletecraft/deletecraft.component';

// import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
// import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { ValidateproductsComponent } from './validateproducts/validateproducts.component';

const routes: Routes = [{path:'',component:WelcomeComponent},
// {path:'validate', component:ValidateproductsComponent},
// {path:'checkreview',component:CheckreviewsComponent},
// {path:'user',component:UserComponent},
{path:'addproducts',component:AddProductsComponent},
{path:'validate',canActivate:[AuthGuard],
component:ValidateproductsComponent},
{path:'checkreview',component:CheckreviewsComponent},
{path:'user',component:UserComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'validate/:id', component:VerifyproductComponent},
{path:'update/:id', component:UpdateComponent}
{path:'home',component:HomeComponent},
{path:'craftlist',component:CraftlistComponent},
{path:'singlecraft',component:SinglecraftComponent},
{path:'deletecraft',component:DeletecraftComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
