import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertorPage } from './convertor.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertorPageRoutingModule {}
