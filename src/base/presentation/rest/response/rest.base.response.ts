import { ApiProperty } from '@nestjs/swagger';
import { RestIdResponse } from './rest.id.response';

export interface BaseRestResponseProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Most of our response objects will have properties like
 * id, createdAt and updatedAt so we can move them to a
 * separate class and extend it to avoid duplication.
 */
export class BaseRestResponse extends RestIdResponse {
  constructor(props: BaseRestResponseProps) {
    super(props.id);
    this.createdAt = new Date(props.createdAt).toISOString();
    this.updatedAt = new Date(props.updatedAt).toISOString();
  }

  @ApiProperty({ example: '2020-11-24T17:43:15.970Z' })
  readonly createdAt: string;

  @ApiProperty({ example: '2020-11-24T17:43:15.970Z' })
  readonly updatedAt: string;
}
