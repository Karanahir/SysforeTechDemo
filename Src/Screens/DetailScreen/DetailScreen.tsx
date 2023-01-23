import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Header from '../../Components/Header';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

function DetailScreen(props): JSX.Element {
  const {navigation} = props;
  const data = props.route.params.data;
  const {colors} = useTheme();
  const [tags, setTags] = useState('');

  useEffect(() => {
    var temp = '';
    for (let i = 0; i < data.tags.length; i++) {
      if (i == 0) {
        temp = data.tags[i];
      } else {
        temp = temp + ',' + data.tags[i];
      }
    }
    setTags(temp);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Details Screen" />
        <Text
          style={[styles.titleStyle, {color: colors.text, marginTop: '2%'}]}>
          {data.title}
        </Text>
        <Text
          style={[
            styles.textStyle,
            {
              color: colors.text,
              alignSelf: 'center',
              margin: '5%',
            },
          ]}>
          {'\t\t\t\t'}
          {data.body}
        </Text>
        <Text
          style={[
            styles.textStyle,
            {
              color: colors.text,
              margin: '5%',
            },
          ]}>
          Tags: {tags}
        </Text>
        <Text
          style={[
            styles.textStyle,
            {
              color: colors.text,
              margin: '5%',
            },
          ]}>
          Reactions: {data.reactions}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default DetailScreen;
