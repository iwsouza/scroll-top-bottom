import * as S from './styles';
import GlobalStyles from './styles/global';
import { CodeFormatting } from './components/code-formatting';
import { steps } from './mapped';
import { GithubLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import { ScrollUpDown } from './components/scroll-up-down';
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <h1>Scroll Up and Down | Wesley Souza</h1>

          <S.Align minorMargin>
            <a href="https://github.com/iwsouza">
              <GithubLogo />
            </a>
            <a href="https://instagram.com/iwsouza">
              <InstagramLogo />
            </a>
            <a href="https://www.youtube.com/@iwsouzaa">
              <YoutubeLogo />
            </a>
          </S.Align>

          <S.Align minorMargin minorPadding>
            <div>
              <span>O botão está fixado no canto inferior direito da tela</span>
            </div>
          </S.Align>
          {steps.map((item) => {
            return (
              <CodeFormatting
                key={item.description}
                description={item.description}
                codeString={item.codeString}
              />
            );
          })}
        </S.Container>
        <ScrollUpDown
          variant="up-down"
          borderColor="#31383E"
          buttonColor="#386875"
        />
      </S.Wrapper>
    </>
  );
};

export default App;
