import { FC } from 'react';
import { useSearchFormStore } from '../../../context/search-form';
import { capsulesStatus, capsulesTypes } from '../../../static/search-options';
import DropDownInput from '../../shared/drop-down-input';
import StatusRocketIcon from '../../shared/icons/status-rocket';
import { SearchFormInputs } from './reducer';

const SearchForm: FC = () => {
  const [formValues, dispatch] = useSearchFormStore();

  return (
    <form className="my-6 grid lg:grid-cols-3 grid-cols-1 gap-5">
      <DropDownInput
        icon={<StatusRocketIcon />}
        selected={formValues.status}
        placeHolder="Choose Capsule status"
        options={capsulesStatus}
        onChange={(value) => {
          dispatch({ type: SearchFormInputs.Status, payload: value });
        }}
      />
      <input
        type="date"
        placeholder="Choose Original Launch date"
        className="w-full p-2 transform transition-all will-change-transform
        duration-300 focus:outline-1 outline-blue-500/40 text-sm border rounded-md"
      />
      <DropDownInput
        icon={<StatusRocketIcon />}
        selected={formValues.type}
        placeHolder="Choose Capsule type"
        options={capsulesTypes}
        onChange={(value) => {
          dispatch({ type: SearchFormInputs.Type, payload: value });
        }}
      />
    </form>
  );
};

export default SearchForm;
