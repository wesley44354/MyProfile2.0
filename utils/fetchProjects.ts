import { Project } from "../typings";

export const fetchProjects = async() => {
  const res = await fetch(`https://my-profile-virid-phi.vercel.app/api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
}