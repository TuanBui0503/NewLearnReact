import Headerr from '../demo1/Headerr'
import Footer from '../demo1/Footer'
import Card from '../demo2/CardName'
import Student from '../demo3/Propss'
import User from '../demo4/User'
import List from '../demo5/List'
import Button from '../demo6/ClickeventAnduseStage'
import Input from '../demo7/OnChangeEvent'
import ChosseColor from '../demo8/ChosseColor'
import WorkApp from './Baitapbigsize'

function Appp () {
    return (
        <>
        <Headerr />
        <Footer />
        <Card name = 'Tuấn Bùi Quốc' decriptions = 'Đây là Tuấn phòng 505' />
        <Student name = "Tuấn Bùi Quốc" age = "24" isStudent = {true} />
        <Student name = "Hùng Bùi Quốc" age = "29" isStudent = {false} />

        <User isLoggdedin = {false} username = "Tuấn Bùi Quốc" />
        <List />
        <Button />
        <Input />
        <ChosseColor />

        <WorkApp />
        </>
    )
   
}
export default Appp