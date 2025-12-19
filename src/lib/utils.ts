export function stringToColor(string: string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

export function getContrastColor(hexColor: string) {
  // Convert hex to RGB
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  
  // Calculate luminance
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  
  // Return black or white
  return (yiq >= 128) ? '#000000' : '#ffffff';
}

export function getInitials(name: string) {
  const chunks = name.trim().split(/\s+/);
  if (chunks.length === 1) {
    return chunks[0].substring(0, 2).toUpperCase();
  }
  return (chunks[0][0] + chunks[chunks.length - 1][0]).toUpperCase();
}
