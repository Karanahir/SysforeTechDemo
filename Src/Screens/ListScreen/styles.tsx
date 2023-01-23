import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '3%',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
  itemView: {
    width: '95%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemView2: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemStyle: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 30,
    color: Colors.primaryColor,
    borderWidth: 1.0,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    borderColor: Colors.primaryColor,
  },
  inputView: {
    width: '75%',
    backgroundColor: '#FFF',
    fontSize: hp('2.5%'),
    textAlign: 'center',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
    alignSelf: 'center',
  },
});

export default styles;
