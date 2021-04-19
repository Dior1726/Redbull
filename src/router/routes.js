
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("src/pages/ReportPage.vue"),
        name: "ReportPage"
      },
      {
        path: "/portfolio",
        component: () => import("src/pages/PortfolioPage.vue"),
        name: "Projects",
        meta: {
          child: true
        }
      },
      {
        path: "/cash",
        component: () => import("src/pages/CashPage.vue"),
        name: "Cash",
        meta: {
          child: true
        }
      },
      {
        path: "/sales",
        component: () => import("src/pages/SalesPage.vue"),
        name: "Sales",
        meta: {
          child: true
        }
      },
      {
        path: "/leads",
        component: () => import("src/pages/LeadsPage.vue"),
        name: "Leads",
        meta: {
          child: true
        }
      },
      {
        path: "/step",
        component: () => import("src/pages/Home.vue"),
        name: "Some"
      },
      {
        path: "/report/:id",
        component: () => import("src/pages/ReportPageItem.vue"),
        name: "ReportItem"
      },
      {
        path: "/list",
        component: () => import("src/pages/ListPage.vue"),
        name: "List"
      },
      {
        path: "/user",
        component: () => import("src/pages/UserPage.vue"),
        name: "Profile"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes
