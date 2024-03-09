import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#929292',
    height: 64,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  searchInput: {
    height: 55,
    width: '100%',
    backgroundColor: '#d6d6d6',
    borderRadius: 10,
  },
  scrollViewHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  smallIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  scrollView: {
    paddingTop: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
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
