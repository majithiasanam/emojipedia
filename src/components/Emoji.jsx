import React from 'react';

function Emoji(props) {
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emo.emoji}
            </span>
            <span>{props.emo.name}</span>
          </dt>
          <dd>
            {props.emo.meaning}
          </dd>
        </div>
    );
}

export default Emoji;