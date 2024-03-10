import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import APIService from './src/business-logic/APIService';
import IUser from './src/business-logic/model/IUser';
import styles from './src/ui/assets/styles/AppStyles';
import ContentUnavailableView from './src/ui/components/ContentUnavailableView';
import ListItem from './src/ui/components/ListItem';

function App(): React.JSX.Element {
  const docIcon = require('./src/ui/assets/images/doc.on.doc.png');
  const trashIcon = require('./src/ui/assets/images/trash.png');
  const peopleIcon = require('./src/ui/assets/images/person.2.fill.png');

  const [searchText, setSearchText] = useState<string>('');
  const [numberOfItemsSelected, setNumberOfItemsSelected] = useState<number>(0);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);

  async function onChangeText(text: string) {
    setSearchText(text);
    if (text.length === 0) {
      setUsers([]);
    } else {
      const apiUsers = await APIService.getUsers(text);
      setUsers(apiUsers);
    }
  }

  function duplicateItems() {}

  function removeItems() {}

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
          <TouchableOpacity onPress={duplicateItems}>
            <Image source={docIcon} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={removeItems}>
            <Image source={trashIcon} style={styles.smallIcon} />
          </TouchableOpacity>
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
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
}

export default App;
