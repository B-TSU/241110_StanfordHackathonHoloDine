import { Interactable } from 'SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable';

@component
export class EnableDynamics extends BaseScriptComponent {
    interactable: Interactable;
    
    
    onAwake() {
        this.interactable = this.sceneObject.getComponent(Interactable.getTypeName());
        this.createEvent("OnStartEvent").bind(this.onStart);
        
        

        
    }
    
    onStart = () => {
        
        this.interactable.onTriggerEnd.add(() => {
            print("LETS GOOOOOOOO");
            
        });
        
    }
    
}