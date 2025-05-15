import '../css/home.css';
import { useNavigate } from 'react-router-dom';
import vide2 from "D:/Siddhant/React/Music Management/Images and video/video2.mp4";
import img1 from "D:/Siddhant/React/Music Management/Images and video/Arijit Singh.jpg";
import img2 from "D:/Siddhant/React/Music Management/Images and video/img2.jpg";
import img3 from "D:/Siddhant/React/Music Management/Images and video/img3.jpeg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1 id='rixmusic'>RizMusic</h1>
      <header id='header1'>
        <video id="vid1" src={vide2} autoPlay muted loop   ></video>
        <h1 id='title'>Listen what you want</h1>

        <div id="index1">
          <button onClick={() => { navigate("/") }} style={{ backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }} id="atag1">Home</button>

          <button id="atag2" style={{ backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }} >My Library</button>

          <button onClick={() => { navigate("/login") }} style={{ backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }} id="atag3">LogIn</button>

          <button href="" id="atag4" style={{ backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }} onClick={() => { navigate('/Register') }}>SignUp</button>
        </div>

        {/* blank */}

        <div id='blank'></div>

        <div id="mainframe" style={{ color: 'black', height: 400, backgroundColor: 'white' }}>
          <br /><br />

          <div>
            <h1 style={{ fontSize: 80, fontFamily: 'cursive', marginLeft: 120 }}>Listen to Your favourite Singer</h1>
          </div>

          <br /><br />

          {/* Artist info */}

          <div id='artist1' style={{ display: 'flex' }}>
            <img src={img1} alt=""
              style={{ height: 600, width: 600, borderRadius: 40, marginLeft: 120 }} />

            <div >
              <h1 style={{ fontSize: 50, fontFamily: 'cursive', marginLeft: 200 }}>
                Arijit Singh
              </h1>

              <p style={{ color: 'white', fontSize: 23, width: 650, marginLeft: 50, textAlign: 'justify' }}>
                Arijit Singh is an Indian playback singer. A leading figure in contemporary Hindi film music, he is the recipient of several accolades including two National Film Awards and seven Filmfare Awards. He was conferred upon the Padma Shri by the Government of India in 2025. </p>

            </div>


          </div>

          <br /><br /><br />

          <div id='artist1' style={{ display: 'flex' }}>
            <div >
              <h1 style={{ fontSize: 50, fontFamily: 'cursive', marginLeft: 200, color: 'white' }}>
                Diljit Dosanjh
              </h1>

              <p style={{ color: 'white', fontSize: 23, width: 700, marginLeft: 50, textAlign: 'justify' }}>
                Diljit Dosanjh is an Indian singer, actor and film producer who works in Punjabi and Hindi cinema. Dosanjh entered the Social 50 chart by Billboard in 2020. He has been featured in various music charts, including the Canadian Albums Chart, the UK Asian chart by Official Charts Company and the New Zealand Hot Singles.</p>

            </div>
            <img src={img2} alt=""
              style={{ height: 600, width: 600, borderRadius: 40, marginLeft: 70, objectFit: 'cover' }} />
          </div>

          <br /><br /><br />


          {/* Trending  */}

          <h1 style={{ color: 'white', fontSize: 50, marginLeft: 30 }}>Trending</h1>

          <div id='music_main_div'>

            <div id='trenddiv'>

              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a style={{ cursor: 'pointer' }} className="song-title">Ek Hasina Thi Ek Diwana Tha</a><br />
                  <a className="artist-name">Asha Bhosle, Kishore Kumar, Rishi Kapoor</a>
                </div>
              </div>


              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Ishq Mubarakh</a>
                  <br />
                  <a className="artist-name">Arijit Singh</a>
                </div>
              </div>

              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Fakira</a>
                  <br />
                  <a className="artist-name">Sanam</a>
                </div>
              </div>


              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Kesariya </a>
                  <br />
                  <a className="artist-name">Arijit Singh</a>
                </div>

              </div>
            </div>

            <br /><br />
            <div id='trenddiv'>

              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Tera Ban Jaunga</a>
                  <br />
                  <a className="artist-name">Akhil Sachdeva, Tulsi Kumar</a>
                </div>
              </div>
              <br />
              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Chaiyya Chaiyya</a>
                  <br />
                  <a className="artist-name">Sukhwinder Singh, Sapna Awasthi</a>
                </div>
              </div>


              <div className="music-item" >
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Tujh Mein Rab Dikhta Hai</a>
                  <br />

                  <a className="artist-name">Roop Kumar Rathod</a>
                </div>
              </div>
              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Tum Mile</a>
                  <br />

                  <a className="artist-name">Neeraj Shridhar</a>
                </div>
              </div>



            </div>
            <br /><br />

            <div id='trenddiv'>

              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title"> Jai Ho </a>
                  <br />

                  <a className="artist-name">A. R. Rahman, Sukhwinder Singh
                  </a>
                </div>
              </div>


              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Agar Tum Saath Ho</a>
                  <br />

                  <a className="artist-name"> Arijit Singh, Alka Yagnik</a>
                </div>
              </div>
              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Galliyan </a>
                  <br />

                  <a className="artist-name">Ankit Tiwari</a>
                </div>
              </div>


              <div className="music-item">
                {/* Album Art */}
                <img
                  src={img3}
                  alt="Album Cover"
                  className="album-art"
                />

                {/* Song & Artist Details */}
                <div className="music-info">
                  <a className="song-title">Tum Ho Mera Pyaar</a>
                  <br />
                  <a className="artist-name">KK</a>
                </div>

              </div>
            </div>
            <br /><br />

          </div>


          {/* footer  */}
          <br />
          <br />
          <footer style={{ backgroundColor: "#111", color: "white", padding: "20px", textAlign: "center" }}>
            <p>&copy; 2025 Music Management. All Rights Reserved.</p>
            <p>Contact: support@musicmanagement.com | Phone: +91 98765 43210</p>
            <div>
              <a href="#" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Facebook</a>
              <a href="#" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Twitter</a>
              <a href="#" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Instagram</a>
            </div>
          </footer>
        </div>
      </header >
    </>
  );
}
