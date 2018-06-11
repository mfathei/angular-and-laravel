import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const appRoutes: Routes = [
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }