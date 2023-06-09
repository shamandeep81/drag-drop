let lists = document.getElementsByClassName("list");
        let rightContainer = document.getElementById("right");
        let leftContainer = document.getElementById("left");
        let messageElement = document.getElementById("message");
        let originalLeftContainerContent = document.getElementById('left').innerHTML;

        for (list of lists) {

            list.addEventListener("dragstart", function (e) {

                let selected = e.target;
                selected.classList.add("dragged");
                
                rightContainer.addEventListener("dragover", function (e) {

                    e.preventDefault();

                });


                rightContainer.addEventListener("drop", function (e) {

                    rightContainer.appendChild(selected);
                    selected = null;
                    messageElement.textContent = "Item dropped!";
                    setTimeout(function () {
                        messageElement.textContent = "";
                    }, 1000);
                });


                leftContainer.addEventListener("dragover", function (e) {

                    e.preventDefault();


                });


                leftContainer.addEventListener("drop", function (e) {

                    leftContainer.appendChild(selected);
                    selected = null;
                    messageElement.textContent = "Item dropped!";
                    setTimeout(function () {
                        messageElement.textContent = "";
                    }, 800);

                });

            })

        }

        function resetContainers() {
    rightContainer.innerHTML = ""; // Clear the second container
    leftContainer.innerHTML = originalLeftContainerContent; // Reset the first container
}