import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Section,
  SectionEnd,
  Rating,
  Info,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    restaurantName = "Some Restaurant",
    restaurantIcon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    restaurantPhotos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    restaurantAddress = "address",
    restaurantOpenNow = true,
    restaurantRatings = 4,
    restaurantIsClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(restaurantRatings)));
  let i = 0;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={restaurantName}
        source={{ uri: restaurantPhotos[0] }}
      />
      <Info>
        <Text variant="label">{restaurantName}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml key={i++} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {restaurantIsClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {restaurantOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: restaurantIcon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{restaurantAddress}</Address>
      </Info>
    </RestaurantCard>
  );
};
