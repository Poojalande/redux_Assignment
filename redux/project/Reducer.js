import {USER_SUCCESS, USER_EDITSUCCESS, USER_DELETESUCCESS} from './Type';

const initialState = {
  userData: [],
  isloading: true,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS: {
      return {
        ...state,
        userData: action.payload,
        isloading: false,
      };
    }
    case USER_DELETESUCCESS: {
      console.log('edit data action.payload', action.payload);
      const deletedata = [...state.userData];
      const index = deletedata.findIndex((item, index) => {
        if (item.id == action.payload.id) {
          return index;
        }
      });
      console.log('index', index);

      deletedata.splice(index, 1);
      // pop last element
      // var pop = deletedata.pop();
      // push elemnt
      // var push = deletedata.push({
      //   userId: 11,
      //   id: 102,
      //   title: 'addede',
      //   body: 'quo deleniti',
      // });
      // shift same as pop but instead of delete last element delete first element
      // var shift = deletedata.shift();
      //  unshift give the length of array alo use added new element
      // var unshift = deletedata.unshift();
      var length = [deletedata.length];

      console.log('shift', length);
      return {
        ...state,
        userData: deletedata,
      };
    }
    case USER_EDITSUCCESS: {
      console.log('edit data action.payload', action.payload);
      const editdata = [...state.userData];
      // Edit is array of object and data is object
      const index = editdata.findIndex((item, index) => {
        if (item.id == action.payload.id) {
          return index;
        }
      });
      console.log('index', index);

      const Edit = editdata.map((data) => {
        if (data.id == action.payload.id) {
          console.log('id', data.id);
          data.title = action.payload.title;
          data.body = action.payload.body;
          return data;
        } else {
          return data;
        }
      });
      console.log('Edit array of object', Edit);
      return {
        ...state,
        userData: Edit,
      };
    }
    default: {
      return state;
    }
  }
};
