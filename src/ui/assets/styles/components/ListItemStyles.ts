import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#d6d6d6',
    borderRadius: 20,
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#3c8681',
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  emptyView: {
    flex: 1,
  },
  checkmarkIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    position: 'absolute',
    top: 15,
    left: 10,
  },
  profileButton: {
    backgroundColor: '#479ff8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: '50%',
  },
});

export default styles;
