import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import Result from './Result';

export default function ListResults({movies}) {

      return (
        <SafeAreaView style={styles.container}>
          <FlatList 
            data={movies}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
              <Result 
                key={item.id.toString()} 
                movieTitle={item.title} 
                releaseDate={item.release_date}
                posterUrl={item.poster_path}
              />}
          />
        </SafeAreaView>
      )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: 'white'
  }
})
