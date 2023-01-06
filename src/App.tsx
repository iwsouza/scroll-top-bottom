import * as S from './styles';
import GlobalStyles from './styles/global';
import { CodeFormatting } from './components/code-formatting';
import { steps } from './mapped';
import { GithubLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import { ScrollUpDown } from './components/scroll-up-down';
import { useState } from 'react';

const App: React.FC = () => {
  const [option, setOption] = useState('up-down');
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
              <div>
                <fieldset>
                  <input
                    type="radio"
                    name="option"
                    id="up-down"
                    value="up-down"
                    checked
                    onChange={(e) => setOption(e.target.value)}
                  />
                  <label htmlFor="up-down">Cima e Baixo</label>
                </fieldset>
                <fieldset>
                  <input
                    type="radio"
                    name="option"
                    id="up"
                    value="up"
                    onChange={(e) => setOption(e.target.value)}
                  />
                  <label htmlFor="up">Somente p/ Cima</label>
                </fieldset>
                <fieldset>
                  <input
                    type="radio"
                    name="option"
                    id="down"
                    value="down"
                    onChange={(e) => setOption(e.target.value as string)}
                  />
                  <label htmlFor="down">Somente p/ Baixo</label>
                </fieldset>
              </div>
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
          variant={option as 'up-down' | 'up' | 'down'}
          borderColor="#31383E"
          buttonColor="#386875"
        />
      </S.Wrapper>
    </>
  );
};

export default App;
