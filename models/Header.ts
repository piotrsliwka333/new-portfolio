import { Link } from "./common/Link";
import { MainLink } from "./common/MainLink";

export interface Header {
  logoText: string;
  mainLinks: MainLink[];
  button: Link;
}
