const tiktok = require('tiktok-app-api');

let tiktokApp;

(async () => {
  tiktokApp = await tiktok();

  const iterator = tiktokApp.getTrendingVideos();
  const videosResult = await iterator.next();
  const trendingVideos = videosResult.value;

  console.log('====================================');
  console.log(trendingVideos);
  console.log('====================================');
//   const tags = trendingVideos.map(v => v.tags);

//   console.log(tags);
})();
