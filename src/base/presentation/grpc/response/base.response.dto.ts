import { BaseUniqueEntityId } from '../../../domain/identifier/base.unique-entity.id';
import { GrpcIdResponseDto } from './id.response.dto';

export interface GrpcBaseResponseProps {
  id: BaseUniqueEntityId;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

/**
 * Most of our response objects will have properties like
 * id, createdAt and updatedAt so we can move them to a
 * separate class and extend it to avoid duplication.
 */
export class BaseGrpcResponseDto extends GrpcIdResponseDto {
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string;

  constructor(props: GrpcBaseResponseProps) {
    super(props.id);
    this.createdAt = new Date(props.createdAt).toISOString();
    this.updatedAt = new Date(props.updatedAt).toISOString();
    this.deletedAt = props.deletedAt
      ? new Date(props.deletedAt).toISOString()
      : undefined;
  }
}
