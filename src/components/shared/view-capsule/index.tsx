import { motion } from 'framer-motion';
import { FC, useRef } from 'react';
import type { CapsuleEntity, ModalProps } from '../../../@types';
import useHandleClose from '../../../hooks/useHandleClose';
import useWindowResize from '../../../hooks/useWindowResize';
import Portal from '../portal';

interface ViewCapsuleDetailsProps extends ModalProps {
  data: CapsuleEntity | null;
}

const ViewCapsuleDetails: FC<ViewCapsuleDetailsProps> = ({
  data,
  showModal,
  setShowModal = () => {},
}) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowResize(true);

  useHandleClose(() => {
    setShowModal(false);
  }, viewRef);

  return (
    <Portal showModal={showModal} setShowModal={setShowModal}>
      <motion.div
        ref={viewRef}
        initial={width > 640 ? { x: '200%' } : { y: '100%' }}
        animate={width > 640 ? { x: 0 } : { y: 0 }}
        exit={width > 640 ? { x: '200%' } : { y: '100%' }}
        transition={{ duration: 0.5, damping: '0' }}
        className="sm:w-96 w-full sm:top-0  right-0 bottom-0 bg-gray-50 
        rounded-l-xl shadow-2xl fixed p-2 border z-50"
      >
        <div className="relative sm:h-screen">
          <header
            className="bg-gray-100 shadow-lg rounded-b-lg border-b 
          flex items-center justify-between p-2"
          >
            <h2 className="text-xl font-semibold">Capsule Details</h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              fontSize={24}
              className="cursor-pointer bg-razzmatazz rounded-full text-gray-900
            border border-razzmatazz hover:bg-transparent hover:text-blue-zodiac/70 smooth-animate"
              role="button"
              onClick={() => {
                setShowModal(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
              <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
            </svg>
          </header>
          <div className="mt-2">
            <div className="border rounded-full mx-auto w-24 h-24 flex items-center justify-center">
              <img src="/capsule.jpeg" width={72} height={72} alt="capsule" />
            </div>
          </div>
          <div className="text-sm mt-4">
            <div className="mt-2 border rounded-md px-2">
              <span className="text-xs opacity-50">Capsule Serial</span>
              <div>{data?.capsule_serial}</div>
            </div>
            <div className="mt-2 border rounded-md px-2">
              <span className="text-xs opacity-50">Status</span>
              <div>{data?.status}</div>
            </div>
            <div className="mt-2 border rounded-md px-2">
              <span className="text-xs opacity-50">Original Launch</span>
              <div>
                {data?.original_launch
                  ? new Date(data.original_launch).toLocaleString('en', {
                      day: '2-digit',
                      month: 'long',
                      year: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : 'Unknown'}
              </div>
            </div>

            <div className="mt-2 border rounded-md px-2 pb-2">
              <span className="text-xs opacity-50 mb-1">Missions</span>
              {data?.missions?.map((mission, idx) => {
                return (
                  <div
                    key={idx}
                    className="text-sm flex space-x-2 flex-wrap border w-fit px-2 py-0.5 bg-gray-200 rounded-md"
                  >
                    <p>Name - {mission.name}</p>,
                    <span>Flight - {mission.flight}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-2 border rounded-md px-2">
              <span className="text-xs opacity-50">Landing</span>
              <div>{data?.landings}</div>
            </div>

            <div className="mt-2 border rounded-md px-2">
              <span className="text-xs opacity-50">Type</span>
              <div>{data?.type}</div>
            </div>

            <div className="mt-2 border rounded-md px-2">
              <span className="text-xs opacity-50">Details</span>
              <div>{data?.details}</div>
            </div>
            <div className="mt-2 border rounded-md px-2">
              <span className="text-xs opacity-50">Reuse Count</span>
              <div>{data?.reuse_count}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Portal>
  );
};

export default ViewCapsuleDetails;
