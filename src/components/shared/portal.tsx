import { AnimatePresence } from 'framer-motion';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../../@types';

interface PortalProps extends ModalProps {
  children: ReactNode;
  selector?: string;
}
/**
 * @props PortalProps
 * @returns Client only Portal
 */
const Portal: FC<PortalProps> = ({
  children,
  selector,
  shouldDisableBackgroundScroll = true,
  showModal,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const selector = 'portal-' + makeid(7);

    const _el = document.createElement('div');

    if (_el && selector && !ref.current) {
      _el.id = selector;

      document.body.appendChild(_el);
      ref.current = _el;
    }

    return () => {
      ref.current = null;
      if (_el) {
        document.body.removeChild(_el);
      }
    };
  }, []);

  useEffect(() => {
    if (shouldDisableBackgroundScroll) {
      if (showModal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, [shouldDisableBackgroundScroll, showModal]);

  if (!ref.current) {
    return null;
  }

  return createPortal(
    <AnimatePresence mode="wait">{showModal && children}</AnimatePresence>,
    ref.current
  );
};

export default Portal;

export function makeid(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toLowerCase();
}
