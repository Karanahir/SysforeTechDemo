import React, {useState, useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
// redux hooks
import {useSelector, useDispatch} from 'react-redux';
// actions
import {switchMode} from '../Redux/Actions';

function Header({navigation, title, headerStyle}): JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    handleThemeChange();
  };

  const theme = useSelector(state => state.theme);
  // initialize action dispatcher
  const dispatch = useDispatch();
  // define a component mode state
  const [mode, setMode] = useState(theme.mode);

  // Handle changing the theme mode
  const handleThemeChange = () => {
    dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
  };
  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={[styles.container, headerStyle]}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#1E3163',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
    marginLeft: 20,
  },
  backBtn: {
    marginLeft: 10,
  },
});
export default Header;
