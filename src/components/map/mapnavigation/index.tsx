import { TextField, ToggleButton } from "@mui/material";

const MapNavigation = () => {
    return (
        <div className='MapNavigation'>
            <TextField className='MapNavigation' placeholder='Поиск адреса или пункта' />
            <div className='MapNavigation_dots'>
                <h1>Доступные пункты сдачи</h1>
                <div color='red'>
                    <img src='plastic.svg' />
                    <h3>Точка сдачи пластмассы</h3>
                </div>
                <ToggleButton
                    value="check">
                    <img src="plastic.svg" width={30} height={30} />
                </ToggleButton>
            </div>
        </div>
    );
};

export default MapNavigation;