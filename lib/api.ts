import axios from 'axios';

export const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
      baseURL: "https://my-profile-virid-phi.vercel.app/"
})