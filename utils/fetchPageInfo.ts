import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
  const res = await fetch(`https://my-profile-virid-phi.vercel.app/api/getPageInfo`);

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
}