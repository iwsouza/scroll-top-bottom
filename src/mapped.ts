export const steps = [
  {
    description: 'Instale as libs necessárias',
    codeString: `
  yarn add styled-components phosphor-icons
  // ou
  npm install --save styled-components phosphor-icons
  `,
  },

  {
    description: 'Crie o index.tsx, importe os ícones, os estilos e os tipos',
    codeString: `
    import { CaretDown, CaretUp } from 'phosphor-react';

    import * as S from './styles';

    export type Props = {
      variant: 'up' | 'down' | 'up-down';
      borderColor: string;
      buttonColor: string;
      iconColor?: string;
    };
  `,
  },
  {
    description: 'Monte o componente ScrollUpDown',
    codeString: `
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
  `,
  },
  {
    description: 'Crie o styles.ts e adicione os estilos',
    codeString: `
    import styled, { css } from 'styled-components';

    import { Props } from '.';

    export const Wrapper = styled.div<{ borderColor: Props['borderColor'] }>\`
      width: 50px;
      height: 50px;

      position: fixed;
      bottom: 30px;
      right: 30px;

      background: \${({ borderColor }) => borderColor};
      border: 5px solid \${({ borderColor }) => borderColor};

      border-radius: 50%;
    \`;

    export const Circle = styled.div<{
      variant: Props['variant'];
      buttonColor: Props['buttonColor'];
      iconColor: Props['iconColor'];
      borderColor: Props['borderColor'];
    }>\`
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: \${({ buttonColor }) => buttonColor};
      \${({ variant, iconColor, borderColor }) =>
        variant === 'up' || variant === 'down'
          ? css\`
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
                  color: \${iconColor ? iconColor : '#FFFFFF'};
                }

                &:focus {
                  outline: 0;
                }
              }
            \`
          : css\`
              & > i {
                width: 100%;
                min-height: 4px;
                height: 4px;

                background: \${borderColor};
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
                  color: \${iconColor ? iconColor : '#FFFFFF'};
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
            \`}
    \`;
  `,
  },
  {
    description:
      'Importe o componente em alguma div que não tenha nenhum position',
    codeString: `
    <ScrollUpDown
      variant="up-down"
      borderColor="#31383E"
      buttonColor="#386875"
    />
  `,
  },
];
