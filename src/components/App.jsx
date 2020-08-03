import React from "react";
import Emoji from '../components/Emoji';
import {emojipedia} from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(
          (emoInfo) => {
            return (
              <Emoji 
                key={emoInfo.emoji}
                emo={emoInfo}/>
            );
          }
        )}
      </dl>
    </div>
  );
}

export default App;
