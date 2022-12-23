import type { FC } from 'react';

const CapsuleCardSkeleton: FC = () => {
  return (
    <div
      className="border p-4 rounded-md smooth-animate hover:bg-gray-100
     cursor-pointer hover:scale-105 hover:-translate-y-1"
    >
      <div className="border rounded-full mx-auto w-16 h-16 flex items-center justify-center skeleton"></div>
      <div className="mt-2">
        <div className="mb-2 h-5 skeleton rounded-md"></div>
        <div className="h-3 mb-1 skeleton rounded-md"></div>
        <div className="mb-2 h-3 skeleton rounded-md"></div>
        <div className="flex justify-between space-x-2 flex-wrap items-center">
          <div className="h-3 w-16 skeleton rounded-md"></div>
          <div
            className={`text-xs px-2 py-1 text-gray-50  rounded-full w-16 h-4 skeleton`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CapsuleCardSkeleton;
