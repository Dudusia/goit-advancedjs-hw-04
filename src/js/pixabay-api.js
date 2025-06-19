import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchImagesByQuery = async (searchedQuery, perPage, page = 1) => {
  const apiKey = '50853777-8fecba6f69a77bb52efd7171d';
  // set this way to prevent the following error:
  // Mixed Content: The page at 'https://dudusia.github.io/goit-advancedjs-hw-04/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://pixabay.com/api/?key=50853777-8fecba6f69a77bb52efd7171d&q=%D0%BA%D1%83%D0%BC%D0%B0&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=1'. This request has been blocked; the content must be served over HTTPS.
  // example from the docs: https://pixabay.com/api/docs/
	const response = await axios.get("/api/", {
    params: {
      key: apiKey,
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    }
  });
  return response.data
};
