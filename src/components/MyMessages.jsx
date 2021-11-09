const MyMessages = ({ message }) => {
    if (message?.attachments&& message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file} alt="message attachment"
            className="img-message" style={{float:"right"}}  />
        )
    }
       return (
        <div className="msg" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    ) 
}
export default MyMessages;