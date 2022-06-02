import { useSelector } from "react-redux/es/exports";
import { getTheme } from "../../../redux/themes/themes.selectors";
import {ReactComponent as SunSVG} from '../../../assets/theme-buttons/sun-svgrepo-com (1).svg';
import {ReactComponent as MoonSVG} from '../../../assets/theme-buttons/moon-svgrepo-com.svg';
import './theme-button.style.scss';

const ThemeButton = ({onClick}) => {
    const theme = useSelector(getTheme);

    if(theme === 'dark') 
        return <MoonSVG onClick={onClick} className="theme-button"/>;

    return <SunSVG onClick={onClick} className="theme-button"/>;
}

export default ThemeButton;