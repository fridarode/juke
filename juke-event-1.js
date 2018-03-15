  $(document).ready(() => {
   const audioTag = document.getElementById('current-song');
   const audioPlay = document.getElementById('play');
   const audioPause = document.getElementById('pause');
   const audioStop = document.getElementById('stop');
   const randNum = Math.floor( Math.random() * 6 );
   const audioReset = document.getElementById('reset');

    const songsArr = [
        { id: 0,
          music: 'songsArr/ozzy-crazy-train.mp3'
        },
        { id: 1,
          music: 'songsArr/GD-sugar-magnolia.mp3'
        },
        { id: 2,
          music: 'songsArr/ozzy-dreamer.mp3'
        },
        {
          id: 3,
          music: 'songsArr/GD-ALBUM-american-beauty.mp3'
        },
        {
          id: 4,
          music: 'songsArr/ozzy-mama.mp3'
        },
        {
          id: 5,
          music: 'songsArr/GD-3songs.mp3'
        }
      ];

   class Jukebox {
      constructor(songs) {
        this.songs = songs;
      }

      listSongs() {
        return $('.list').html(this.songs[randNum].music);
      }

       audioLoad() {
        return audioTag.src = this.songs[randNum].music;
       }

      audioPlay() {
        return audioPlay.onclick = function() { audioTag.play()};
      }

      audioPause() {
        return audioPause.onclick = function() {audioTag.pause()};
      }

      audioStop() {
        return audioStop.onclick = function() {audioTag.pause()};
      }

      audioRest() {
        return  audioReset.onclick = function() {
          location.reload();
          };
      }

    }

    const frida = new Jukebox(songsArr);
    frida.listSongs();
    frida.audioLoad();
    frida.audioPlay();
    frida.audioPause();
    frida.audioStop();
    frida.audioRest();

  });
