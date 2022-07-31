import './theme-button.style.scss';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getTheme } from "../../../redux/themes/themes.selectors";
import { setTheme } from "../../../redux/themes/themes.slice";
import {ReactComponent as SunSVG} from '../../../assets/theme-buttons/sun-svgrepo-com (1).svg';
import {ReactComponent as MoonSVG} from '../../../assets/theme-buttons/moon-svgrepo-com.svg';
import { AppDispatch } from '../../../redux/store';

const ThemeButton = () => {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector(getTheme);

    const changeTheme = () => {
        theme === 'light' ? dispatch(setTheme('dark')) : dispatch(setTheme('light'))
    }

    if(theme === 'dark') 
        return <MoonSVG onClick={changeTheme} className="theme-button"/>;

    return <SunSVG onClick={changeTheme} className="theme-button"/>;
}

export default ThemeButton;