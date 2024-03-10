import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import IUser from '../../business-logic/model/IUser';

import styles from '../assets/styles/components/ListItemStyles';

import IconButton from './IconButton';

type ListItemProps = {
  user: IUser;
  selectedUsers: IUser[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  numberOfItemsSelected: number;
  setNumberOfItemsSelected: React.Dispatch<React.SetStateAction<number>>;
  isEditing: boolean;
};

function ListItem(props: ListItemProps): React.JSX.Element {
  const {
    user,
    selectedUsers,
    setSelectedUsers,
    numberOfItemsSelected,
    setNumberOfItemsSelected,
    isEditing,
  } = props;
  const checkmarkFill = require('../assets/images/checkmark.square.fill.png');
  const checkmarkEmpty = require('../assets/images/square.png');
  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);

  function toggleUserSelection() {
    let newArray: IUser[] = selectedUsers;
    if (selectedUsers && selectedUsers.includes(user)) {
      const index = newArray.indexOf(user);
      newArray.splice(index, 1);
      setNumberOfItemsSelected(numberOfItemsSelected - 1);
      setIsUserSelected(false);
    } else {
      newArray.push(user);
      setNumberOfItemsSelected(numberOfItemsSelected + 1);
      setIsUserSelected(true);
    }
    setSelectedUsers(newArray);
  }

  return (
    <View style={styles.listItem}>
      {isEditing && (
        <IconButton
          iconSource={isUserSelected ? checkmarkFill : checkmarkEmpty}
          action={toggleUserSelection}
          containerStyle={styles.checkmarkIcon}
        />
      )}
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
