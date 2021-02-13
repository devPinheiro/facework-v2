import Echo from 'laravel-echo';
import axios from '../store/Axios'
import Pusher from 'pusher-js'

const broadcaster = process.env.BROADCASTER;
const key = process.env.BROADCASTER_KEY;
const cluster = process.env.BROADCASTER_CLUSTER;

export const echo = () => {
    return new Echo({
        broadcaster: broadcaster,
        key: key,
        cluster: cluster,
        forceTLS: false,
        authorizer: (channel, options) => {
            return {
                authorize: (socketId, callback) => {
                    axios.post('broadcasting/auth', {
                        socket_id: socketId,
                        channel_name: channel.name
                    }, {
                        headers:
                            { Authorization: `Bearer ${localStorage.auth}` }
                    })
                        .then(response => {
                            callback(false, response.data);
                        })
                        .catch(error => {
                            callback(true, error);
                        });
                }
            };
        },
    });
}