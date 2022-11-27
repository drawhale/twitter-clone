export const elapsedTime = (dateString: string) => {
  const dateObj = new Date(dateString);
  const start = dateObj.getTime();
  const end = Date.now(); // 현재 날짜

  const diff = end - start; // 경과 시간

  const times = [
    { time: "시간", milliSeconds: 1000 * 60 * 60 },
    { time: "분", milliSeconds: 1000 * 60 },
    { time: "초", milliSeconds: 1000 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 24) {
      break;
    }

    if (betweenTime > 0) {
      return `${betweenTime} ${value.time}`;
    }
  }

  return dateObj.toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
};
