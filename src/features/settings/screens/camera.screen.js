import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Button } from "react-native-paper";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
})`
  position: absolute;
  top: 525px;
  left: 140px;
`;

const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
      ></ProfileCamera>
      <CameraButton onPress={snap}>Snap</CameraButton>
    </CameraContainer>
  );
};
