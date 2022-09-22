const MAX_NUMBER_OF_REPEAT = 3

export default class CustomPalette {
    constructor(bpmnFactory, create, elementFactory, palette, translate) {
      this.bpmnFactory = bpmnFactory;
      this.create = create;
      this.elementFactory = elementFactory;
      this.translate = translate;
      palette.registerProvider(this);
    }
  
    getPaletteEntries(element) {
      const {
        bpmnFactory,
        create,
        elementFactory,
        translate
      } = this;
  
      function createServiceTask(event) {
        const shape = elementFactory.createShape({ type: 'bpmn:ServiceTask' });
        create.start(event, shape);
      }
  
      function createRepeatTask(maxNumberOfRepeat) {
        return function(event) {
          const businessObject = bpmnFactory.create('bpmn:Task');
  
          businessObject.maxNumberOfRepeat = maxNumberOfRepeat;
  
          const shape = elementFactory.createShape({
            type: 'bpmn:Task',
            businessObject: businessObject
          });
  
          create.start(event, shape);
        };
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
        'create.repeat': {
          group: 'activity',
          className: 'bpmn-icon-loop-marker',
          title: translate('Create Agama Repeat Block'),
          action: {
            dragstart: createRepeatTask(MAX_NUMBER_OF_REPEAT),
            click: createRepeatTask(MAX_NUMBER_OF_REPEAT)
          }
        },
      }
    }
  }
  
  CustomPalette.$inject = [
    'bpmnFactory',
    'create',
    'elementFactory',
    'palette',
    'translate'
  ];