import './style.scss';
import { Button } from '@mui/material';

const HomePage = () => {
    return (
        <div className='Home'>
            <div className='Text'>
                <h1>Маленький шаг</h1>
                <h1>Большое будущее</h1>
                <div className='Text2'>
                    <h3>
                        Миссия нашего сайта - помочь людям увидеть и оценить экологическую составляющую своего города. Мы стремимся создать удобную и информативную платформу, где каждый может узнать больше о зеленых источниках энергии, переработке отходов и других аспектах экологии и устойчивого развития.
                    </h3>
                </div>
            </div>
            <Button href='map' color='success' sx={{ backgroundColor: '#50735F', fontFamily: 'Forum', marginTop: 5, marginBottom: 2, width: '20%' }} variant="contained">Карта</Button>
        </div>
    );
};

export default HomePage;