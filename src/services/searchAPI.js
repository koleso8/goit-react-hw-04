import axios from 'axios';

export const fetchPhotos = async ({ query, page = 1 }) => {
  const params = {
    headers: {
      'Accept-Version': 'v1',
    },
    params: {
      query,
      client_id: '2U6Nddaru5ZCUm0iXytoA8JGZaMmRo8ziRc-pTlRU8w',
      page,
      perPage: 10,
    },
  };
  const { data } = await axios.get(
    'https://api.unsplash.com/search/photos',
    params
  );
  return data;
};
