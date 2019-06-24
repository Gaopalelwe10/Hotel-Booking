import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [{path:"" , component: MenuComponent, children: [
                        {path:"", component: HomeComponent},
                        {path:"home", component: HomeComponent},
                        {path:"book", component: BookingComponent},
                        {path:"bookingform", component: BookingformComponent},
                        {path:"gallary", component: GallaryComponent},
                        {path:"confirm", component: ConfirmComponent}
                        ]},
                        {path:"confirm", component: ConfirmComponent},
                        {path:"book", component: BookingComponent},
                        {path:"bookingform", component: BookingComponent}
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
