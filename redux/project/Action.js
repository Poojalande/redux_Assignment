import axios from 'axios';
import {State} from 'react-native-gesture-handler';
import {
  USER_SUCCESS,
  USER_EDITSUCCESS,
  USER_DELETESUCCESS,
  DELETE,
} from './Type';

const userSuccess = (data) => {
  return {
    type: USER_SUCCESS,
    payload: data,
  };
};
export const deleteSuccess = (id) => {
  return {
    type: USER_DELETESUCCESS,
    payload: {id: id},
  };
};

export const editSuccess = (id, title, body) => {
  return {
    type: USER_EDITSUCCESS,
    payload: {id: id, title: title, body: body},
  };
};

// access all users
export const userAction = () => {
  return (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')

      .then((response) => {
        dispatch(userSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

// delete user using id
// export const userDeleteSuccess = (id) => {
//   console.log('delete data');
//   return (dispatch) => {
//     axios
//       .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => {
//         console.log('success', response);
//         dispatch(deleteSuccess(response));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
