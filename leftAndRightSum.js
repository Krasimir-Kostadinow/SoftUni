function solve(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numSongs = Number(arr.shift());
    let typeSong = arr.pop();
    let songs = [];
    for (let i = 0; i < numSongs; i++) {
        let [type, name, time] = arr[i].split('_');
        let obj = new Song(type, name, time);
        songs.push(obj);
    }

    for (const obj of songs) {
        if (typeSong === 'all') {
            console.log(obj.name);
        } else if (obj.type === typeSong) {
            console.log(obj.name);
        }
    }
}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']   
);
