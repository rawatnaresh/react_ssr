import News from "./News/News";
import Home from "./Home";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    exact: true,
    component: News
  }
];

export default routes;