/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';

const About = () => (
  <div style={{ width: '30em' }}>
    <h2 className="sub-heading">Created by</h2>
    <ul className="info-list">
      <li>
        Steven Victor Mycynek 2021
      </li>
      <li>
        <a className="normal-link" title="homepage" href="https://stevenvictor.net">
          stevenvictor.net
        </a>
        {' | ' }
        <a className="normal-link" title="github" href="https://github.com/smycynek/chess-puzzles">
          github.com/smycynek/chess-puzzles
        </a>
      </li>
      <li className="it">
        No ads, no logins, just content.
      </li>
    </ul>
    <h2 className="sub-heading">Tips</h2>
    <ul className="info-list">
      <li>
        <p>
          Browse and try to solve sample puzzles in the first tab.
          In the second tab, view puzzles others have created, like
          {' '}
          <a className="normal-link" href="https://stevenvictor.net/chess/#/chess/create?question=Sample%20question%3A%20Is%20this%20a%20valid%20setup%3F&answer=Fnzcyr%20nafjre%3A%20Ab%20--%202%20ovfubcf%20ba%20gur%20fnzr%20pbybe%20vf%20vyyrtny.&data=wKh1%2CwPa2%2CwPb2%2CbBe3%2CbBf4%2CbPf7%2CbPg7%2CbPh7%2CbKh8">
            this one
          </a>
          .
        </p>
        <p>
          In the second tab, puzzles and changes are encoded entirely into the URL.
          The puzzle doesn&apos;t
          persist anywhere on the Internet except in the text of the link.
        </p>
        <p>
          Toggle the
          {' '}
          <span style={{ fontVariant: 'small-caps' }}>VIEW/EDIT</span>
          {' '}
          slider
          to make changes -- the URL will update automatically, and
          you can then text it or re-post it with your browser&apos;s
          {' '}
          <em>share</em>
          {' '}
          button or the social media link buttons.
        </p>
        <p>
          Brighten someone&apos;s day with a chess puzzle, or send me one you
          created!
        </p>
      </li>
    </ul>
    <h2 className="sub-heading">Credit to</h2>
    <ul className="info-list">
      <li>
        <strong>Icons:</strong>
        {' '}
        <a className="normal-link" href="https://en.wikipedia.org/wiki/User:Cburnett" title="en:User:Cburnett">Cburnett</a>
        ,
        {' '}
        <a className="normal-link" href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>
        ,
        {' '}
        <a className="normal-link" href="https://commons.wikimedia.org/w/index.php?curid=1496656">Wikimedia</a>
        ,
        {' '}
        <a className="normal-link" href="http://freepik.com">freepik.com</a>

      </li>
      <li>
        <strong>Textures:</strong>
        {' '}
        <a
          className="normal-link"
          href="https://unsplash.com/@augustinewong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Augustine Wong
        </a>
        {' '}
        on
        {' '}
        <a
          className="normal-link"
          href="https://unsplash.com/s/photos/marble-texture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </li>
    </ul>
    <h2 className="sub-heading" style={{ paddingBottom: '0.0em', marginBottom: '0.0em' }}>Preferences</h2>
  </div>
);

export default About;
