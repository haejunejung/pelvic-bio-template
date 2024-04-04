'use client';

import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {ReactNode} from 'react';
import {PelvicColors} from '../const/ColorPalette';

const StyledButton = styled.button`
  ${props => {
    const color = `${props.color ?? PelvicColors.Main}10`;
    return props.disabled
      ? ''
      : css`
            &:hover {
                box-shadow: 200px 0 0 0 ${color} inset,
                            -200px 0 0 0 ${color} inset;
                transition: 1.0s;
            },
        `;
  }}
`;

interface ButtonElementProps {
  children: ReactNode;
  style: 'fill' | 'line';
  padding?: string;
  color?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function ButtonElement(props: ButtonElementProps) {
  const {children, style, padding, color, onClick, disabled, fullWidth} = props;

  return (
    <StyledButton
      style={{
        width: fullWidth ? '100%' : 'fit-content',
        backgroundColor:
          style === 'fill' ? color ?? PelvicColors.Main : PelvicColors.White,
        border: `1px solid ${color ?? PelvicColors.Main}`,
        borderRadius: 8,
        padding: padding || '16px 152px',
        fontSize: 16,
        cursor: disabled ? 'default' : 'pointer',
        ...props,
        color:
          style === 'line' ? color ?? PelvicColors.Main : PelvicColors.White,
      }}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}
