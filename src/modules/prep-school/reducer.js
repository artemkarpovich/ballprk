import { CHANGE_VALUE } from './actions';

const initialState = {
  sportId: null,
  positionId: null,
  highSchool: '',
  day: '',
  month: '',
  year: '',
  gender: '',
  customGender: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
}
