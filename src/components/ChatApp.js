import React, {Component} from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageList from './MessageList';
import Input from './Input';

class ChatApp extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            currentUser: "Admin",
            currentRoom: {users:[]},
            messages: [],
            users: []
        }
        this.addMessage = this.addMessage.bind(this);
    }

  componentDidMount() {
    const chatManager = new ChatManager({
        instanceLocator: "v1:us1:f04ab5ec-b8fc-49ca-bcfb-c15063c21da8",
        userId: "Admin",
        //userId: this.props.currentId,
        tokenProvider: new TokenProvider({
            url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/f04ab5ec-b8fc-49ca-bcfb-c15063c21da8/token"
        })
    })

    chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser: currentUser })
                return currentUser.subscribeToRoom({
                    roomId: "08046cff-e7be-416e-ae0f-539daa750985",
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                    }
                })
            })
            .then(currentRoom => {
                this.setState({
                    currentRoom,
                    users: currentRoom.userIds
                })
            })
            .catch(error => console.log(error))
    }
    addMessage(text) {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
        .catch(error => console.error('error', error));
    }
    render() {
        return (
            <div className="chatapp">
                <div>
                <h2 className="header">Hi There, Ask us anything</h2>
                    <MessageList messages={this.state.messages} />
                    <Input className="input-field" onSubmit={this.addMessage} />
                </div>
            </div>
        )
    }
}
export default ChatApp;