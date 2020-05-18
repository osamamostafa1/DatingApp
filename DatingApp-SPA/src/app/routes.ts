import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';
import { MemberListResolver } from './_resolvers/member-list.resolvers';
import { MemberDetailResolver } from './_resolvers/member-detail.resolvers';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolvers';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[

            {path: 'members', component:MemberListComponent , resolve: {users: MemberListResolver}},

            {path: 'members/:id', component:MemberDetailComponent , resolve: {user: MemberDetailResolver}},

            {path: 'member/edit' , component:MemberEditComponent , resolve:{user: MemberEditResolver} ,
             canDeactivate:[PreventUnsavedChangesGuard]},

            {path: 'messages' , component:MessagesComponent},
            
            {path: 'lists', component:ListsComponent},
        ]
    },
    {path: '**' , redirectTo:'' , pathMatch:'full'}
];