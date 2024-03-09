import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './src/ui/assets/styles/AppStyles';

function App(): React.JSX.Element {
  const docIcon = require('./src/ui/assets/images/doc.on.doc.png');
  const trashIcon = require('./src/ui/assets/images/trash.png');
  const checkmarkFill = require('./src/ui/assets/images/checkmark.square.fill.png');
  const checkmarkEmpty = require('./src/ui/assets/images/square.png');

  const [searchText, setSearchText] = useState<string>('');
  const [numberOfItemsSelected, setNumberOfItemsSelected] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Github Search</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
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
      <ScrollView style={styles.scrollView}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
