import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/bg2.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
`;

export const AccountContainer = styled.View`
  background-color: rgba(169, 169, 169, 0.2);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 60%;
  height: 40%;
  position: absolute;
  top: 10px;
  padding: ${(props) => props.theme.space[2]};
`;
