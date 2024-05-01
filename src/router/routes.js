

const routes = [

  {
    path: '/login',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') }
    ]
  },
  {
    path: '/organization',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/structure.vue') }
    ]
  },

  {
    path: '/menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/main_menu/index.vue') }
    ]
  },
//user
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/index.vue') }
    ]
  },
  {
    path: '/user/add',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/add.vue') }
    ]
  },
  {
    path: '/user/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/edit.vue') }
    ]
  },
  {
    path: '/user/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/profile.vue') }
    ]
  },
  {
    path: '/user/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/detail.vue') }
    ]
  },
  {
    path: '/user/role',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/role.vue') }
    ]
  },
  {
    path: '/user/history',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/history.vue') }
    ]
  },

  {
    path: '/journal',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'outgoing', component: () => import('pages/journal/outgoing.vue') },
      { path: 'doverennosti', component: () => import('pages/journal/doverennosti.vue') },
      { path: 'employment_contracts', component: () => import('pages/journal/employment_contracts.vue') },
      { path: 'orders', component: () => import('pages/journal/orders.vue') },
    ]
  },
  {
    path: '/task',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'own', component: () => import('pages/task/user_tasks.vue') },
      { path: 'all', component: () => import('pages/task/admin_tasks.vue') },
    ]
  },
  {
    path: '/catalog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'subworkers', component: () => import('pages/catalog/subworkers.vue') },
      { path: 'suppliers', component: () => import('pages/catalog/suppliers.vue') },
      { path: 'objects', component: () => import('pages/catalog/objects.vue') },
      { path: 'objects/:id', component: () => import('pages/catalog/object.vue') },
      { path: 'clients', component: () => import('pages/catalog/clients.vue') },

    ]
  },
  {
    path: '/form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'forms', component: () => import('pages/form/forms.vue') },
      { path: 'forms/:id', component: () => import('pages/form/form.vue') },
      { path: 'stress_form', component: () => import('pages/form/stress_form_structure.vue') },
      { path: 'user_stress_forms', component: () => import('pages/form/stress_forms_for_user.vue') },
      { path: 'admin_stress_forms', component: () => import('pages/form/stress_forms_for_admin.vue') },
      { path: 'user_stress_form/:uuid', component: () => import('pages/form/stress_form_for_user.vue') },
      { path: 'filled_stress_form/:uuid', component: () => import('pages/form/filled_stress_form.vue') },
    ]
  },
  {
    path: '/reports',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/reports/index.vue') },
      { path: 'report/:user_id', component: () => import('pages/reports/report.vue') },
      { path: 'marks', component: () => import('pages/reports/marks.vue') },
    ]
  },
//user


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
