import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { initializeApp, FirebaseApp } from "firebase/app";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// const firebaseConfig = {
//   apiKey: "AIzaSyBL-fgcZpW68LMPze5Y4kunKmFP0jlSjbA",

//   authDomain: "quickmeals-4dfcb.firebaseapp.com",

//   projectId: "quickmeals-4dfcb",

//   storageBucket: "quickmeals-4dfcb.appspot.com",

//   messagingSenderId: "319212963121",

//   appId: "1:319212963121:web:b807966aa5624ec96a9c10",
// };
// if (FirebaseApp.app.le) {
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
// }

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     signInWithEmailAndPassword(auth, "<email>", "<password>")
  //       .then((user) => {
  //         console.log(user);
  //         setIsAuthenticated(true);
  //       })
  //       .catch((e) => {
  //         console.error(e);
  //       });
  //   }, 5000);
  // }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
