const MyMessages = ({ message }) => {
    // console.log("message")
    // console.log(message)
    if (message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file} alt="message attachment"
            className="img-message"  />
        )
    }
    else{
       return (
        <div className="msg" >
            {message?.text}
        </div>
    ) 
    }
    
}
export default MyMessages;