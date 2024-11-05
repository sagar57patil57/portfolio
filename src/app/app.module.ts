import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from './footer/footer.component';
import { WidgetComponent } from './widget/widget.component';
import { SharedModule } from './shared/shared.module';
import { ModalService } from './services/modal.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { CommandsService } from './services/commands.service';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './services/notification.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { SettingsComponent } from './settings/settings.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { EditorComponent } from './editor/editor.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { CameraComponent } from './camera/camera.component';
import { CalendarComponent } from './calender/calender.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    WidgetComponent,
    TerminalComponent,
    NotificationComponent,
    CalculatorComponent,
    FileExplorerComponent,
    SettingsComponent,
    PortfolioComponent,
    SplashScreenComponent,
    EditorComponent,
    CameraComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    PdfViewerModule,
    CodeEditorModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
],
  providers: [
    ModalService,
    CommandsService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
