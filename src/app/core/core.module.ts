import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { StartComponent } from './start/start.component';

@NgModule({
    declarations: [
        HomeComponent,
        StartComponent
    ],
    imports: [CommonModule, CoreRoutingModule],
    exports: [CoreRoutingModule]
})
export class CoreModule {
}