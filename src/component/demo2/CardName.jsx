import Avarta from './img/ins.jpg'
import '../demo2/card.css'
// Tên import đặt gì cũng đc
const Card = (props) => {
    return (
        <>
    <div className='card'>
        <img className='card-img' src={Avarta} alt="a" />
        <h2>{props.name}</h2>
        <p>{props.decriptions}</p>
    </div>
    </>
    )
}
export default Card