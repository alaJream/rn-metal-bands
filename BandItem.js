// BandItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BandItem({ band }) {
  const isBandActive = band.split === '-';
  const bandNameStyle = isBandActive ? styles.activeBandName : styles.splitBandName;

  return (
    <View style={styles.bandItemContainer}>
      <View>
        <Text style={bandNameStyle}>{band.band_name}</Text>
        <Text style={styles.yearFormed}>{band.formed}</Text>
      </View>
      <View>
        <Text style={styles.origin}>{band.origin}</Text>
        <Text style={styles.fans}>{(band.fans * 1000).toLocaleString()} fans</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bandItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  activeBandName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  splitBandName: {
    fontSize: 18,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  bandName: {
    fontSize: 18,
    color: '#fff',
  },
  yearFormed: {
    fontSize: 12,
    color: '#999',
  },
  origin: {
    fontSize: 18,
    color: '#fff',
  },
  fans: {
    fontSize: 12,
    color: '#999',
  },
});

export default BandItem;

