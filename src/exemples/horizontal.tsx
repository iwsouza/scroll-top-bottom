import { useState } from 'react';
import { SwitchButton } from '../components/switch-button';

export const Vertical: React.FC = () => {
  // estado responsável para controlar o componente
  const [isActive, setIsActive] = useState(false);

  // método responsável pelo toggle do botão
  const toggleActive = () => {
    // pega o valor anterior e muda
    setIsActive((old) => !old);
  };
  return (
    <SwitchButton
      variant="horizontal"
      onClick={() => toggleActive}
      isActive={isActive}
    />
  );
};
