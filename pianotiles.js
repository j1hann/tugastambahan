const chords = ["a", "c", "d", "e", "f"]
const note = document.getElementById("note")

chords.forEach(chord => {
    const button = document.createElement("button")

    button.innerText = chord

    button.addEventListener("click", () => {
      const sound = new Audio(`/sound/${chord}.wav`)
      sound.play()
    })

    note.appendChild(button)
})