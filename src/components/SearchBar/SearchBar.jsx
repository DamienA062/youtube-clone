import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
          <Paper component="form" onSubmit={(e) => handleSubmit(e)} sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: {sm: 5}}}>
              <input className="search-bar" placeholder="search..." value={searchTerm} onChange={(e) => handleChange(e)} type="text"/>
              <IconButton type="submit" sx={{p: '10px', color: 'rgb(102, 178, 255)'}}><SearchIcon/></IconButton>
          </Paper>
    );
}

export default SearchBar;