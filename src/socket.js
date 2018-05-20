import io from 'socket.io-client/dist/socket.io';
//importing the socket module

const socket = io('http://localhost:9000', {
jsonp: false}); 
//setting it up with our server.  The jsonp set to false needs to always be in this.  We always need this snippet
socket.on('connected', function(data) {
    console.log(data);});
//This is listening for the socket


export default socket;
//exporting the socket so we can use it in other places.

