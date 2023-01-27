import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";
import {SearchBar} from "../index.jsx";
import logo from "../../utils/img/logo/logo.png";

const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" p={2} spacing={2} sx={{position: 'sticky', background: '#001E3C', top: 0, justifyContent: 'space-between', borderBottom: '1px solid white'}}>
            <Link to="/" style={{color: 'white', fontSize: 50}}>YOUMDR</Link>
            <SearchBar/>
        </Stack>
    );
}

export default Navbar;