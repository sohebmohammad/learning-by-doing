async function getStreaming() {
    const response = await fetch("http://localhost:3000/streaming");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const ulElement = document.getElementById("list")
    ulElement.innerHTML=""

    while (true) {
        const { done, value } = await reader.read();

        // console.log("done value",done, "value is ",value)
        console.log(ulElement)
        const newListItem = document.createElement('li');

        // 3. Add text or HTML content to the item
        newListItem.textContent = decoder.decode(value);
        

        if (done) break;
        ulElement.appendChild(newListItem)

        console.log(decoder.decode(value));
    }
}
