import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

import APIService from './src/business-logic/APIService';
import IUser from './src/business-logic/model/IUser';

import styles from './src/ui/assets/styles/AppStyles';

import ContentUnavailableView from './src/ui/components/ContentUnavailableView';
import IconButton from './src/ui/components/IconButton';
import ListItem from './src/ui/components/ListItem';

function App(): React.JSX.Element {
  const docIcon = require('./src/ui/assets/images/doc.on.doc.png');
  const trashIcon = require('./src/ui/assets/images/trash.png');
  const peopleIcon = require('./src/ui/assets/images/person.2.fill.png');
  const editIcon = require('./src/ui/assets/images/square.and.pencil.png');

  const [searchText, setSearchText] = useState<string>('');
  const [numberOfItemsSelected, setNumberOfItemsSelected] = useState<number>(0);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  async function onChangeText(text: string) {
    setSearchText(text);
    if (text.length === 0) {
      setUsers([]);
    } else {
      try {
        const apiUsers = await APIService.getUsers(text);
        setUsers(apiUsers);
      } catch (error) {
        const castedError = error as Error;
        Alert.alert('An error occured', castedError.message);
      }
    }
  }

  function duplicateItems() {
    const originalArray = selectedUsers;
    const selectedDuplicatesArray = originalArray.concat(originalArray);
    const duplicatedArray = [...originalArray, ...users];
    setSelectedUsers(selectedDuplicatesArray);
    setNumberOfItemsSelected(selectedUsers.length);
    setUsers(duplicatedArray);
  }

  function removeItems() {
    const originalArray = users;
    for (const userToRemove of selectedUsers) {
      const indexToRemove = originalArray.indexOf(userToRemove);
      originalArray.splice(indexToRemove, 1);
    }
    setSelectedUsers([]);
    setNumberOfItemsSelected(selectedUsers.length);
    setUsers(originalArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Github Search</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          placeholder={'Search Input'}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.scrollViewHeader}>
        <Text>{numberOfItemsSelected} elements selected</Text>
        <View style={styles.iconContainer}>
          {isEditing && (
            <>
              <IconButton iconSource={docIcon} action={duplicateItems} />
              <IconButton iconSource={trashIcon} action={removeItems} />
            </>
          )}

          <IconButton
            iconSource={editIcon}
            action={() => setIsEditing(!isEditing)}
          />
        </View>
      </View>
      {users.length === 0 ? (
        <ContentUnavailableView
          title={'No user searched'}
          message={'Search for a user'}
          image={<Image source={peopleIcon} />}
        />
      ) : (
        <FlatList
          style={styles.scrollView}
          data={users}
          renderItem={renderItem => (
            <ListItem
              user={renderItem.item}
              selectedUsers={selectedUsers}
              setSelectedUsers={setSelectedUsers}
              numberOfItemsSelected={numberOfItemsSelected}
              setNumberOfItemsSelected={setNumberOfItemsSelected}
              isEditing={isEditing}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
}

export default App;
