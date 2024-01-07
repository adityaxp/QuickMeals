import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      restaurantOpenNow:
        restaurant.opening_hours && restaurant.opening_hours.open_now,
      restaurantIsClosedTemporarily:
        restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((error) => {
    console.error("Error");
  });
