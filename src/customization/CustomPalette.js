export default class CustomPalette {
    constructor(create, elementFactory, palette, translate) {
      this.create = create;
      this.elementFactory = elementFactory;
      this.translate = translate;
      palette.registerProvider(this);
    }
  
    getPaletteEntries(element) {
      const {
        create,
        elementFactory,
        translate
      } = this;
  
      function createServiceTask(event) {
        const shape = elementFactory.createShape({ type: 'bpmn:ServiceTask' });
        create.start(event, shape);
      }
  
      return {
        'create.when-otherwise': {
          group: 'activity',
          className: 'bpmn-icon-service-task',
          title: translate('Create Agama When-Otherwise Block'),
          action: {
            dragstart: createServiceTask,
            click: createServiceTask
          }
        },
      }
    }
  }
  
  CustomPalette.$inject = [
    'create',
    'elementFactory',
    'palette',
    'translate'
  ];