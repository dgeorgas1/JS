class Song {
    constructor(title, artist, album, genre) {
        this.title = title
        this.artist = artist
        this.album = album
        this.genre = genre
    }

    songDetails() {
        return `The song ${this.title} by ${this.artist} 
                from the album ${this.album} is a 
                track in the ${this.genre} genre`
    }
}

dg = new Song("The Good Life", "Three Days Grace", "Life Starts Now", "Hard Rock")
ffdp = new Song("Lift Me Up", "Five Finger Death Punch", "The Wrong Side of Heaven", "Heavy Metal")
toad = new Song("Rx", "Theory of a Deadman", "Wake Up Call", "Pop Rock")
evan = new Song("Bring Me To Life", "Evanescence", "Fallen", "Nu Metal")

document.getElementById("1").innerHTML = dg.songDetails()
document.getElementById("2").innerHTML = ffdp.songDetails()
document.getElementById("3").innerHTML = toad.songDetails()
document.getElementById("4").innerHTML = evan.songDetails()