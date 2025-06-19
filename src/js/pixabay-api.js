import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchImagesByQuery = async (searchedQuery, page = 1) => {
  const apiKey = '50853777-8fecba6f69a77bb52efd7171d';
  // temp set it to `/api` to show the redirrect problem to http with github pages
	const response = await axios.get("/api/", {
    params: {
      key: apiKey,
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    }
  });
  return response.data
};
