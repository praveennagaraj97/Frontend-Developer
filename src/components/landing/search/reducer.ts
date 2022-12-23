export enum SearchFormInputs {
  Status,
  OriginalDate,
  Type,
}

type SearchFormState = {
  status: string;
  date: string;
  type: string;
};

export const searchFormReducer = (
  state: SearchFormState,
  action: { type: SearchFormInputs; payload: string }
) => {
  switch (action.type) {
    case SearchFormInputs.Status:
      return { ...state, status: action.payload };
    case SearchFormInputs.Type:
      return { ...state, type: action.payload };
    case SearchFormInputs.OriginalDate:
      return { ...state, date: action.payload };
    default: {
      return state;
    }
  }
};
