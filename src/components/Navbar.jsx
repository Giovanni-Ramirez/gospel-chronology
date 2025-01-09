import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    <Link to="/">
                        The Chrono Gospel
                    </Link>
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">About us</Button>
                    <Link to="/read">
                        <Button color="inherit">Read</Button>
                    </Link>
                    <Link to="/timeline">
                        <Button color="inherit">Timeline</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar