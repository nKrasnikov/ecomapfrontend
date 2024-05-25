import { TextField } from "@mui/material";
import './style.scss';

// window.addEventListener('load', function() {
//     var points =  this.document.querySelector('.points');
//     var placemarks = this.document.querySelectorAll('.placemark');
// })

const MapNavigation = () => {
    return (
        <div className='MapNavigation'>
            <TextField className='MapNavigation' placeholder='Поиск адреса или пункта' />
            <div className='MapNavigation_dots'>
                <h1>Доступные пункты сдачи</h1>
                <div className="points">
                    <div className="point_body">
                        <h3 className="point_name"><span>Гипермаркет "Лента"</span></h3>
                        <h4 className="point_description"><span>Точка сбора батареек.<br/> Адрес г.Таганрог, ​Большая Бульварная, 15</span></h4>
                        <h5 className="point_time"><span>Время работы: круглосуточно</span></h5>
                    </div>
                    <div className="point_body">
                        <h3 className="point_name"><span>Экопункт "Чучева"</span></h3>
                        <h4 className="point_description"><span>Принимают: Макулатуру, пластик 1,2 , жесть и алюминий, алюм.фольгу. одежду.<br/> Адрес г.Таганрог, русское поле</span></h4>
                        <h5 className="point_time"><span>Время работы: с 12:00 до 13:00</span></h5>
                    </div>
                    <div className="point_body">
                        <h3 className="point_name"><span>ТРЦ "Мармелад"</span></h3>
                        <h4 className="point_description"><span>Точка сбора батареек.<br/> Адрес г.Таганрог, ​Мира площадь, 7</span></h4>
                        <h5 className="point_time"><span>Время работы: с 10:00 до 22:00</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapNavigation;