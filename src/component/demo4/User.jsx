// Hiển thị các thành phần dựa trên điều kiện nhất định (conditional rendering)

function User (props) {
    return (
        <>
        <hr />
        <h2>demo4</h2>
         <div>
            {props.isLoggdedin ? <h3>Chào mừng bạn đến với phòng 505</h3> : <h3>Vui lòng gọi {props.username}
             để mở cửa</h3>}
        </div>
        </>
       
    )
}
export default User