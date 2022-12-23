import { createContext, Dispatch, useContext } from 'react';
import { SearchFormInputs } from '../components/landing/search/reducer';

export const SearchFormStore = createContext<
  [
    state: {
      status: string;
      date: string;
      type: string;
    },
    dispatch: Dispatch<{
      type: SearchFormInputs;
      payload: string;
    }>
  ]
>([
  {
    status: '',
    date: '',
    type: '',
  },
  () => {},
]);

export const useSearchFormStore = () => useContext(SearchFormStore);
