const Task = ({data}) => {
    return (<>
    <span>{data.id}</span>
    <span>{data.content}</span>
    </>)
}

export default Task;