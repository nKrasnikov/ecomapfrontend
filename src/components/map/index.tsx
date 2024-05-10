import { Clusterer, Map, Placemark } from '@pbe/react-yandex-maps';
import MapNavigation from './mapnavigation';
import { IHideComponent } from '../../common/types/main';
import './style.scss';
import MapDotCreate from './mapdotcreate';
import { useState } from 'react';

var ymapinstance: any
var placemarkinstance: any

const HideableMapNavigation = (props: IHideComponent) => {
    const { location } = props;
    if (location.match('/create')) {
        return null;
    }
    return (
        <MapNavigation />
    )
}

const HideableMapDotCreate = (props: any) => {
    const { location } = props;
    const { address } = props;
    if (location.match('/create')) {
        return <MapDotCreate address={address}/>
    }
    return null;
}

const HideablePlacemark = (props: any) => {
    const { location } = props;
    const { setAddress } = props;
    if (location.match('/create')) {
        return (
            <div className="hiddeable_placemark">
                <Placemark
                    instanceRef={placemark => placemarkinstance = placemark}
                    defaultGeometry={ymapinstance.getCenter()}
                    options={{
                        iconLayout: 'default#imageWithContent',
                        iconImageHref: "/new_map.svg",
                        iconImageSize: [50, 50],
                        iconImageOffset: [-15, -44],
                        draggable: true,
                    }}
                    onDragEnd={(e : any) => {
                        console.log(e.get('target').geometry.getCoordinates());
                        setAddress(e.get('target').geometry.getCoordinates());
                        console.log(e.get('target').options.get('draggable'));
                    }}
                />
            </div>
        );
    }
    return null;
}

const MapPage = () => {
    const [address, setAddress] = useState('');

    return (
        <div className='MapPage'>
            <Map id='ymap0' onClick={(event: any) => {
                //const coords = event.get("coords");
                //const ymapRootNode = document.getElementById('ymap0');
                //console.log(coords);

            }}
                width={2400}
                height={884}
                defaultState={{ center: [47.212584, 38.916468], zoom: 15, controls: ["typeSelector", "geolocationControl"], }}
                instanceRef={map => ymapinstance = map}
                boundschange={(e : any) => console.log("kek")}
                onDragEnd={(e : any) => console.log("kek")}
                
            >
                <Clusterer>
                    <div className='placemark'>
                        <Placemark 
                            defaultGeometry={[47.24574431676093, 38.89180146913285]}
                            options={{
                                iconLayout: 'default#imageWithContent',
                                iconImageHref: "/recycle_map.svg",
                                iconImageSize: [50, 50],
                                iconImageOffset: [-15, -44],

                            }}
                            properties={{
                                hintContent: "<span><h3>Гипермаркет \"Лента\"<br/><h3/> <h4>Точка сбора батареек.<h4/></span>",
                                balloonContentHeader: "Гипермаркет \"Лента\"",
                                balloonContentBody:
                                    "<span>Точка сбора батареек.<br/> Адрес г.Таганрог, ​Большая Бульварная, 15</span>",
                                balloonContentFooter: "Время работы: круглосуточно",
                            }} />
                    </div>
                    <div className='placemark'>
                        <Placemark
                            defaultGeometry={[47.21534569554265, 38.864756141668316]}
                            options={{
                                iconLayout: 'default#imageWithContent',
                                iconImageHref: "/recycle_map.svg",
                                iconImageSize: [50, 50],
                                iconImageOffset: [-15, -44],

                            }}
                            properties={{
                                hintContent: "<span><h3>Экопункт \"Чучева\"<br/><h3/> <h4>Точка сбора макулатуры, пластика, жести,<br/>алюминия, одежды.<h4/></span>",
                                balloonContentHeader: "Экопункт \"Чучева\"",
                                balloonContentBody:
                                    "<span>Принимают: Макулатуру, пластик 1,2 , жесть и алюминий, алюм.фольгу. одежду.<br/> Адрес г.Таганрог, русское поле</span>",
                                balloonContentFooter: "Время работы: с 12:00 до 13:00",
                            }} />
                    </div>

                    <div className='placemark'>
                        <Placemark
                            defaultGeometry={[47.217697480770504, 38.89924553591531]}
                            options={{
                                iconLayout: 'default#imageWithContent',
                                iconImageHref: "/recycle_map.svg",
                                iconImageSize: [50, 50],
                                iconImageOffset: [-15, -44],

                            }}
                            properties={{
                                hintContent: "<span><h3>ТРЦ \"Мармелад\"<br/><h3/> <h4>Точка сбора батареек.<h4/></span>",
                                balloonContentHeader: "ТРЦ \"Мармелад\"",
                                balloonContentBody:
                                    "<span>Точка сбора батареек.<br/> Адрес г.Таганрог, ​Мира площадь, 7</span>",
                                balloonContentFooter: "Время работы: с 10:00 до 22:00",
                            }} />
                    </div>
                    <HideablePlacemark location={window.location.pathname} setAddress={setAddress}/>
                </Clusterer>
            </Map>
            <HideableMapNavigation location={window.location.pathname} />
            <HideableMapDotCreate location={window.location.pathname} address={address.toString()}/>
        </div>
    );
};

export default MapPage;