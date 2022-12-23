import { FC } from 'react';

interface PaginationControlsProps {
  pageNumber: number;
  eachPage: number;
  total: number;
  onChange: (pageNum: number) => void;
  hasNext: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  eachPage,
  pageNumber,
  total,
  onChange,
  hasNext,
}) => {
  if (total < 10) {
    return null;
  }

  return (
    <div className="my-1 p-2 flex justify-between items-center container mx-auto mt-8">
      <small className="text-xs block">
        Showing {(pageNumber - 1) * eachPage + 1} -{' '}
        {(pageNumber - 1) * eachPage + eachPage < total
          ? (pageNumber - 1) * eachPage + eachPage
          : total}{' '}
        of {total}{' '}
      </small>

      <div className="flex items-center space-x-1">
        <button
          className="smooth-animate hover:scale-110"
          disabled={pageNumber === 1}
          onClick={() => onChange(pageNumber - 1)}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-gray-700"
          >
            <path
              fill="none"
              strokeWidth={2}
              d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
              transform="matrix(-1 0 0 1 24 0)"
              className="stroke-gray-900"
            />
          </svg>
        </button>
        <button
          className="smooth-animate hover:scale-110"
          onClick={() => onChange(pageNumber + 1)}
          disabled={!hasNext}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-gray-700"
          >
            <path
              fill="none"
              strokeWidth={2}
              d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
              className="stroke-gray-900"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
