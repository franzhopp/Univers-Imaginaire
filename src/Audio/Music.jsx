import React from "react";
import "../Styles/Audio.css";
import { Button } from "semantic-ui-react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

const AudioPlayer = ({ url }) => {
  const [audio] = React.useState(new Audio(url));
  const [playing, setPlaying] = React.useState(false);

  const togglePlayBack = () => setPlaying(!playing);

  React.useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  React.useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return (
    <Button
      onClick={togglePlayBack}
      icon
      labelPosition="left"
      className="button-audio"
    >
      {playing ? (
        <AiFillPauseCircle style={{ fontSize: "20px" }} />
      ) : (
        <AiFillPlayCircle style={{ fontSize: "20px" }} />
      )}
    </Button>
  );
};

const App = () => {
  const damsoSongUrl = "./music/Brown.mp3";

  return (
    <div className="container-audio">
      <div className="sub-audio">
        <AudioPlayer url={damsoSongUrl} />
        <div className="items-audio">
          <h5 className="author-music">Mr. Brown</h5>
          <a
            href="https://www.reddit.com/r/HIMYM/comments/1wy8ws/quote_from_ted_at_the_central_park_bow_bridge/?rdt=40804"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="title-song">She said no... (and maybe that's ok)</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
