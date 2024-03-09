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
});

export default styles;
