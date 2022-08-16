// eslint-disable-next-line no-console
import TikTokScraper from "tiktok-scraper";
console.log('Hello world!');

(async () => {
    try {
        const posts = await TikTokScraper.user('USERNAME', {
            number: 100,
            sessionList: ['_ttp=61cdd9a7e233a8ec431f95f46f17754e;']
        });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();