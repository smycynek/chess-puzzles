/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import edit from './images/edit.svg';

const About = () => (
  <>
    <h2 className="sub-heading">Created by</h2>
    <ul className="info-list">
      <li>
        <strong>Steven Victor Mycynek 2021</strong>
      </li>
      <li>
        <a className="it" title="homepage" href="https://stevenvictor.net">
          <strong>stevenvictor.net</strong>
        </a>
      </li>
      <li>
        <a className="it" title="github" href="https://github.com/smycynek/chess-puzzles">
          <strong>github.com/smycynek/chess-puzzles</strong>
        </a>
      </li>
      <li className="it">
        No ads, no logins, just content.
      </li>
    </ul>
    <h2 className="sub-heading">Tips</h2>
    <ul className="info-list">
      <li>
        Browse and try to solve sample puzzles in the first tab.
        In the second tab, view puzzles others have created, like
        {' '}
        <a href="https://stevenvictor.net/chess/#/chess/create?question=Sample%20question%3A%20Is%20this%20a%20valid%20setup%3F&answer=Fnzcyr%20nafjre%3A%20Ab%20--%202%20ovfubcf%20ba%20gur%20fnzr%20pbybe%20vf%20vyyrtny.&data=wKh1%2CwPa2%2CwPb2%2CbBe3%2CbBf4%2CbPf7%2CbPg7%2CbPh7%2CbKh8">
          <strong>this one</strong>
        </a>
        .
        In the second tab, puzzles and changes are encoded entirely into the URL.
        The puzzle doesn&apos;t
        persist anywhere on the Internet except in the text of the link.
        Click the &apos;edit&apos;
        {' '}
        <img style={{ width: '1.75em', height: '1.75em' }} alt="edit" src={edit} />
        {' '}
        button
        to make changes -- the URL will update automatically, and
        you can then text it or re-post it with your browser&apos;s &apos;share&apos; button.
      </li>
    </ul>
    <h2 className="sub-heading">Credit to</h2>
    <ul className="info-list">
      <li>
        <strong>Icons:</strong>
        {' '}
        <a href="https://en.wikipedia.org/wiki/User:Cburnett" title="en:User:Cburnett">Cburnett</a>
        ,
        <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>
        ,
        <a href="https://commons.wikimedia.org/w/index.php?curid=1496656">Wikimedia</a>
        ,
        <a href="http://artua.com">artua.com</a>
        ,
        <a href="http://freepik.com">freepik.com</a>
        ,
        <a href="http://icon54.com">icon54.com</a>
      </li>
      <li>
        <strong>Textures:</strong>
        {' '}
        <a
          href="https://unsplash.com/@augustinewong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Augustine Wong
        </a>
        {' '}
        on
        {' '}
        <a href="https://unsplash.com/s/photos/marble-texture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </li>
    </ul>
  </>
);

export default About;
