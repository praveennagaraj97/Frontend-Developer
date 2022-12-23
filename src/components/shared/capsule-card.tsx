import { FC } from 'react';
import { CapsuleEntity } from '../../@types';

const CapsuleCard: FC<CapsuleEntity> = (cap) => {
  function statusColor() {
    switch (cap.status) {
      case 'active':
        return 'bg-green-500';

      case 'destroyed':
        return 'bg-red-500';

      case 'retired':
        return 'bg-emerald-500';

      default:
        return 'bg-gray-500';
    }
  }

  return (
    <div
      className="border p-4 rounded-md smooth-animate hover:bg-gray-100
     cursor-pointer sm:hover:scale-105 sm:hover:-translate-y-1 animate-fade-in"
    >
      <div className="border rounded-full mx-auto w-16 h-16 flex items-center justify-center">
        <img src="/capsule.jpeg" width={40} height={40} alt="capsule" />
      </div>
      <div className="mt-2">
        <h4 className="font-semibold mb-2 text-center">{cap.capsule_serial}</h4>
        <p className="text-sm opacity-70 cut-text-2 mb-2 min-h-[40px]">
          {cap.details}
        </p>
        <div className="flex justify-between space-x-2 flex-wrap items-center">
          <div className="text-xs">
            {cap.original_launch
              ? new Date(cap.original_launch).toLocaleString('en-IN', {
                  day: '2-digit',
                  month: 'long',
                  year: '2-digit',
                })
              : 'Unknown'}
          </div>
          <div
            className={`text-xs px-2 py-1 text-gray-50  rounded-full w-fit ${statusColor()}`}
          >
            {cap.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapsuleCard;
