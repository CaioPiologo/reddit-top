// With GraphQL this would change to fetch the backend data with a sql query
export const fetchTop = async (params) => {
  let url = 'https://www.reddit.com/top.json';
  url += `?${new URLSearchParams(params).toString()}`;
  const redditTop = await fetch(url, {
    method: 'GET',
  });
  return await redditTop.json();
};
