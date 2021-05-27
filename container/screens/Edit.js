import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {editSuccess} from '../../redux/project/Action';
import Home from './Home';

const Edit = ({route, updateData, updateAction}) => {
  const [id, setId] = useState(route.params.data.id);
  const [title, setTitle] = useState(route.params.data.title);
  const [body, setBody] = useState(route.params.data.body);

  const handleSubmit = () => {
    updateAction(id, title, body);
  };

  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <Text>Index is : {route.params.data.index}</Text>
        <Text style={styles.titlehead}>Title</Text>
        <Text>{route.params.data.title}</Text>
        <Text style={styles.titlehead}>Body</Text>
        <Text>{route.params.data.body}</Text>
      </View>
      <Text style={styles.title}>Title</Text>
      <TextInput
        style={styles.titleInput}
        // multiline
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.body}>Body</Text>
      <TextInput
        style={styles.bodyInput}
        // multiline
        value={body}
        onChangeText={(text) => setBody(text)}
      />
      <TouchableOpacity style={styles.updateBtn} onPress={() => handleSubmit()}>
        <Text style={styles.btnText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  data: {
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  titlehead: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    textAlign: 'center',
  },
  body: {
    fontSize: 22,
    marginVertical: 10,
    textAlign: 'center',
  },
  titleInput: {
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  bodyInput: {
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  updateBtn: {
    width: 100,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 20,
    marginStart: 150,
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
  },
});
const mapStateToProps = (state) => {
  return {
    updateData: state.data.editdata,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateAction: (id, title, body) => dispatch(editSuccess(id, title, body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
