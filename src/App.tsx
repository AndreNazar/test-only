
import HistoryBlock from "./components/history-block/HistoryBlock"
import "./styles/index.scss"
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function App()
{
    return <div className="global-container">
        <HistoryBlock />
    </div>
}