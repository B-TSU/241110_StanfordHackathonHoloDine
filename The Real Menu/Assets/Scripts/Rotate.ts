@component
export class RotateInPlace extends BaseScriptComponent {
    // Define rotationSpeed as a class property
    //@input float rotationSpeed = 10.0
    rotationSpeed: number = 0.05;

    onAwake() {
        // Register the update event
        this.createEvent("UpdateEvent").bind(this.onUpdate.bind(this));
        print("hi");
    }

    onUpdate(eventData) {
        // Get the current rotation
        const currentRotation = this.getTransform().getLocalRotation();
        
        // Create a new rotation increment on the Y-axis
        const rotationIncrement = quat.angleAxis(this.rotationSpeed * getDeltaTime(), vec3.up());
        
        // Apply the new rotation
        this.getTransform().setLocalRotation(currentRotation.multiply(rotationIncrement));
    }
}
