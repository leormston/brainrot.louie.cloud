import logo from './logo.jpeg';
import './App.css';
import { useState } from 'react';

// Helper function to extract YouTube video ID
function getYoutubeId(url) {
  const regExp = /^.*(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
}

// Preset video IDs
const presetVideos = [
  { label: 'Sub Surf', id: 'L_fcrOyoWZ8' },
  { label: 'GTA Ramp', id: 'hZyjsJJ51kQ' },
  { label: 'Satisfy1', id: '3clqk2U3T9Y' },
  { label: 'Minecraft', id: 'u7kdVe8q5zs' }
];

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com/watch?v=vVgHsnk1AAY');
  const [presetVideoId, setPresetVideoId] = useState('L_fcrOyoWZ8'); // Subway Surfers as default
  const [size, setSize] = useState('large'); // 'large', 'medium', 'small'
  const videoId = getYoutubeId(youtubeUrl);

  const sizes = {
    large: { width: '100%', maxWidth: 900, height: 280 },
    medium: { width: '100%', maxWidth: 700, height: 210 },
    small: { width: '100%', maxWidth: 400, height: 120 }
  };

  const currentSize = sizes[size];

  return (
    <div className="App">
      {/* Navbar with just the logo, no spin */}
      <div
        style={{
          width: '100%',
          background: '#8B7355',
          padding: '12px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={logo} alt="logo" style={{ height: 48, pointerEvents: 'none' }} />
      </div>
      {/* Site name under navbar */}

        

      <header className="App-header">
        <div style={{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.3em',
  letterSpacing: '1px',
  marginTop: 0, // Set to 0 for no gap
  textAlign: 'center'
}}>
  brainrot.louie.cloud
</div>
        <p style={{ marginTop: '4px', fontSize: '0.9em', color: '#bbb' }}>
          (where distraction meets productivity)
        </p>
        <div style={{ margin: '4px 0' }}>

</div>
        {/* New Subscribe button */}
        <a
          href="https://www.youtube.com/@LouieOrmston?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#8B7355',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '4px',
            padding: '4px 10px',
            textDecoration: 'none',
            margin: '8px 0',
            fontSize: '0.9em',
            border: 'none'
          }}
        >
          📺 Subscribe
        </a>
        <input
          type="text"
          placeholder="Paste YouTube URL here..."
          value={youtubeUrl}
          onChange={e => setYoutubeUrl(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '16px', width: '300px' }}
        />
        {/* Size Toggle moved here */}
        <div style={{ margin: '16px 0', display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setSize('small')}
            style={{ padding: '8px 16px', borderRadius: '4px', background: size === 'small' ? '#444' : '#ccc', color: size === 'small' ? '#fff' : '#222', border: 'none', fontWeight: 'bold' }}
          >
            Small
          </button>
          <button
            onClick={() => setSize('medium')}
            style={{ padding: '8px 16px', borderRadius: '4px', background: size === 'medium' ? '#444' : '#ccc', color: size === 'medium' ? '#fff' : '#222', border: 'none', fontWeight: 'bold' }}
          >
            Medium
          </button>
          <button
            onClick={() => setSize('large')}
            style={{ padding: '8px 16px', borderRadius: '4px', background: size === 'large' ? '#444' : '#ccc', color: size === 'large' ? '#fff' : '#222', border: 'none', fontWeight: 'bold' }}
          >
            Large
          </button>
        </div>
        <div
          className="video-container top"
          style={{
            marginTop: '24px',
            width: currentSize.width,
            maxWidth: currentSize.maxWidth,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent' // Always transparent
          }}
        >
          {videoId ? (
            <iframe
              width="100%"
              height="100%"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8 }}
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
        <div
          className="video-container bottom"
          style={{
            marginTop: '24px',
            width: currentSize.width,
            maxWidth: currentSize.maxWidth,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent' // Always transparent
          }}
        >
          {presetVideoId ? (
            <iframe
              width="100%"
              height="100%"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8 }}
              src={`https://www.youtube.com/embed/${presetVideoId}?autoplay=1&mute=1`}
              title="Preset YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
        <div
          className="preset-buttons"
          style={{
            marginTop: '24px',
            width: currentSize.width,
            maxWidth: currentSize.maxWidth,
            display: 'flex',
            gap: '16px',
            flexDirection: window.innerWidth < 600 ? 'column' : 'row'
          }}
        >
          {presetVideos.map((video) => (
            <button
              key={video.id}
              style={{
                flex: 1,
                padding: '16px',
                fontSize: '16px',
                borderRadius: '6px',
                minWidth: 0
              }}
              onClick={() => setPresetVideoId(video.id)}
            >
              {video.label}
            </button>
          ))}
        </div>
      </header>
      <footer
        style={{
          marginTop: '32px',
          padding: '80px 0', // 5x taller (16px * 5 = 80px)
          background: '#8B7355',
          color: '#fff',
          fontSize: '1.2em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column'
        }}
      >
        🤖 Why did the AI go to therapy? It had too many neural issues!
      </footer>
    </div>
  );
}

export default App;
