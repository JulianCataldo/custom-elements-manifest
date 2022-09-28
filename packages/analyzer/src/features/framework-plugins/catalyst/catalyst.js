import { attrDecoratorPlugin } from '../decorators/attr.js';
import { controllerPlugin } from './controller.js';
import { toKebabCase } from '../../../utils/index.js'

export const catalystPlugin = () => [
  attrDecoratorPlugin(attr => {
    attr.name = `data-${toKebabCase(attr.name)}`;
    return attr;
  }),
  controllerPlugin()
]
