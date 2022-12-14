
export function initAgamaPalette(PaletteProvider){
  const _getPaletteEntries = PaletteProvider.prototype.getPaletteEntries
  PaletteProvider.prototype.getPaletteEntries = function (element) {
    const entries = _getPaletteEntries.apply(this)
    delete entries['create.start-event']
    delete entries['create.intermediate-event']
    delete entries['create.end-event']
    delete entries['create.exlusive-gateway']
    delete entries['create.task']
    delete entries['create.service-task']
    delete entries['create.data-object']
    delete entries['create.data-store']
    delete entries['create.subprocess-expended']
    delete entries['create.group']
    return entries
  }
}


export function initDiagam(){
    return '<?xml version="1.0" encoding="UTF-8"?>'+
    '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:custom="http://custom/ns" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">'+
      '<bpmn:process id="Process_1" isExecutable="false">'+
      '</bpmn:process>'+
      '<bpmndi:BPMNDiagram id="BPMNDiagram_1">'+
      '<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">'+
      '<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">'+
        '<dc:Bounds x="173" y="188" width="36" height="36" />'+
        '<bpmndi:BPMNLabel>'+
          '<dc:Bounds x="146" y="224" width="90" height="20" />'+
        '</bpmndi:BPMNLabel>'+
      '</bpmndi:BPMNShape>'+
      '<bpmndi:BPMNEdge id="SequenceFlow_0b6cm13_di" bpmnElement="SequenceFlow_0b6cm13">'+
        '<di:waypoint x="209" y="206" />'+
        '<di:waypoint x="256" y="206" />'+
       '<bpmndi:BPMNLabel>'+
         '<dc:Bounds x="192.5" y="110" width="90" height="20" />'+
        '</bpmndi:BPMNLabel>'+
      '</bpmndi:BPMNEdge>'+
      '<bpmndi:BPMNShape id="EndEvent_09arx8f_di" bpmnElement="EndEvent_09arx8f">'+
        '<dc:Bounds x="552" y="188" width="36" height="36" />'+
        '<bpmndi:BPMNLabel>'+
          '<dc:Bounds x="404" y="138" width="90" height="20" />'+
        '</bpmndi:BPMNLabel>'+
      '</bpmndi:BPMNShape>'+
      '<bpmndi:BPMNEdge id="SequenceFlow_17w8608_di" bpmnElement="SequenceFlow_17w8608">'+
        '<di:waypoint x="356" y="206" />'+
        '<di:waypoint x="399" y="206" />'+
        '<bpmndi:BPMNLabel>'+
          '<dc:Bounds x="353.5" y="110" width="90" height="20" />'+
        '</bpmndi:BPMNLabel>'+
      '</bpmndi:BPMNEdge>'+
      '<bpmndi:BPMNShape id="Task_1xewseo_di" bpmnElement="Task_1xewseo">'+
        '<dc:Bounds x="399" y="166" width="100" height="80" />'+
      '</bpmndi:BPMNShape>'+
      '<bpmndi:BPMNEdge id="SequenceFlow_035kn8o_di" bpmnElement="SequenceFlow_035kn8o">'+
        '<di:waypoint x="499" y="206" />'+
        '<di:waypoint x="552" y="206" />'+
      '</bpmndi:BPMNEdge>'+
      '<bpmndi:BPMNShape id="ServiceTask_0wob562_di" bpmnElement="Task_0zlv465">'+
        '<dc:Bounds x="256" y="166" width="100" height="80" />'+
      '</bpmndi:BPMNShape>'+
      '</bpmndi:BPMNPlane>'+
      '</bpmndi:BPMNDiagram>'+
    '</bpmn:definitions>'
}