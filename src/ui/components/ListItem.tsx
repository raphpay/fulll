import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../assets/styles/components/ListItemStyles';

function ListItem(): React.JSX.Element {
  const checkmarkFill = require('../assets/images/checkmark.square.fill.png');
  const checkmarkEmpty = require('../assets/images/square.png');

  return (
    <View style={styles.listItem}>
      <Image source={checkmarkEmpty} style={styles.checkmarkIcon} />
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
        <Text>ID</Text>
        <Text>Login</Text>
      </View>
      <TouchableOpacity style={styles.profileButton}>
        <Text>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListItem;
