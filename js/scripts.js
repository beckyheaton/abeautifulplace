



// Date script
const currentDate = new Date().toLocaleDateString();
const message = document.getElementById("welcomeMessage").innerHTML;

// Replace "(date)" with the current date
document.getElementById("welcomeMessage").innerHTML = message.replace("(date)", currentDate);

// Make Draggable Function
function makeElementDraggable(elementId) {
    const element = document.getElementById(elementId);

        // Prevent the default dragging of the image
        element.ondragstart = function() {
            return false;
        };

    element.onmousedown = function(event) {
        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;

        document.onmousemove = function(e) {
            element.style.left = e.pageX - shiftX + 'px';
            element.style.top = e.pageY - shiftY + 'px';
        };

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

// Example usage for different elements
makeElementDraggable('thisHasntHappened');
makeElementDraggable('kelp');



