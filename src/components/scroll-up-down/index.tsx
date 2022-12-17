import { CaretDown, CaretUp } from 'phosphor-react';

import * as S from './styles';

export type Props = {
  variant: 'up' | 'down' | 'up-down';
  borderColor: string;
  buttonColor: string;
  iconColor?: string;
};

/**
 * Botão lateral de scroll
 * @param variant 'up' | 'down' | 'up-down'
 * @param borderColor hexadecimal
 * @param buttonColor hexadecimal
 * @param iconColor hexadecimal -> default #FFFFFF
 */
export const ScrollUpDown: React.FC<Props> = ({
  variant,
  borderColor,
  buttonColor,
  iconColor,
}: Props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <S.Wrapper borderColor={borderColor}>
      <S.Circle
        variant={variant}
        buttonColor={buttonColor}
        iconColor={iconColor}
        borderColor={borderColor}>
        {variant === 'up' || variant === 'up-down' ? (
          <button onClick={() => scrollToTop()}>
            <CaretUp weight="bold" />
          </button>
        ) : null}
        {variant === 'down' || variant === 'up-down' ? (
          <>
            <i />
            <button onClick={() => scrollToBottom()}>
              <CaretDown weight="bold" />
            </button>
          </>
        ) : null}
      </S.Circle>
    </S.Wrapper>
  );
};
