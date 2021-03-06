import './App.css';



function Home() {
  return (
 <div>
    <header>
        <h1 style={{textAlign:"center"}}>Gunna Wunna Drip</h1> 
        <nav>  {/* Navigation  */}
          <a className="currenttab" href="/">Home</a>
          <a href="/FavSongs">Favortie Songs</a>
          <a href="/Albums">Albums</a>
          <a href="/Drip">Drip</a>
          <a href="/Purchase">Purchase</a>
          <a href="/Pictures">Pictures</a>
        </nav>
      </header>
    
 
      <body>
        <div>

            <section>
                <div> 
                  <section style={{alignItems:"center"}}>
                    <ul>  {/* info on gunna */}
                        <li>Named Sergio Giavanni Kitchens</li>
                        <li>Born June 14, 1993 in College Park, Ga</li>
                        <li>Heavily Associated with YSL and Lil Baby</li>
                    </ul>
                  </section>
                </div>

                <div>
                    <section>
                      <ul>  {/* Articles about Gunna */}
                          <li>
                          <a href="https://youtu.be/_hYs5I__DKo" target="_blank" rel="noreferrer">10 Things Gunna Can't Live Without</a>
                          </li>

                          <li>
                          <a href="https://youtu.be/cCQf-pJRmtU" target="_blank" rel="noreferrer">Gunna's Worst and Best Purchases</a>
                          </li>

                          <li>
                          <a href="https://hypebeast.com/2020/6/gunna-wunna-album-interview" target="_blank" rel="noreferrer">Gunna talks about 'Wunna'</a>
                          </li>

                      </ul>
                    </section>
                </div>

                <div>
                  <section>
                    <ul>  {/* Gunna's social media */}
                        <li>
                            <a className ="a" href="https://www.instagram.com/gunna/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
                        </li>

                        <li>
                            <a className ="a" href="https://twitter.com/1gunnagunna?lang=en" target="_blank" rel="noreferrer">Twitter</a>
                        </li>

                        <li>
                            <a  className ="a" href="https://www.youtube.com/channel/UCAkIMkEaa9sZmjcy7mfd5lQ" target="_blank" rel="noreferrer">Youtube</a>
                        </li>
                    </ul>
                    </section>

                </div>
                
            </section>
          
        </div>

        <section classname="media">  {/* Gunna's Baby Birkin youtbe video */}
          <iframe width="80%" height="500px" //To autoplay a youtube video I added autoplay=1 to the src link below
            src="https://www.youtube.com/embed/3BOuz4dBkkE?start=25&autoplay=1&mute=1" title="Gunna Baby Birkin">
              Your browser does not allow video.
          </iframe>
          
        </section> 
          
      </body>

      <footer>
        <p>This page was created by Travis Sherman</p>
      </footer>
    </div>

  );
}

export default Home;
