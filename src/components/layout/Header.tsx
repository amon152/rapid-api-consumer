import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { AppBarTwicked, ToolBarTwicked } from '../../../styles/layoutStyles';
import Link from 'next/link';
import { LoadingButton } from '@mui/lab';


function Header() {
  const [ClassName, setClassName] = React.useState({ value: '' });
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = () =>
    setClassName((prev: any) =>
      prev.value == 'open' ? { value: 'closed' } : { value: 'open' },
    );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {ClassName.value == 'open' ? (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: { xs: 'block', sm: 'block', md: 'none' },
            backgroundColor: '#fff',
            position: 'fixed',
            zIndex: 3,
            top: '3rem',
            left: 0,
          }}
        />
      ) : (
        <></>
      )}

      <AppBarTwicked position="static" elevation={0}>
        <Container maxWidth="xl">
          <ToolBarTwicked>
            <Box
              sx={{
                p: 0,
                m: 0,
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                position: ClassName.value == 'open' ? 'fixed' : null, 
                zIndex: 10,
                top: 0,
              }}
            >
              <Link href="/">
                <Typography
                  variant="h5"
                  sx={{
                    px: 0,
                    py: 1,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    borderRadius: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  Cy <span style={{ color: '#7C28F2' }}> Health</span>
                </Typography>
              </Link>
              <Link href="/">
                <Typography
                  variant="h5"
                  sx={{
                    px: 0,
                    py: 1,
                    fontSize: { xs: '1rem', md: '1.6rem' },
                    borderRadius: '1rem',
                    cursor: 'pointer',
                  }}
                >
                   <span style={{ color: '#7C28F2' }}> History</span>
                </Typography>
                </Link>
            </Box>
          </ToolBarTwicked>
        </Container>
      </AppBarTwicked>
</Box>
  );
}

export default Header;