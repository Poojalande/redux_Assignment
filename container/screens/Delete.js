import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import {mydataDelete} from '../../redux/project/Action';

const Delete = ({route, deleteData}) => {
  const [id, setId] = useState('');
  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text style={styles.message}>Data Deleted Successfully!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    color: 'green',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    deleteData: (id, title, body) => dispatch(mydataDelete(id, title, body)),
  };
};

export default connect(null, mapDispatchToProps)(Delete);
