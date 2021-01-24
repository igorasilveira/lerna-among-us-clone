import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  private logger = new Logger('EventsGateway');

  @SubscribeMessage('clientUpdate')
  onClientUpdate(@MessageBody() data: any): Observable<WsResponse<any>> {
    return data;
  }

  @SubscribeMessage('test')
  test(@MessageBody() data: any): Observable<WsResponse<any>> {
    this.server.emit('serverUpdate', 'Working!');
    return data;
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    this.logger.log(`Client connected - id:${client.id}`);
    return;
  }
}
