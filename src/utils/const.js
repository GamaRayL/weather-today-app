export const getDate = (weatherDataFromApi) => {
  return new Date(
    weatherDataFromApi.location.localtime.replace(/-/g, "/")
  ).toLocaleString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
