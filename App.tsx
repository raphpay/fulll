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
import ListItem from './src/ui/components/ListItem';

function App(): React.JSX.Element {
  const docIcon = require('./src/ui/assets/images/doc.on.doc.png');
  const trashIcon = require('./src/ui/assets/images/trash.png');
  const peopleIcon = require('./src/ui/assets/images/person.2.fill.png');

  const [searchText, setSearchText] = useState<string>('');
  const [numberOfItemsSelected, setNumberOfItemsSelected] = useState<number>(0);
  const [users, setUsers] = useState<IUser[]>([]);

  async function onChangeText(text: string) {
    setSearchText(text);
    const apiUsers = await APIService.getUsers(text);
    setUsers(apiUsers);
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
          <TouchableOpacity>
            <Image source={docIcon} style={styles.smallIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={trashIcon} style={styles.smallIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.scrollView}
        data={users}
        renderItem={renderItem => <ListItem user={renderItem.item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default App;
