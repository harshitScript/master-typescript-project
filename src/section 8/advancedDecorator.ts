//? More advanced decorator.
//* Goals
/*
    we are going to render a specific uid to the dom just before the class is used,
    so the class can utilize the uid to perform its operation.
*/

function AttachSecretUid(message: string, elementId: string) {
    return function (Constructor: any) {
        const secretRender = new Constructor();
        const { uid } = secretRender;
        const secretUIDRenderer = <HTMLParagraphElement>document.querySelector(`#${elementId}`)!;
        secretUIDRenderer.innerHTML = uid;
        console.log(message);
    }
}
@AttachSecretUid('Secret UID attached sucessfully!', 'secret-uid-renderer')
class SecretRender {
    readonly uid = 'xxxxyyyyzzz';
    constructor() { };
    uidOperations() {
        //? do some operations with dom element that have uid
    }
}