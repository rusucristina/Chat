const MyMessages = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file} alt="message attachment"
                style={{ float: "right" , height:"100px", width:"100px"}} />
        )
    }
    return (
        <div style={{ float: "right", backgroundColor: "#3B2A50", color: "white", marginRight: "15px" }}>
            {message.text}
        </div>
    )
}
export default MyMessages;