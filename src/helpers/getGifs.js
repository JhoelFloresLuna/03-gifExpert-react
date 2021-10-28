export const getGifs = async (category) => {
    const URL =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=TdPVsXWD2627bQ4Da1mMd8uI9lvVgihS`;

    const { data } = await fetch(URL).then((res) => res.json());

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    //console.log(gifs);
    return gifs;
  };