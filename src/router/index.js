import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "Home Page",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: "About Me",
      },
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/Services.vue"),
      meta: {
        title: "My Services",
      },
    },
    {
      path: "/sociality",
      name: "sociality",
      component: () => import("@/views/Sociality.vue"),
      meta: {
        title: "Contact & Blog",
      },
    },
    // Redirect to home if route doesn't exist
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  // Optional: Customize scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Optional: Update document title when route changes
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Your Website";
  next();
});

export default router;
