function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.type = typeList;
            this.name = name;
            this.time = time;

        }
    }

    let numSongs = Number(input.shift());
    let typeList = input.pop();
    for (let i = 0; i < input.length; i++) {

        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        if (typeList === 'all') {
            console.log(song.name);
        }
        else if (song.type === typeList) {
            console.log(song.name);
        }

    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
        
);