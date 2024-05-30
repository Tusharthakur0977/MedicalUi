export const fetchData = async () => {
  try {
    let response = await fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2024-04-21&sortBy=publishedAt&apiKey=5d0f520a671845f68060eba14e94862f',
    );
    let result = await response.json();
    return result.slice(0, 24);
  } catch (error) {
    console.error(error);
  }
};
