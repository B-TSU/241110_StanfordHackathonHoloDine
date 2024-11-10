@component
export class ButtonToggleFunctions extends BaseScriptComponent {
    
    
    disableObject() {
        // Use 'this' to access the input property
        if (this.sceneObject) {
            this.sceneObject.enabled = false;
        }
    }
}
