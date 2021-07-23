export const timeAgo = (utc) => {
  const now = new Date(Date.now());
  const timestamp = new Date(0);
  timestamp.setUTCSeconds(utc);
  const daysAgo = now.getDay() - timestamp.getDay();
  const hoursAgo = now.getHours() - timestamp.getHours();
  const minutesAgo = now.getMinutes() - timestamp.getMinutes();
  if (daysAgo > 0) return `${daysAgo} days ago`;
  if (hoursAgo > 0) return `${hoursAgo} hours ago`;
  return `${minutesAgo} minutes ago`;
};
