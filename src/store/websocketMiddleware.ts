import { Dispatch, MiddlewareAPI } from 'redux';
import { receivedGameState } from '../actions/actionTypes';
import * as actions from '../actions/websocketActions';
import {IServerEvent, IClientEvent, IPlayer, Phase, IGame, IServerEventVisitor, IClientEvent_StartGame, Void} from 'onuw-server-api';


const socketMiddleware = () => {
  let socket: WebSocket | null = null;

  const onOpen = (store:MiddlewareAPI) => (event: any) => {
    console.log('websocket open', event.target.url);
    store.dispatch(actions.wsConnected(event.target.url));
  };

  const onClose = (store:MiddlewareAPI) => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const serverEventVisitor= (store:MiddlewareAPI) => {
    return {
      addPlayer: (obj: IPlayer) => console.log("TODOaddPlayer"),
      updatePlayer: (obj: IPlayer) => console.log("TODOupdate"),
      changePhase: (obj: Phase) => console.log("TODOchangePhase"),
      updateTime: (obj: number) => console.log("TODOtime"),
      fullUpdate: (obj: IGame) => store.dispatch(receivedGameState(obj)),
      unknown: (obj: IServerEvent) => console.log("TODOunknown"),
    }
  }

  const onMessage = (store:MiddlewareAPI) => (event: any) => {
    console.log('receiving server message');
    console.log(event.data);
    const payload = JSON.parse(event.data);
    console.log(payload)
    console.log(payload.type);
    IServerEvent.visit((payload as IServerEvent), serverEventVisitor(store));
  };

  // the middleware part of this function
  return (store:MiddlewareAPI) => (next: Dispatch) => (action:any) => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }
        console.log("Connecting to host " + action)
        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log('websocket closed');
        break;
      case 'START_GAME':
        console.log('starting game');
        if (socket !== null) {
          const startGame = IClientEvent.startGame(Void.VOID)
          socket.send(JSON.stringify(startGame));
        }
        break;
      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};

export default socketMiddleware();