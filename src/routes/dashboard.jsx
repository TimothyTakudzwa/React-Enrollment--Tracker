import Dashboard from "views/Dashboard/Dashboard";
import Students from "views/Students/Students";
import Typography from "views/Typography/Typography";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Homepage",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/students",
    name: "Students",
    icon: "pe-7s-user",
    component: Students
  },
  {
    path: "/table",
    name: "Courses",
    icon: "pe-7s-note2",
    component: Students
  },
  {
    path: "/typography",
    name: "Enrolment",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
