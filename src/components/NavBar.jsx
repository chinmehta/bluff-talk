import { MenuTrigger, ActionButton, Menu, Item, Button } from "@adobe/react-spectrum";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";
import { logoutUser } from "../actions/logoutUser";

function NavBar() {
  const onItemSelect = (e) => {
    console.log(`👻 ~ file: NavBar.jsx:7 ~ onItemSelect ~ e`, e);
  };
  return (
    <>
      <div className="nav-bar-container flex justify-between items-center">
        <div className="header">Bluff-talk</div>
        <div className="action-menu">
          <Button variant="accent" style="fill" onPress={logoutUser}>
            Logout
          </Button>
          {/* <ShowMenu aria-label="Menu" />
          <MenuTrigger>
            <ActionButton>Edit</ActionButton>
            <Menu>
              <Item>Cut</Item>
              <Item>Copy</Item>
              <Item>Paste</Item>
            </Menu>
          </MenuTrigger> */}
        </div>
      </div>
    </>
  );
}

export default NavBar;
