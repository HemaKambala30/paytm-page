import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function PaytmDashboard() {
  const handleClick = (name) => {
    Alert.alert(`${name} clicked!`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cashback Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Get Assured</Text>
        <Text style={styles.cashbackText}>CASHBACK</Text>
        <Text style={styles.bannerSubtitle}>on every alternate UPI payment</Text>
        <TouchableOpacity style={styles.bannerButton} onPress={() => handleClick('Activate Offer')}>
          <Text style={styles.bannerButtonText}>Activate Offer</Text>
        </TouchableOpacity>
      </View>

      {/* Money Transfer */}
      <Text style={styles.sectionTitle}>Money Transfer</Text>
      <View style={styles.row}>
        {[
          'Scan & Pay',
          'To Mobile',
          'To Bank A/c',
          'To Self A/c',
          'Balance & History',
          'Receive Money',
          'Refer & Win',
          'All UPI Services',
        ].map((item) => (
          <TouchableOpacity key={item} style={styles.iconButton} onPress={() => handleClick(item)}>
            <View style={styles.iconPlaceholder} />
            <Text style={styles.iconText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* UPI Lite & Cashback */}
      <View style={styles.rowSmall}>
        <TouchableOpacity style={styles.badge} onPress={() => handleClick('UPI Lite')}>
          <Text style={styles.badgeText}>UPI Lite: Activate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.badge} onPress={() => handleClick('Cashback Points')}>
          <Text style={styles.badgeText}>Cashback Points: 15</Text>
        </TouchableOpacity>
      </View>

      {/* Recharge & Bill Payments */}
      <Text style={styles.sectionTitle}>Recharge & Bill Payments</Text>
      <TouchableOpacity style={styles.qrButton} onPress={() => handleClick('Scan QR')}>
        <Text style={styles.qrButtonText}>Scan QR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  banner: {
    backgroundColor: '#c5e1f3',
    padding: 20,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cashbackText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0070c9',
  },
  bannerSubtitle: {
    fontSize: 12,
    marginBottom: 10,
  },
  bannerButton: {
    backgroundColor: '#0070c9',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bannerButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  iconButton: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#d1d1d1',
    borderRadius: 25,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 10,
    textAlign: 'center',
  },
  rowSmall: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  badgeText: {
    fontSize: 12,
  },
  qrButton: {
    backgroundColor: '#0070c9',
    margin: 16,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  qrButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
