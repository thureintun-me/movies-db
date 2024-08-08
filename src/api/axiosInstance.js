import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzE3MjRkMzhhMDAxNjhlZmRhMTM4NWIwYjVlZmQ5YyIsIm5iZiI6MTcyMzA5MjE5MS45MzU1MDgsInN1YiI6IjY0YTU5MjJlOGM0NGI5MDE0ZTNiYWNlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-4k3wid9Uh7ndO2F7EdcgXaQVQdieA1HhMkf7DuIVgo'
    }
});


export const getRequest = async (URI) => await axiosInstance.get(URI);
export const postRequest = async (URI, payload) =>
 await axiosInstance.post(URI, payload);
export const putRequest = async (URI, payload) => await axiosInstance.put(URI, payload);
export const patchRequest = async (URI, payload) =>
  await axiosInstance.patch(URI, payload);
export const deleteRequest = async (URI) => await axiosInstance.delete(URI);


