import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComplementaresComponent } from './componet/cursos-complementares/cursos-complementares.component';
import { ExperienciaProfissionalComponent } from './componet/experiencia-profissional/experiencia-profissional.component';
import { FerramentasComponent } from './componet/ferramentas/ferramentas.component';
import { FormacaoAcademicaComponent } from './componet/formacao-academica/formacao-academica.component';
import { HabilidadesComponent } from './componet/habilidades/habilidades.component';
import { HomeComponent } from './componet/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "experiencia-profissional", component: ExperienciaProfissionalComponent},
  {path: "formacao-academica", component: FormacaoAcademicaComponent},
  {path: "habilidades", component: HabilidadesComponent},
  {path: "ferramentas", component: FerramentasComponent},
  {path: "cursos-complementares", component: CursosComplementaresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
