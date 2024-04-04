'use client';

import {HStack, TextElement} from '@/shared';
import styled from '@emotion/styled';
import {ReactNode} from 'react';

const HeaderContainer = styled(HStack)({
  justifyContent: 'center',
  alignItems: 'center',
  height: 64,
  width: '100%',
  position: 'relative',
});

const LeftItem = styled(HStack)({
  position: 'absolute',
  left: 0,
});

const RightItem = styled(HStack)({
  position: 'absolute',
  right: 0,
});

interface Props {
  title?: string;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
}

export function PageHeader({title, leftItem, rightItem}: Props) {
  return (
    <HeaderContainer>
      <LeftItem>{leftItem}</LeftItem>
      {title && <TextElement textStyle="H1">{title}</TextElement>}
      <RightItem>{rightItem}</RightItem>
    </HeaderContainer>
  );
}
