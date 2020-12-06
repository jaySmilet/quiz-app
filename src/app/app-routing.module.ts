import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'score', component: ScoreComponent},
  { path: '', redirectTo: '/register', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
