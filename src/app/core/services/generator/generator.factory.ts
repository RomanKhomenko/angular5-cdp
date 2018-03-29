import { GeneratorService } from './generator.service';

export function GeneratorFactory(take: number) {
  return function(service: GeneratorService): string {
    return service.getSequance(take);
  };
}
