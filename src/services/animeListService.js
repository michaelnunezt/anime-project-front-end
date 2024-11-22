import axios from './interceptors'

const BASE_URL = `${import.meta.env.VITE_BACK_END_URL}/api/anime?page=1`
console.log(BASE_URL);

export const fetchAnimeList = async () => {
  const { data } = await axios.get(BASE_URL)
  return data;
  
}