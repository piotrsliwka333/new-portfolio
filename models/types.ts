type RoutingPathOptions = "/about-me" | "/contact" | "/offers" | "/";

interface NavItem {
  URL: RoutingPathOptions;
  text: string;
  target?: "blank";
}

interface MainNavItem {
  URL: RoutingPathOptions;
  text: string;
  target?: "blank";
  children?: NavItem[];
}
