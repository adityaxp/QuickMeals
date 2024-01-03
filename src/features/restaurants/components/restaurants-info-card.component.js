import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

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
    restaurantIsClosedTemporarily,
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
        <Title>{restaurantName}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {restaurantIsClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {restaurantOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Image
                style={{ width: 15, height: 15 }}
                source={{ uri: restaurantIcon }}
              />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{restaurantAddress}</Address>
      </Info>
    </RestaurantCard>
  );
};
