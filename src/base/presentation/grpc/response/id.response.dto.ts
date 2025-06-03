import { BaseUniqueEntityId } from '../../../domain/identifier/base.unique-entity.id';

export class GrpcIdResponseDto {
  constructor(id: BaseUniqueEntityId) {
    this.id = id;
  }

  readonly id: BaseUniqueEntityId;
}
