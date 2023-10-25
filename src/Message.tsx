interface Props{
    self: boolean
    user: string;
    date: string;
    text: string;
}

export default function(props: Props ) {
    const {user, date, text, self} = props;
    return <>
    <div className= {self ? "message self" : "message"}>
        <div className="user">{user}</div>
        <div className="date">{date}</div>
        <div className="text">{text}</div>
      </div>
    </>
}