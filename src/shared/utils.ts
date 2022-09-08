export const prefixPathWithPublicHomeUrl = (url: string) => {
  return process.env.PUBLIC_URL + '/' + url.replace(/^\//, "");
}