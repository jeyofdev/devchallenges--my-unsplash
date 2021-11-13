import Button from '../atoms/Button';
import InputSearch from '../atoms/InputSearch';
import Logo from '../atoms/Logo';

const Header = () => (
  <div className="flex justify-between">
    <div className="flex justify-start w-1/2">
      <Logo />
      <InputSearch placeholder="Search by name" icon />
    </div>

    <Button>Add a photo</Button>
  </div>
);

export default Header;
