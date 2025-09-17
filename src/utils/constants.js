export const MENU_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";

export const APP_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png";

export const USER_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
