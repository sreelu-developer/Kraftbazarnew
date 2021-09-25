import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateproductsComponent } from './validateproducts/validateproducts.component';
import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CheckproductreviewComponent } from './checkproductreview/checkproductreview.component';
import { VerifyproductComponent } from './verifyproduct/verifyproduct.component';
import { AddProductsComponent } from './add-products/add-products.component';
// import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateComponent } from './update/update.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CraftlistComponent } from './craftlist/craftlist.component';
import { SinglecraftComponent } from './singlecraft/singlecraft.component';
import { DeletecraftComponent } from './deletecraft/deletecraft.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateproductsComponent,
    CheckreviewsComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CheckproductreviewComponent,
    VerifyproductComponent,
    AddProductsComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WelcomeComponent,
    CraftlistComponent,
    SinglecraftComponent,
    DeletecraftComponent
  ],
  providers: [AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  } 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
