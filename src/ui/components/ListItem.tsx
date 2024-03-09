import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import IUser from '../../business-logic/model/IUser';
import styles from '../assets/styles/components/ListItemStyles';

type ListItemProps = {
  user: IUser;
};

function ListItem(props: ListItemProps): React.JSX.Element {
  const {user} = props;
  const checkmarkFill = require('../assets/images/checkmark.square.fill.png');
  const checkmarkEmpty = require('../assets/images/square.png');

  return (
    <View style={styles.listItem}>
      <Image source={checkmarkEmpty} style={styles.checkmarkIcon} />
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
        <Text>ID: {user.id}</Text>
        <Text>Login {user.login}</Text>
      </View>
      <TouchableOpacity style={styles.profileButton}>
        <Text>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListItem;
