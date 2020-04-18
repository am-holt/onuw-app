export const wsConnect = (host: any) => ({ type: 'WS_CONNECT', host });
export const wsConnected = (host: any) => ({ type: 'WS_CONNECTED', host });
export const wsDisconnect = (host: any) => ({ type: 'WS_DISCONNECT', host });
export const wsDisconnected = () => ({ type: 'WS_DISCONNECTED' });

export const startGame = () => ({ type: 'START_GAME' });
export const editName = (name: string) => ({ type: 'EDIT_NAME', name });