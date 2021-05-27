import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Card from '../../component/Card';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {userAction} from '../../redux/project/Action';
import {deleteSuccess} from '../../redux/project/Action';
import axios from 'axios';

const Home = ({data, userAction, userDeleteSuccess, isloading}) => {
  const [apidata, setApiData] = useState([]);

  useEffect(() => {
    userAction();
    isloading = false;
  }, []);

  useEffect(() => {
    setApiData(data);
    console.log('data array object', data);
  }, [data]);

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log('updated data', data);
  //   }, [data]),
  // );

  const navigation = useNavigation();
  const name = 'poooja';

  const editSubmitHandler = (data) => {
    alert('pooja');

    navigation.navigate('Edit', {data: data});
  };
  const deleteSubmitHandler = (id) => {
    //navigation.navigate('Delete', {id: id});

    console.log('id', id);
    userDeleteSuccess(id);
  };

  return (
    <View style={styles.container}>
      {isloading ? (
        <ActivityIndicator size="large" color="red" style={styles.indicator} />
      ) : (
        <View style={styles.heading}>
          <Text style={styles.title}>Display Data</Text>
        </View>
      )}

      <FlatList
        keyExtractor={(data, index) => index.toString()}
        data={apidata}
        renderItem={({item}) => {
          return (
            <>
              <Card
                title={item.title}
                id={item.id}
                body={item.body}
                onEdit={() => editSubmitHandler(item)}
                onDelete={() => deleteSubmitHandler(item.id)}
              />
            </>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  indicator: {
    width: 200,
    marginVertical: 350,
    marginHorizontal: 110,
    // marginVertical: 200,
  },
  container: {
    backgroundColor: '#e1e5ea',
    flex: 1,
  },
  heading: {
    backgroundColor: '#a7bbc7',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 110,
    marginVertical: 10,
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowRadius: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.data.userData,
    isloading: state.data.isloading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userAction: () => {
      dispatch(userAction());
    },
    userDeleteSuccess: (id) => dispatch(deleteSuccess(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
