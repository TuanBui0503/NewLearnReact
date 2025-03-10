function UserGreating (props) {
        if (props.isLoggIn) {
            return <h2>Xin chào {props.username}</h2>
        }
        else {
            return <h2>Vui lòng đăng nhập lại</h2>
        }
}
export default UserGreating