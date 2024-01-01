import { SafeAreaView, StyleSheet, Text, Platform, View, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';


export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
      <Searchbar placeholder="Search"/>
      </View>
      <View style={styles.listContainer}>
        <Text>list</Text>
      </View>
        
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 10,
    elevation: 10,
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: "blue"
  }

});
