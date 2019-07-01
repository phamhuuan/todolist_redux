import * as types from '../constants/actionType';

export const status = () => {
  return {
    type: types.TOGGLE_STATUS
  }
};

export const sort = (sort) => {
  return {
    type: types.SORT,
    sort//tuong duong sort: sort
  }
}