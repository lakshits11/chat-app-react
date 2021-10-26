const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser =
        !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{
                        backgroundImage:
                            message.sender && `url(${message.sender.avatar})`,
                    }}
                />
            )}

            {/* Checking if message contains an image */}
            {message.attachments && message.attachments.length > 0 ? (
                <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{
                        marginLeft: isFirstMessageByUser ? "4px" : "48px",
                    }}
                />
            ) : (
                <div
                    className="message"
                    style={{
                        float: "left",
                        backgroundImage:
                            "linear-gradient(to right,#914DFF, #FF2E6D)",
                        marginLeft: isFirstMessageByUser ? "4px" : "48px",
                    }}
                >
                    {message.text.replace(/<\/?[^>]+(>|$)/g, "")}
                </div>
            )}
        </div>
    );
};

export default TheirMessage;
