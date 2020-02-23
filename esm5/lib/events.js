// If we don't check whether 'window' and 'global' variables are defined,
// code will fail in browser/node with 'variable is undefined' error.
var root;
if (typeof window !== 'undefined') {
    root = window;
}
else if (typeof global !== 'undefined') {
    root = global;
}
// tslint:disable-next-line:variable-name
export var MouseEvent = root.MouseEvent;
export function createMouseEvent(name, bubbles, cancelable) {
    if (bubbles === void 0) { bubbles = false; }
    if (cancelable === void 0) { cancelable = true; }
    // Calling new of an event does not work correctly on IE. The following is a tested workaround
    // See https://stackoverflow.com/questions/27176983/dispatchevent-not-working-in-ie11
    if (typeof MouseEvent === 'function') {
        // Sane browsers
        return new MouseEvent(name, { bubbles: bubbles, cancelable: cancelable });
    }
    else {
        // IE
        var event_1 = document.createEvent('MouseEvent');
        event_1.initEvent(name, bubbles, cancelable);
        return event_1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLHlFQUF5RTtBQUN6RSxxRUFBcUU7QUFDckUsSUFBSSxJQUFTLENBQUM7QUFDZCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUNqQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0NBQ2Y7S0FBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUN4QyxJQUFJLEdBQUcsTUFBTSxDQUFDO0NBQ2Y7QUFFRCx5Q0FBeUM7QUFDekMsTUFBTSxDQUFDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUc5QixDQUFDO0FBRUYsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxPQUF3QixFQUFFLFVBQTBCO0lBQXBELHdCQUFBLEVBQUEsZUFBd0I7SUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtJQUNqRyw4RkFBOEY7SUFDOUYscUZBQXFGO0lBQ3JGLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO1FBQ3BDLGdCQUFnQjtRQUNoQixPQUFPLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztLQUN0RDtTQUFNO1FBQ0wsS0FBSztRQUNMLElBQU0sT0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsT0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sT0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBsZXQgZ2xvYmFsOiBhbnk7XG5cbi8vIElmIHdlIGRvbid0IGNoZWNrIHdoZXRoZXIgJ3dpbmRvdycgYW5kICdnbG9iYWwnIHZhcmlhYmxlcyBhcmUgZGVmaW5lZCxcbi8vIGNvZGUgd2lsbCBmYWlsIGluIGJyb3dzZXIvbm9kZSB3aXRoICd2YXJpYWJsZSBpcyB1bmRlZmluZWQnIGVycm9yLlxubGV0IHJvb3Q6IGFueTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSByb290Lk1vdXNlRXZlbnQgYXMgTW91c2VFdmVudCAmIHtcbiAgcHJvdG90eXBlPzogTW91c2VFdmVudDtcbiAgbmV3ICh0eXBlQXJnOiBzdHJpbmcsIGV2ZW50SW5pdERpY3Q/OiBNb3VzZUV2ZW50SW5pdCk6IE1vdXNlRXZlbnQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW91c2VFdmVudChuYW1lOiBzdHJpbmcsIGJ1YmJsZXM6IGJvb2xlYW4gPSBmYWxzZSwgY2FuY2VsYWJsZTogYm9vbGVhbiA9IHRydWUpOiBNb3VzZUV2ZW50IHtcbiAgLy8gQ2FsbGluZyBuZXcgb2YgYW4gZXZlbnQgZG9lcyBub3Qgd29yayBjb3JyZWN0bHkgb24gSUUuIFRoZSBmb2xsb3dpbmcgaXMgYSB0ZXN0ZWQgd29ya2Fyb3VuZFxuICAvLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjcxNzY5ODMvZGlzcGF0Y2hldmVudC1ub3Qtd29ya2luZy1pbi1pZTExXG4gIGlmICh0eXBlb2YgTW91c2VFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFNhbmUgYnJvd3NlcnNcbiAgICByZXR1cm4gbmV3IE1vdXNlRXZlbnQobmFtZSwgeyBidWJibGVzLCBjYW5jZWxhYmxlIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIElFXG4gICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudCcpO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBidWJibGVzLCBjYW5jZWxhYmxlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiJdfQ==