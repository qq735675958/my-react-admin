import {
    Dashboard,
    Login,
    NotFound,
    Settings
} from './route'

export const mainRouter = [{
    pathname:'/login',
    component:Login
},{
    pathname:'/404',
    component:NotFound
}]

export const adminRouter = [{
    pathname:'/admin/dashboard',
    exact:true,
    component:Dashboard
},{
    pathname:'/admin/settings',
    exact:true,
    component:Settings
}]