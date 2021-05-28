import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componet/home/home.component';
import { ExperienciaProfissionalComponent } from './componet/experiencia-profissional/experiencia-profissional.component';
import { FormacaoAcademicaComponent } from './componet/formacao-academica/formacao-academica.component';
import { HabilidadesComponent } from './componet/habilidades/habilidades.component';
import { FerramentasComponent } from './componet/ferramentas/ferramentas.component';
import { CursosComplementaresComponent } from './componet/cursos-complementares/cursos-complementares.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienciaProfissionalComponent,
    FormacaoAcademicaComponent,
    HabilidadesComponent,
    FerramentasComponent,
    CursosComplementaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
