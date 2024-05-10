import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const { setPassword, setEmail, navigate } = props
    return (
        <>
            <Typography variant="h2" fontFamily='Alice' fontSize={'48px'} textAlign={'left'} color={'#50735F'}> Вход в личный кабинет </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Alice' fontSize={'18px'} textAlign={'left'} color={'#50735F'}> Введите ваш логин и пароль </Typography>
            <TextField fullWidth={true} margin='normal' label="Логин / E-mail" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)} />
            <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)} />
            <Button type='submit' sx={{ "&:hover": {backgroundColor: '#50735F'}, backgroundColor: '#50735F', fontFamily: 'Forum', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Войти</Button>
            <Typography variant="body1" sx={{ fontFamily: 'Alice', }}> У вас нет аккаунта? <span className='incitingText' onClick={() => navigate('/register')}>Регистрация</span> </Typography>
        </>
    );
};

export default LoginPage;