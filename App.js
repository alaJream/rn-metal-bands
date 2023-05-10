import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import metalBands from './metal.json';
import BandItem from './BandItem';

// bands screen component
function Bands() {
  return (
    <FlatList
      data={metalBands}
      renderItem={({ item }) => <BandItem band={item} />}
      keyExtractor={(item) => item.band_name}
      style={{ ...styles.bandsContainer, backgroundColor: '#000' }} 
    />
  );
}

// stat screen component
function Stats() {
  const allStyles = metalBands.flatMap((band) => band.style.split(',').map((s) => s.trim()));
  const uniqueStyles = [...new Set(allStyles)];
  const totalFans = metalBands.reduce((sum, band) => sum + band.fans * 1000, 0);
  const uniqueCountries = new Set(metalBands.map((band) => band.origin)).size;
  const activeBands = metalBands.filter((band) => band.split === '-').length;
  const splitBands = metalBands.length - activeBands;

  return (

    <View style={styles.statsContainer}>
      <View style={styles.centeredContent}>
        <Text style={styles.statsTitle}>METAL 🤘</Text>
        <Text style={styles.statsLabel}>Fans: {totalFans.toLocaleString()}</Text>
        <Text style={styles.statsLabel}>Countries: {uniqueCountries}</Text>
        <Text style={styles.statsLabel}>Active: {activeBands}</Text>
        <Text style={styles.statsLabel}>Split: {splitBands}</Text>
        <Text style={styles.statsLabel}>Styles: {uniqueStyles.length}</Text>
      </View>
    </View>
  );
}

// styles screen component
function Styles() {
  const allStyles = metalBands.flatMap((band) => band.style.split(',').map((s) => s.trim()));
  const uniqueStyles = [...new Set(allStyles)];

  const renderItem = ({ item }) => {
    return <Text style={styles.styleItem}>{item}</Text>;
  };

  return (
    <View style={styles.stylesContainer}>
      <FlatList
        data={uniqueStyles}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#111',
          inactiveBackgroundColor: '#000', 
        }}
      >
        <Tab.Screen
          name="Bands"
          component={Bands}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="hand-rock" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="chart-bar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Styles"
          component={Styles}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="signature" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    backgroundColor: '#000',
    padding: 20,
    flex: 1,
  },
  statsTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
  },
  stylesContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  styleItem: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  statsContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});