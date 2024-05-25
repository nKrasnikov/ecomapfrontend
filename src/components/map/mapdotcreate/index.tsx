import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, TextField, styled } from "@mui/material";
import './style.scss';
var address_field: any;
var description_field: any;

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#50735F' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#50735F',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#2F513D',
    },
});

// Inspired by blueprintjs
function BpRadio(props: any) {
    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

const MapDotCreate = (props: any) => {
    //const {address} = props;
    return (
        <div className='MapNavigation1'>
            <Button href="/map" sx={{ ":hover": { backgroundColor: '#50735F' }, backgroundColor: '#50735F', fontFamily: 'Forum', marginTop: 4, marginBottom: 0, marginLeft: 4, width: '18%', minWidth: '200px' }} variant="contained">← Назад к карте</Button>
            <div className='MapNavigation_dots'>
                <h1>Добавить точку</h1>
                <h3>Наименование точки *</h3>
                <div className="name_input">
                    <TextField
                        color="success"

                        sx={{
                            "& .MuiOutlinedInput-root": {
                                color: "#50735F",
                                fontSize: '16px',
                                fontFamily: "Alice",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#50735F",
                                    borderWidth: "2px",
                                },
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#50735F",
                                        borderWidth: "3px",
                                    },
                                }
                            },
                            minWidth: '250px',
                            width: '100%',
                            maxWidth: '800px',
                        }}
                        required
                        //error
                        id="outlined-required"
                        placeholder="Введите наименование точки"
                    />
                    <h3>Доступность точки *</h3>
                    <FormControl>
                        <RadioGroup
                            defaultValue="free"
                            name="customized-radios"
                        >
                            <FormControlLabel sx={{}} value="free" control={<BpRadio />} label="Общедоступная точка" />
                            <FormHelperText sx={{ color: '#50735F' }} >Воспользоваться пунктом могут все</FormHelperText>
                            <FormControlLabel value="notfree" control={<BpRadio />} label="Частная точка" />
                            <FormHelperText sx={{ color: '#50735F' }} >Воспользоваться пунктом могут только жильцы дома/ сотрудники организации</FormHelperText>
                        </RadioGroup>
                    </FormControl>
                    <h3>Адрес точки *</h3>
                    <TextField
                        color="success"
                        ref={address_field}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                color: "#50735F",
                                fontSize: '16px',
                                fontFamily: "Alice",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#50735F",
                                    borderWidth: "2px",
                                },
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#50735F",
                                        borderWidth: "3px",
                                    },
                                }
                            },
                            minWidth: '250px',
                            width: '100%',
                            maxWidth: '800px',
                        }}
                        required
                        //error
                        id="outlined-required"
                        placeholder="Введите адрес точки"
                    //value={address}
                    />
                    <h3>Описание точки</h3>
                    <TextField
                        color="success"
                        ref={description_field}
                        InputProps={{
                            inputProps: {
                                style: { textAlign: 'start', verticalAlign: 'top', alignSelf: 'self-start' },
                            }
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: '100px',
                                color: "#50735F",
                                fontSize: '16px',
                                fontFamily: "Alice",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#50735F",
                                    borderWidth: "2px",
                                },
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#50735F",
                                        borderWidth: "3px",
                                    },
                                }
                            },
                            minWidth: '250px',
                            width: '100%',
                            maxWidth: '800px',
                        }}
                        //error
                        id="outlined"
                        placeholder="Введите описание точки"
                    //value={address}
                    />
                    <h3>Время работы</h3>
                    <TextField
                        color="success"
                        ref={description_field}
                        InputProps={{
                            inputProps: {
                                style: { textAlign: 'start', verticalAlign: 'top', alignSelf: 'self-start' },
                            }
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                color: "#50735F",
                                fontSize: '16px',
                                fontFamily: "Alice",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#50735F",
                                    borderWidth: "2px",
                                },
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#50735F",
                                        borderWidth: "3px",
                                    },
                                }
                            },
                            minWidth: '250px',
                            width: '100%',
                            maxWidth: '800px',
                        }}
                        //error
                        id="outlined"
                        placeholder="Введите время работы. Например, круглосуточно, 06:00 - 23:00, и т. д."
                    //value={address}
                    />
                </div>
                <h3>Тип сортируемого мусора *</h3>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox name="tape" />
                                }
                                label="Плёнка"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="plastic" />
                                }
                                label="Пластик"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="glass" />
                                }
                                label="Стекло"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        required
                        component="fieldset"
                        sx={{ m: 3 }}
                        variant="standard"
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox name="tire" />
                                }
                                label="Шины"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="metal" />
                                }
                                label="Металл"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="tech" />
                                }
                                label="Техника"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        required
                        component="fieldset"
                        sx={{ m: 3 }}
                        variant="standard"
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox name="paper" />
                                }
                                label="Макулатура"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="polymer" />
                                }
                                label="Полимеры"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="battery" />
                                }
                                label="Батарейки"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        required
                        component="fieldset"
                        sx={{ m: 3 }}
                        variant="standard"
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox name="cloth" />
                                }
                                label="Одежда"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="lamp" />
                                }
                                label="Лампочки"
                            />
                        </FormGroup>
                    </FormControl>
                </Box>
            </div>
            <Button href="/create" sx={{ "&:hover": { backgroundColor: '#50735F' }, backgroundColor: '#50735F', fontFamily: 'Forum', marginTop: 0, marginBottom: 5, marginLeft: '33%', width: '33%', minWidth: '200px' }} variant="contained">Добавить</Button>
        </div>
    );
};

export default MapDotCreate;