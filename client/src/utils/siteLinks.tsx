import common from "../assets/locales/common.json";

export interface ISiteLink {
  name: string;
  targetId: string;
  callback?: Function;
}

export interface ISiteLinks {
  home: ISiteLink;
}

export const getSiteLinks = (): ISiteLinks => ({
  home: { name: common.home, targetId: `${common.home}-section` },
});
