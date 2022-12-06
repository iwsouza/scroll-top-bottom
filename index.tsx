import { CaretDown, CaretUp } from "phosphor-react";

import * as S from "./styles";

export type Props = {
  variant: "top" | "down" | "top-down";
  borderColor: string;
  buttonColor: string;
  iconColor?: string;
};

/**
 * Botão lateral de scroll
 * @param variant 'top' | 'down' | 'top-down'
 * @param borderColor hexadecimal
 * @param buttonColor hexadecimal
 * @param iconColor hexadecimal -> default #FFFFFF
 */
export const ScrollTopBottom: React.FC<Props> = ({
  variant,
  borderColor,
  buttonColor,
  iconColor,
}: Props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <S.Wrapper borderColor={borderColor}>
      <S.Circle
        variant={variant}
        buttonColor={buttonColor}
        iconColor={iconColor}
        borderColor={borderColor}
      >
        {variant === "top" || variant === "top-down" ? (
          <button onClick={() => scrollToTop()}>
            <CaretUp weight="bold" />
          </button>
        ) : null}
        {variant === "down" || variant === "top-down" ? (
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
