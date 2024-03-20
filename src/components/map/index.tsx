import { Map, Placemark } from '@pbe/react-yandex-maps';
import { SvgIcon, TextField, ToggleButton } from '@mui/material';
import './style.scss';

const MapPage = () => {
    return (
        <div className='MapPage'>
            <Map
                width={2400}
                height={884}
                defaultState={{ center: [47.212584, 38.916468], zoom: 15, controls: ["typeSelector", "geolocationControl"], }}
            >
                <Placemark
                    defaultGeometry={[47.212584, 38.916468]}
                    properties={{
                        balloonContentBody:
                            "Здесь будет информация о точке. This is balloon loaded by the Yandex.Maps API module system"
                    }} />
            </Map>
            <div className='MapNavigation'>
                <TextField className='MapNavigation' placeholder='Поиск адреса или пункта' />
                <div className='MapNavigation_dots'>
                    <h1>Доступные пункты сдачи</h1>
                    <ToggleButton
                        value="check">
                        <SvgIcon>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M20.5001 6H3.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M9.5 11L10 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M14.5 11L14 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </SvgIcon>
                    </ToggleButton>
                </div>
            </div>
        </div>
    );
};

export default MapPage;