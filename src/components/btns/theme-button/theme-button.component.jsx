import { useSelector, useDispatch } from "react-redux/es/exports";
import { getTheme } from "../../../redux/themes/themes.selectors";
import { setThemeAction } from "../../../redux/themes/themes.actions";
import {ReactComponent as SunSVG} from '../../../assets/theme-buttons/sun-svgrepo-com (1).svg';
import {ReactComponent as MoonSVG} from '../../../assets/theme-buttons/moon-svgrepo-com.svg';
import './theme-button.style.scss';

const ThemeButton = () => {
    const theme = useSelector(getTheme);
    const dispatch = useDispatch();

    const changeTheme = () => {
        theme === 'light' ? dispatch(setThemeAction('dark')) : dispatch(setThemeAction('light'))
    }

    if(theme === 'dark') 
        return <MoonSVG onClick={changeTheme} className="theme-button"/>;

    return <SunSVG onClick={changeTheme} className="theme-button"/>;
}

export default ThemeButton;