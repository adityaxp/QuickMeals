import React from "react";
import { Card, Text } from "react-native-paper";
import { styled } from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    restaurantName = "Some Restaurant",
    restaurantIcon,
    restaurantPhotos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    restaurantAddress = "address",
    restaurantOpenNow = true,
    restaurantRatings = 4,
    restaurantIsClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={restaurantName}
        source={{ uri: restaurantPhotos[0] }}
      />
      <Title>{restaurantName}</Title>
    </RestaurantCard>
  );
};
