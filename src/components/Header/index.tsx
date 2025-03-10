import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


type Props = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const Header = ({ darkMode, toggleDarkMode }: Props) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dog Breeds
            </Typography>
            <IconButton color="inherit" onClick={toggleDarkMode}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Toolbar>
    </AppBar>
)

export default Header;
