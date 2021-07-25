/* eslint-disable import/prefer-default-export */
export const timeAgo = (utc) => {
  const now = new Date(Date.now());
  const timestamp = new Date(0);
  timestamp.setUTCSeconds(utc);
  const daysAgo = now.getDay() - timestamp.getDay();
  // Reddit timestamp bug, causes created property to be 8 hours ahead
  const hoursAgo = now.getHours() - (timestamp.getHours() - 8);
  const minutesAgo = now.getMinutes() - timestamp.getMinutes();
  if (daysAgo > 0) return `${daysAgo} days ago`;
  if (hoursAgo > 0) return `${hoursAgo} hours ago`;
  return `${minutesAgo} minutes ago`;
};
