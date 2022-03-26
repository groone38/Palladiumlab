import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Examples from "./components/examples/Examples";
import Contact from "./components/connection/Contact";
import Сopyright from "./components/copyright/Сopyright";
import back from "./images/img_service/back.png";
import {useSelector} from "react-redux";

function App() {
    const hover = useSelector(state => state.hover.hover)
    return (
        <div className={'wrapper'}>
            <div style={{position: 'relative', width: '100%', height: '810px'}}>
                {!hover && <div className={'img'} style={{backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat'}}></div>}
                <Header/>
                <Main/>
            </div>
            <Examples/>
            <Contact />
            <Сopyright />
        </div>
    );
}

export default App;
