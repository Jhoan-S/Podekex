import { map } from 'rxjs';

export const JSAdapter = ({ responseModel }: any) => (_target: any, _propertyName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function () {
    const sourceModel = originalMethod.apply(this, arguments)

    return sourceModel.pipe(
      map(res => transformModel({ sourceModel: res, targetModel: responseModel }))
    );

  }
  return descriptor;
};

const transformModel = ({ sourceModel, targetModel }: any) => {
  if (!targetModel) return sourceModel;

  if (Array.isArray(sourceModel)) return sourceModel.map(data => new targetModel(data));

  return new targetModel(sourceModel);
}