import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const { setEmail, setFirstName, setPassword, setRepeatPassword, setUsername, navigate } = props
    return (
        <>
            <div className='register_p0'>
                <div className='register_p1'>
                    <Typography color={'#50735F'} variant="h2" fontFamily='Alice' textAlign={'center'}> Регистрация </Typography>
                    <Typography color={'#50735F'} variant="body1" marginBottom={3} fontFamily='Alice' textAlign={'center'}> Введите данные для регистрации </Typography>
                    <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder='Введите ваше имя' onChange={(e) => setFirstName(e.target.value)} />
                    <TextField fullWidth={true} margin='normal' label="Фамилия" variant="outlined" placeholder='Введите ваш логин' onChange={(e) => setUsername(e.target.value)} />
                    <TextField fullWidth={true} margin='normal' label="E-mail" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='register_p2'>
                    <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)} />
                    <TextField type='password' fullWidth={true} margin='normal' label="Повторите пароль" variant="outlined" placeholder='Повторите ваш пароль' onChange={(e) => setRepeatPassword(e.target.value)} />
                </div>
            </div>
            <div className='register_p3'>
                <Button type='submit' sx={{ "&:hover": {backgroundColor: '#50735F'}, backgroundColor: '#50735F', fontFamily: 'Forum', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Регистрация</Button>
                <Typography variant="body1" sx={{ fontFamily: 'Alice', }}> У вас уже есть аккаунт? <span className='incitingText' onClick={() => navigate('/login')} >Авторизация</span> </Typography>
            </div>
        </>
    );
};

export default RegisterPage;