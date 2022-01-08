import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import MasterVue from '../views/MasterVue.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Infos from '../views/Infos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MasterVue',
    children: [{
      path: 'infos',
      name: 'infos',
      component: Infos,
    }],
    component: MasterVue,
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/infos',
  //   components: {
  //     default: MasterVue,
  //     children: [{
  //       path: '/infos',
  //       name: 'infos',
  //       default: Infos,
  //     }]

  //   }
  //   ,
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,

  },

  {
    path: '/register',
    name: 'Register',
    component: Register,

  },
  {
    path: '/about',
    name: 'About',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



function isTokenExpired(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const { exp } = JSON.parse(jsonPayload);
  const expired = Date.now() >= exp * 1000
  return expired
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("TokenAuth")) {
      if (isTokenExpired(localStorage.getItem("TokenAuth"))) {
        localStorage.clear();
        alert("Session Expirer : Reconnexion requise")
        next({ name: 'Login' })
      } else {
        next()
      }
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})
export default router
