const bgURL = `https://source.unsplash.com/`;
const days = ["일", "월", "화", "수", "목", "금", "토"];

const getCurrentTime = () => {
  const time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1;
  let date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
  let day = time.getDay();

  let h = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  let m = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  let s = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  return {
    ymd: `${year}-${month}-${date}-${days[day]}`,
    hms: `${h}:${m}:${s}`,
  };
};

const getBackgroundImage = (w, h, season) => {
  const image = new Image();
  const width = w;
  const height = h;
  image.src = `${bgURL}${width}x${height}/?${season}`;
  image.classList.add("bgImg");
  return image;
};

export { getBackgroundImage, getCurrentTime };
