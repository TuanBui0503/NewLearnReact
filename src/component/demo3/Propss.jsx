function Student (props) {
    return (
        <div style={{
            border: "1px solid",
            padding: "20px",
            fontSize: "20px",
            maxWidth: "200px"
        }}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No" }</p>
        </div>
    )
}
export default Student