import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from '@mui/icons-material/Apple';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const theme = createTheme();

export default function SignUp() {
    const[toggle,setToggle]=useState(false)

    const handleToggle=()=>{
        setToggle(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
             {!toggle &&( 
            <Container component="main" maxWidth="xs" 
            sx={{border:"1px solid", marginTop:"5rem", paddingBottom:"3rem", borderRadius:"5%"}}
            >
                <CssBaseline />
                < Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, color: 'rgb(29, 155, 240)' }}>
                        <TwitterIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ marginTop: "2rem", fontSize: "2rem" }}>
                        Join Twitter today
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            mt: "20px",
                            borderRadius: "60px",
                            width: "25rem",
                            height: "3rem",
                            color: "#3c4043",
                            textTransform: "none"
                        }}
                    >
                        <GoogleIcon sx={{ marginRight: "5px" }} />
                        Sign up with Google
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            mt: "20px",
                            borderRadius: "60px",
                            width: "25rem",
                            height: "3rem",
                            color: "#3c4043",
                            textTransform: "none"
                        }}
                    >
                        <AppleIcon sx={{ marginRight: "5px" }} />
                        Sign up with Apple
                    </Button>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>



                        </Grid>
                        <Button
                        onClick={handleToggle}
                            variant="outlined"
                            sx={{
                                mt: "20px",
                                borderRadius: "60px",
                                width: "25rem",
                                height: "3rem",
                                // color: "white",
                                color: "green",
                                backgroundColor: "black",
                                textTransform: "none"
                                
                            }}
                        >
                            Create account
                        </Button>

                        <Grid container>
                            <Typography sx={{ marginTop: "2rem" }}>
                                By signing up, you agree to the
                                <Link href="#" variant="body2"> Terms of Service</Link> <br />
                                and <Link href="#" variant="body2">Privacy Policy</Link>, including <Link href="#" variant="body2">
                                    Cookie Use.</Link>
                            </Typography>
                            <Grid item sx={{ marginTop: "3rem" }}>
                                <span>Have an account already?</span>
                                <Link href="/" variant="body2">
                                    <span> Log in</span>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>

            
                </Box>

            </Container>
            )}



        {toggle &&(
            <Container component="main" maxWidth="xs" 
            sx={{border:"1px solid", marginTop:"5rem", paddingBottom:"3rem", borderRadius:"5%"}}
            >
            <CssBaseline />
                < Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" 
                    sx={{ marginBottom: "2rem", fontSize: "2rem"}}>
                        Create your account
                    </Typography>
                    <TextField
                        id="outlined-name-input"
                        label="Name"
                        type="text"
                
                        autoComplete="current-name"
                        sx={{ marginBottom: "1rem",width: "25rem",
                        height: "3rem", }}

                    />
                    <TextField

                        id="outlined-number or email-input"
                        label="Phone or email"
                        type="text"
                        autoComplete="current-number or email"
                        sx={{ marginTop: "1rem",width: "25rem",
                        height: "3rem", }}
                    />
                    <Grid container>
                        <Typography >
                            <h5 style={{textAlign:"center"}}>Date of birth</h5> 
                            <p>This will not be shown publicly. Confirm your own age, even if this
                                account is for a business, a pet, or something else.</p>
                        </Typography>

                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterDayjs}
                    >
                        <DemoContainer
                            components={['DatePicker']}


                        >
                            <DemoItem >
                                <DatePicker defaultValue={dayjs('2022-04-17')}
                                    sx={{ width: "25rem" }}
                                    
                                />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>

                    <Button
                        variant="outlined"
                        sx={{
                            mt: "20px",
                            borderRadius: "60px",
                            width: "25rem",
                            height: "3rem",
                            color: "green",
                            backgroundColor: "black",
                            textTransform: "none"

                        }}
                    >
                        Sign Up
                    </Button>
                    </Box>
            </Container>
        )}
        </ThemeProvider>
    );
}