import { buildElement } from "./element-builder";

export const buildFooter = () => {
  const footer = buildElement("footer");
  const par = buildElement("p", ["footer-par"], "--Built by JuneDev");

  // build github elements and connect them
  const gh_link = buildElement("a");
  const gh_img = buildElement("img", ["ghlogo", "logos"]);
  gh_link.href = "https://github.com/JuneDev-html";
  gh_link.append(gh_img);

  // build youtube elements and connect them
  const yt_link = buildElement("a");
  const yt_img = buildElement("img", ["ytlogo", "logos"]);
  yt_link.href = "https://www.youtube.com/channel/UC8ryMqGJPToOXdwj4IqwE-Q";
  yt_link.append(yt_img);

  par.append(gh_link, yt_link);
  footer.append(par);

  return footer;
};
