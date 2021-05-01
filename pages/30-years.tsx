import React from 'react'
import Head from 'next/head'

const ThirtyYears = () =>
      <div>
        <title>Thirty Years of Nyoho</title>
        <div id='crossFadingGallery'>
          <div className='image' />
          <div className='image' />
          <div className='image' />
          <div className='image' />
          <div className='image' />
      </div>
        <div className='container'>
          <div className='thirty-inner'>
            30 years
            <div className='thirty-head'>
              <img alt="30" src="/static/NyohoRainbow30.svg" />
            </div>

            <p>Thirty years ago, I was five years old and was intent on the Drifters, who taught me something fun and precious. Twenty-three years ago, I wrote not only common Japanese translation but also the Hiroshima dialect translation down my notebook during my English class. Four years ago, it ended up with something like the Hiroshima dialect dubbing series. And now, I am thirty five years old.  So, what? What does it mean? Who is mean?</p>
            <dl>
              <dt>1984</dt>
              <dd>30年前。5歳であった。</dd>
            </dl>
            <dl>
              <dt>1991</dt>
              <dd>12歳。英語科の授業でノートの和訳の欄を半分に割り、共通語訳と広島弁訳を作成していた。</dd>
            </dl>
            <dl>
              <dt>2010</dt>
              <dd>iPadビデオ広島弁吹き替え (のちの「<a href="http://nyoho.jp/wiki/?%E5%BA%83%E5%B3%B6%E5%BC%81%E5%90%B9%E3%81%8D%E6%9B%BF%E3%81%88%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA">広島弁吹き替えシリーズ 第1弾</a>」) がブレイク。</dd>
            </dl>
            <dl>
              <dt>2014</dt><dd>35歳。現在に至る。</dd>
            </dl>
          </div>
        </div>
      </div>

export default ThirtyYears
