import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';



import NavDrawerComponent from './NavDrawerComponent';
import { Link } from '@mui/material';

const pages = ['About Us', 'Blog', 'FAQs', 'Criar Curriculum'];

function HeaderComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={appStyles}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontSize: '1.4rem',
                fontWeight: 500,
                // letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              nhaDocs
            </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon /> */}
                <NavDrawerComponent />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              nhaDocs
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#000', display: 'block' }}
                >
                  <Link sx={{color: '#fff', textDecoration: 'none'}} href='/template'>{page}</Link>
                </Button>
              ))}
            </Box>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderComponent;

const appStyles = {
  color: '#000',
  background: 'rgba(0, 0, 0, 0.1)',
  // borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(1px)',
  webkitBackdropFilter: 'blur(1px)',
  // border: '1px solid rgba(0, 0, 0, 0.3)',
}