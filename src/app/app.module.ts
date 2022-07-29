import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {CourseService} from "./shared/course-service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {OfferListComponent} from './offer-list/offer-list.component';
import {OfferListItemComponent} from './offer-list-item/offer-list-item.component';
import {OfferService} from "./shared/offer-service";
import {AppointmentService} from "./shared/appointment-service";
import {UserService} from "./shared/user-service";
import {CommentService} from "./shared/comment-service";
import {AuthenticationService} from "./shared/authentication-service";
import {DetailComponent} from './detail/detail.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TokenInterceptorService} from './shared/token-interceptor.service';
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NavigationComponent} from './navigation/navigation.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseListItemComponent,
    OfferListComponent,
    OfferListItemComponent,
    DetailComponent,
    LoginComponent,
    NavigationComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
