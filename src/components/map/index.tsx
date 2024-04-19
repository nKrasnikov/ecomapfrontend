import { Clusterer, Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import MapNavigation from './mapnavigation';
import { IHideComponent } from '../../common/types/main';
import './style.scss';
import MapDotCreate from './mapdotcreate';

var ymapinstance: any
var placemarkinstance : any

const HideableMapNavigation = (props: IHideComponent) => {
    const { location } = props;
    if (location.match('/create')) {
        return null;
    }
    return (
        <MapNavigation />
    )
}

const HideableMapDotCreate = (props: IHideComponent) => {
    const { location } = props;
    if (location.match('/create')) {
        return <MapDotCreate />
    }
    return null;
}

const HideablePlacemark = (props: IHideComponent) => {
    const { location } = props;
    if (location.match('/create')) {
        // placemarkinstance.events.add('drag', function () {
        //     console.log('О, событие!');
        // });
        return (
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
            />
        );
    }
    return null;
}

const MapPage = () => {
    return (
        <div className='MapPage'>
            <Map id='ymap0' onClick={(event: any) => {
                const coords = event.get("coords");
                const ymapRootNode = document.getElementById('ymap0');

            }}
                width={2400}
                height={884}
                defaultState={{ center: [47.212584, 38.916468], zoom: 15, controls: ["typeSelector", "geolocationControl"], }}
                instanceRef={map => ymapinstance = map}
            >
                <Clusterer>
                    <Placemark
                        defaultGeometry={[47.219999, 38.919999]}
                        options={{
                            iconLayout: 'default#imageWithContent',
                            iconImageHref: "/recycle_map.svg",
                            iconImageSize: [50, 50],
                            iconImageOffset: [-15, -44],

                        }}
                        properties={{
                            hintContent: "<div><img src='plastic_map.svg' width={5} height={5}/><h3>Точка сдачи пластмассы</h3></div>",
                            balloonContentHeader: "Точка сбора пластика",
                            balloonContentBody:
                                "Здесь будет информация о точке.",
                            balloonContentFooter: "Здесь можно будет сдать пластик",
                            iconCaption: "Точка сбора мусора",
                        }} />
                    <HideablePlacemark location={window.location.pathname} />
                </Clusterer>
            </Map>
            <HideableMapNavigation location={window.location.pathname} />
            <HideableMapDotCreate location={window.location.pathname} />
        </div>
    );
};

export default MapPage;