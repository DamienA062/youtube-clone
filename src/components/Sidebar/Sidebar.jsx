import Stack from '@mui/material/Stack';
import {categories} from "../../utils/constants.jsx";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
    const handleClick = (categoryName) => {
        setSelectedCategory(categoryName)
    }

    return (
        <Stack direction="row" sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'}}}>
            {categories.map(({icon, name}) => (
                <button
                    key={name}
                    className="category-btn"
                    style={{background: name === selectedCategory && 'rgb(0, 89, 178)', color: 'white'}}
                    onClick={() => handleClick(name)}
                >
                    <span style={{color: name === selectedCategory ? 'white' : 'rgb(0, 89, 178)', marginRight: '15px'}}>{icon}</span>
                    <span style={{opacity: name === selectedCategory ? '1' : '0.8'}}>{name}</span>
                </button>
            ))}
        </Stack>
    );
}

export default Sidebar