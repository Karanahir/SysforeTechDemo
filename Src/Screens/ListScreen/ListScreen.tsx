import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Components/Header';
import {useTheme} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import Images from '../../Constants/Images';
import {Card} from 'react-native-paper';
import axios from 'axios';

import {useSelector} from 'react-redux';
import styles from './styles';

function ListScreen(props): JSX.Element {
  const {navigation} = props;
  const {colors} = useTheme();
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  const [data, setData] = useState();
  const [dataTemp, setDataTemp] = useState();
  const tab = props.route.params.tab;

  async function getData() {
    try {
      setData([]);
      axios
        .get('https://dummyjson.com/posts')
        .then(function (response) {
          setData(response.data.posts);
          setDataTemp(response.data.posts);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log('Get Data Error', e);
    }
  }

  function filterSearch(e) {
    if (e === '') {
      setData(dataTemp);
    } else {
      let searchData = dataTemp.filter(function (data) {
        return (
          data.title.startsWith(e) ||
          data.body.startsWith(e) ||
          data.tags.includes(e) ||
          data.reactions == e
        );
      });
      setData(searchData);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setMode(theme.mode);
  }, [mode, theme.mode]);

  const renderItem = ({item, index}) => {
    var body = '';
    if (tab == 1) {
      body = `${item.body.split('.')[0]} ${item.body.split('.')[1]}`;
    } else {
      body = item.body;
    }
    return (
      <Card style={[styles.cardStyle, {backgroundColor: Colors[mode].cardBg}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailScreen', {data: item});
          }}>
          <View style={[styles.itemView]}>
            <Text style={[styles.titleStyle, {color: colors.text}]}>
              {item.title}
            </Text>
            <Text style={[styles.textStyle, {color: colors.text}]}>
              {body}.
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {paddingBottom: '15%'}]}>
        <Header title="ListScreen" />
        <View style={[styles.itemStyle, {padding: 0, alignItems: 'center'}]}>
          <Image
            source={Images.search}
            style={{height: 20, width: 20, marginLeft: 10}}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Search"
            placeholderTextColor="black"
            secureTextEntry={false}
            //value={searchText}
            numberOfLines={1}
            onChangeText={e => {
              //setSearchText(e);
              filterSearch(e);
            }}
          />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
}

export default ListScreen;
