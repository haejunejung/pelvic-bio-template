'use client';

import styled from '@emotion/styled';
import {MouseEvent, ReactNode, useCallback} from 'react';
import {UIConst} from '../const/UIConst';

const ModalBackground = styled.div({
  display: 'flex',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100,
});

const ModalContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'absolute',
  alignItems: 'center',
  backgroundColor: 'white',
  width: UIConst.mobileContainerSize.width,
  left: 0,
  right: 0,
  bottom: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: UIConst.zIndex.bottomSheet,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  padding: 16,
});

interface BottomSheetElementProps {
  isOpen: boolean;
  children: ReactNode;
  handleClose: () => void;
}

export default function BottomSheetElement(props: BottomSheetElementProps) {
  const {isOpen, handleClose, children} = props;

  const closeModal = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose],
  );

  return (
    <div>
      {isOpen && (
        <ModalBackground onClick={closeModal}>
          <ModalContent>{children}</ModalContent>
        </ModalBackground>
      )}
    </div>
  );
}
