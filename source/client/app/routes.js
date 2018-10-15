import AppRoot from './containers/AppRoot'
import { Home } from './components/Home/Home'
import { About } from './components/About/About';
import NotFound from './components/NotFound/NotFound'

export default [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component:Home
      },
      {
        path:'/about',
        exact:true,
        component:About
      },
      {
        path:'*',
        component: NotFound
      }
    ]
  }
]
