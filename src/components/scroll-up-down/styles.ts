import styled, { css } from 'styled-components';

import { Props } from '.';

export const Wrapper = styled.div<{ borderColor: Props['borderColor'] }>`
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 30px;
  right: 30px;

  background: ${({ borderColor }) => borderColor};
  border: 5px solid ${({ borderColor }) => borderColor};

  border-radius: 50%;
`;

export const Circle = styled.div<{
  variant: Props['variant'];
  buttonColor: Props['buttonColor'];
  iconColor: Props['iconColor'];
  borderColor: Props['borderColor'];
}>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ buttonColor }) => buttonColor};
  ${({ variant, iconColor, borderColor }) =>
    variant === 'up' || variant === 'down'
      ? css`
          & > i {
            display: none;
          }
          & > button {
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            border: 0;
            outline: 0;

            background: transparent;
            border-radius: 50%;

            & > svg {
              font-size: 15px;
              color: ${iconColor ? iconColor : '#FFFFFF'};
            }

            &:focus {
              outline: 0;
            }
          }
        `
      : css`
          & > i {
            width: 100%;
            min-height: 4px;
            height: 4px;

            background: ${borderColor};
          }
          & > button {
            width: 100%;
            height: calc(50% - 2px);

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            border: 0;
            outline: 0;

            background: transparent;

            & > svg {
              font-size: 15px;
              color: ${iconColor ? iconColor : '#FFFFFF'};
            }

            &:focus {
              outline: 0;
            }

            &:first-child {
              border-radius: 50% 50% 0 0;
            }

            &:last-child {
              border-radius: 0 0 50% 50%;
            }
          }
        `}
`;
