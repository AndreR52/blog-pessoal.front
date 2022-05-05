import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');

    let history = useNavigate();

    function deslogar() {
        setToken('')
        alert("Usuário deslogado")
        history('/logar')
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='fundo1'>
                    <Link to="/home" className='text-decorator-none'>
                        <Box className='cursor'>                    
                            <Typography variant="h5" color="inherit">
                                BlogPessoal
                            </Typography>
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start" >
                        <Link to="/home"  className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>                        
                            </Box>
                        </Link>
                        <Link to="/postagens" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>                        
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>                      
                        <Box mx={1} className='cursor' onClick={deslogar}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                        
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;