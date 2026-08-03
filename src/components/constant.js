export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmRhNGYwYzVmNGRkZWYzZDM1N2M4ZTExNjRmZjAzMSIsIm5iZiI6MTc4NTU5MjIxNC40Njg5OTk5LCJzdWIiOiI2YTZkZjk5Njc3ZDRkNjQ5OGQyNDZhNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NYc-MrZk846GfQ3t1EOUcMuMIThtTpwUP6Nzrd5S-Fk";

export const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${TMDB_ACCESS_TOKEN}` },
};
