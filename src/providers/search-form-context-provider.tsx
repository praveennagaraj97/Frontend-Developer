import { FC, ReactNode, useReducer } from 'react';
import { searchFormReducer } from '../components/landing/search/reducer';
import { SearchFormStore } from '../context/search-form';

interface SearchFormContextProviderProps {
  children: ReactNode;
}

const SearchFormContextProvider: FC<SearchFormContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(searchFormReducer, {
    status: '',
    date: '',
    type: '',
  });

  return (
    <SearchFormStore.Provider value={[state, dispatch]}>
      {children}
    </SearchFormStore.Provider>
  );
};

export default SearchFormContextProvider;
