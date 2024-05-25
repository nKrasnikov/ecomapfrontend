import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const HideableAuthorizationLink = (props: any) => {
    const { location } = props;
    const { setAddress } = props;
    if (true) {//useAuth()
        return  null;
    }
    return (
        <Link underline="none" href='login' ><span>Вход</span></Link>
    );
}

const Header = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <div className='Header'>
            <div className='header_logo'>
                <Link className='header_logo_link' underline="none" href='/home'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 9C13 9 14 7 14 5C14 3 12 1 12 1C12 1 10 3 10 5C10 7 11 9 11 9M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z" stroke="black" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 10.9999C9 10.9999 7 9.99992 5 9.99992C3 9.99992 1 11.9999 1 11.9999C1 11.9999 3 13.9999 5 13.9999C7 13.9999 9 12.9999 9 12.9999M13 14.9999C13 14.9999 14 16.9999 14 18.9999C14 20.9999 12 22.9999 12 22.9999C12 22.9999 10 20.9999 10 18.9999C10 16.9999 11 14.9999 11 14.9999M15 10.9999C15 10.9999 17 9.99992 19 9.99992C21 9.99992 23 11.9999 23 11.9999C23 11.9999 21 13.9999 19 13.9999C17 13.9999 15 12.9999 15 12.9999M10.586 9.17192C10.586 9.17192 9.879 7.04992 8.464 5.63592C7.05 4.22192 4.222 4.22192 4.222 4.22192C4.222 4.22192 4.222 7.04992 5.636 8.46492C7.05 9.87892 9.172 10.5859 9.172 10.5859M9.172 13.4139C9.172 13.4139 7.05 14.1209 5.636 15.5359C4.222 16.9499 4.222 19.7779 4.222 19.7779C4.222 19.7779 7.05 19.7779 8.464 18.3639C9.879 16.9499 10.586 14.8279 10.586 14.8279M14.829 13.4139C14.829 13.4139 16.949 14.1209 18.364 15.5359C19.778 16.9499 19.778 19.7779 19.778 19.7779C19.778 19.7779 16.95 19.7779 15.536 18.3639C14.121 16.9499 13.414 14.8279 13.414 14.8279M13.414 9.17192C13.414 9.17192 14.121 7.04992 15.536 5.63592C16.95 4.22192 19.778 4.22192 19.778 4.22192C19.778 4.22192 19.778 7.04992 18.364 8.46492C16.95 9.87892 14.828 10.5859 14.828 10.5859" stroke="black" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>
                        EcoMap
                    </span>
                </Link>
            </div>
            <div className='header_navigation'>
                <span onClick={() => navigate('/create')}>Добавить точку</span>
                <span onClick={() => navigate('/map')}>Карта</span>
                <span>Наша команда</span>
                <span>Контакты</span>
                <HideableAuthorizationLink></HideableAuthorizationLink>
                <span>Личный кабинет</span>
            </div>
        </div>
    );
};

export default Header;
