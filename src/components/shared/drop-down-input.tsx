import { FC, ReactNode, useRef, useState } from 'react';
import useHandleClose from '../../hooks/useHandleClose';
import CloseIcon from './icons/close';

interface DropDownInputProps {
  icon: ReactNode;
  placeHolder: string;
  options: { title: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const DropDownInput: FC<DropDownInputProps> = ({
  icon,
  placeHolder,
  options,
  selected,
  onChange,
}) => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useHandleClose(() => {
    setShow(false);
  }, containerRef);

  return (
    <div
      className="relative"
      ref={containerRef}
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className="overflow-hidden border flex items-center rounded-md relative">
        <div className="absolute left-0 top-0 bottom-0 flex items-center p-2 z-10">
          {icon}
        </div>
        <input
          type="text"
          readOnly
          value={selected}
          className="w-full capitalize p-2 pl-7 transform transition-all will-change-transform
        duration-300 focus:outline-1 outline-blue-500/40 text-sm"
          placeholder={placeHolder}
        />
        {selected && (
          <div
            onClick={(ev) => {
              ev.stopPropagation();
              onChange('');
            }}
            className="animate-fade-in absolute right-0 top-0 bottom-0 flex items-center p-2 z-10"
          >
            <CloseIcon />
          </div>
        )}
      </div>
      {show && (
        <div className="animate-fade-in absolute left-0 right-0 text-start border rounded-b-md shadow-sm hover:shadow-lg smooth-animate">
          {options.map((opt) => {
            return (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                }}
                className="px-2 py-1.5 border-b text-sm hover:bg-gray-100 smooth-animate cursor-pointer"
              >
                {opt.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDownInput;
