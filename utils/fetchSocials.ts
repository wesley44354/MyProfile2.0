import { Social } from "../typings";

export const fetchSocials = async() => {
  const res = await fetch(`https://my-profile-virid-phi.vercel.app/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
}