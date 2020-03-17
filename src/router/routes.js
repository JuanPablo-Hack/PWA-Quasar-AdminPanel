
const routes = [
  { path: '/', component: () => import('pages/Login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/Index.vue') },
      { path: '/customizar', component: () => import('pages/Customizar.vue') },
      { path: '/peticiones', component: () => import('pages/Peticion.vue') },
      { path: '/perfil', component: () => import('pages/Perfil.vue') },
      { path: '/ventas', component: () => import('pages/Ventas.vue') },
      { path: '/transacciones', component: () => import('pages/Transacciones.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes