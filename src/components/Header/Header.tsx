import { HeaderContainer } from './Header.styles';
import LOGO_CENTI_PNG from '../../assets/logo-centi.png';
import LOGO_IMGUR_PNG from '../../assets/logo-imgur.png';

export const Header = () => (
  <HeaderContainer>
    <span>
      <img src={LOGO_CENTI_PNG} alt="Centi" />+
      <img src={LOGO_IMGUR_PNG} alt="Centi" />
    </span>
  </HeaderContainer>
);
