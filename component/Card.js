import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const Card = ({title, id, body, onEdit, onDelete}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.userId}>user ID : {id}</Text>
        <Text style={styles.body}>{body}</Text>
        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.editbtn} onPress={() => onEdit()}>
            <Text style={styles.editext}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deletebtn} onPress={() => onDelete()}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'skyblue',
    marginVertical: 5,
    textAlign: 'center',
  },
  userId: {
    paddingLeft: 10,
    fontSize: 16,
  },
  body: {
    fontSize: 16,
    paddingVertical: 18,
    paddingLeft: 10,
  },
  btncontainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  editbtn: {
    backgroundColor: '#caf7e3',
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 5,
  },
  editext: {
    fontSize: 16,
  },
  deletebtn: {
    backgroundColor: '#da7f8f',
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 5,
    marginStart: 160,
  },
});

export default Card;
