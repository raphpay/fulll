import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import IUser from '../../business-logic/model/IUser';
import styles from '../assets/styles/components/ListItemStyles';

type ListItemProps = {
  user: IUser;
  selectedUserIDs: string[];
  setSelectedUserIDs: React.Dispatch<React.SetStateAction<string[]>>;
};

function ListItem(props: ListItemProps): React.JSX.Element {
  const {user, selectedUserIDs, setSelectedUserIDs} = props;
  const checkmarkFill = require('../assets/images/checkmark.square.fill.png');
  const checkmarkEmpty = require('../assets/images/square.png');
  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);

  function toggleUserSelection() {
    let newArray: string[] = selectedUserIDs;
    if (selectedUserIDs && selectedUserIDs.includes(user.id)) {
      const index = newArray.indexOf(user.id);
      newArray.splice(index, 1);
      setIsUserSelected(false);
    } else {
      console.log('2');
      newArray.push(user.id);
      setIsUserSelected(true);
    }
    setSelectedUserIDs(newArray);
  }

  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        style={styles.checkmarkIcon}
        onPress={toggleUserSelection}>
        <Image
          source={isUserSelected ? checkmarkFill : checkmarkEmpty}
          style={styles.checkmarkIcon}
        />
      </TouchableOpacity>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
        <Text>ID: {user.id}</Text>
        <Text>Login: {user.login}</Text>
      </View>
      <TouchableOpacity style={styles.profileButton}>
        <Text>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListItem;
