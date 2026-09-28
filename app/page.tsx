export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#070707',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          height: '72px',
          borderBottom: '1px solid #222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 6%',
          background: '#0a0a0a',
        }}
      >
        {/* LOGO */}
        <a
          href="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: '900',
          }}
        >
          BW <span style={{ color: '#ff6a00' }}>ARENA</span>
        </a>

        {/* NAV BUTTONS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* LOGIN BUTTON */}
          <a
            href="/login"
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1px solid #333',
              padding: '10px 18px',
              borderRadius: '6px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Login
          </a>

          {/* REGISTER BUTTON */}
          <a
            href="/register"
            style={{
              background: '#ff6a00',
              color: '#fff',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '6px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 'bold',
            }}
          >
            Register
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: '100px 6%',
          textAlign: 'center',
          background:
            'radial-gradient(circle at center, #1b1008 0%, #070707 55%)',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '7px 14px',
            border: '1px solid #3a2518',
            borderRadius: '30px',
            color: '#ff6a00',
            fontSize: '13px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          FREE FIRE ESPORTS
        </div>

        <h1
          style={{
            fontSize: 'clamp(45px, 8vw, 90px)',
            margin: '0',
            fontWeight: '900',
            lineHeight: '1',
          }}
        >
          PLAY.
          <br />
          <span style={{ color: '#ff6a00' }}>COMPETE.</span>
          <br />
          WIN.
        </h1>

        <p
          style={{
            maxWidth: '650px',
            margin: '25px auto',
            color: '#999',
            fontSize: '18px',
            lineHeight: '1.6',
          }}
        >
          Join tournaments, compete against the best Free Fire players,
          climb the leaderboard and win exciting prizes.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginTop: '30px',
          }}
        >
          <a
            href="/register"
            style={{
              background: '#ff6a00',
              color: '#fff',
              padding: '15px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            JOIN NOW
          </a>

          <a
            href="#tournaments"
            style={{
              background: '#151515',
              color: '#fff',
              border: '1px solid #333',
              padding: '15px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            VIEW TOURNAMENTS
          </a>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1px',
          background: '#222',
          borderTop: '1px solid #222',
          borderBottom: '1px solid #222',
        }}
      >
        <div
          style={{
            background: '#0d0d0d',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: 0, color: '#ff6a00' }}>10K+</h2>
          <p style={{ color: '#888' }}>PLAYERS</p>
        </div>

        <div
          style={{
            background: '#0d0d0d',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: 0, color: '#ff6a00' }}>500+</h2>
          <p style={{ color: '#888' }}>TOURNAMENTS</p>
        </div>

        <div
          style={{
            background: '#0d0d0d',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: 0, color: '#ff6a00' }}>₹5L+</h2>
          <p style={{ color: '#888' }}>PRIZES</p>
        </div>

        <div
          style={{
            background: '#0d0d0d',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: 0, color: '#ff6a00' }}>24/7</h2>
          <p style={{ color: '#888' }}>COMPETITION</p>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section
        id="tournaments"
        style={{
          padding: '80px 6%',
          background: '#090909',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <p
            style={{
              color: '#ff6a00',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            COMPETE NOW
          </p>

          <h2
            style={{
              fontSize: '38px',
              margin: 0,
            }}
          >
            Upcoming Tournaments
          </h2>

          <p style={{ color: '#777' }}>
            Choose your battle and prove yourself.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {/* TOURNAMENT 1 */}
          <div
            style={{
              background: '#111',
              border: '1px solid #292929',
              borderRadius: '14px',
              padding: '25px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#ff6a00', fontWeight: 'bold' }}>
                OPEN
              </span>

              <span style={{ color: '#777' }}>FREE</span>
            </div>

            <h3 style={{ fontSize: '24px' }}>BW Clash #01</h3>

            <p style={{ color: '#777' }}>
              Battle Royale tournament for Free Fire players.
            </p>

            <div style={{ marginTop: '25px', color: '#aaa' }}>
              <p>💰 Prize: ₹1,000</p>
              <p>👥 Slots: 48</p>
            </div>

            <a
              href="/login"
              style={{
                display: 'block',
                textAlign: 'center',
                background: '#ff6a00',
                color: '#fff',
                padding: '12px',
                borderRadius: '7px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '20px',
              }}
            >
              JOIN TOURNAMENT
            </a>
          </div>

          {/* TOURNAMENT 2 */}
          <div
            style={{
              background: '#111',
              border: '1px solid #292929',
              borderRadius: '14px',
              padding: '25px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#ff6a00', fontWeight: 'bold' }}>
                OPEN
              </span>

              <span style={{ color: '#fff' }}>₹20</span>
            </div>

            <h3 style={{ fontSize: '24px' }}>BW Weekend Cup</h3>

            <p style={{ color: '#777' }}>
              Weekend competitive tournament with bigger rewards.
            </p>

            <div style={{ marginTop: '25px', color: '#aaa' }}>
              <p>💰 Prize: ₹5,000</p>
              <p>👥 Slots: 96</p>
            </div>

            <a
              href="/login"
              style={{
                display: 'block',
                textAlign: 'center',
                background: '#ff6a00',
                color: '#fff',
                padding: '12px',
                borderRadius: '7px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '20px',
              }}
            >
              JOIN TOURNAMENT
            </a>
          </div>

          {/* TOURNAMENT 3 */}
          <div
            style={{
              background: '#111',
              border: '1px solid #292929',
              borderRadius: '14px',
              padding: '25px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#777', fontWeight: 'bold' }}>
                COMING SOON
              </span>

              <span style={{ color: '#fff' }}>₹50</span>
            </div>

            <h3 style={{ fontSize: '24px' }}>BW Elite Battle</h3>

            <p style={{ color: '#777' }}>
              Elite-level Free Fire competition.
            </p>

            <div style={{ marginTop: '25px', color: '#aaa' }}>
              <p>💰 Prize: ₹10,000</p>
              <p>👥 Slots: 48</p>
            </div>

            <button
              disabled
              style={{
                width: '100%',
                background: '#222',
                color: '#777',
                padding: '12px',
                borderRadius: '7px',
                border: 'none',
                marginTop: '20px',
                fontWeight: 'bold',
              }}
            >
              COMING SOON
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          padding: '80px 6%',
          background: '#070707',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: '#ff6a00',
            fontWeight: 'bold',
          }}
        >
          SIMPLE PROCESS
        </p>

        <h2 style={{ fontSize: '38px' }}>How It Works</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '25px',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              padding: '30px',
              background: '#111',
              border: '1px solid #292929',
              borderRadius: '12px',
            }}
          >
            <div style={{ fontSize: '35px' }}>👤</div>
            <h3>1. Create Account</h3>
            <p style={{ color: '#777' }}>
              Register your BW Arena account.
            </p>
          </div>

          <div
            style={{
              padding: '30px',
              background: '#111',
              border: '1px solid #292929',
              borderRadius: '12px',
            }}
          >
            <div style={{ fontSize: '35px' }}>🏆</div>
            <h3>2. Join Tournament</h3>
            <p style={{ color: '#777' }}>
              Select a tournament and join.
            </p>
          </div>

          <div
            style={{
              padding: '30px',
              background: '#111',
              border: '1px solid #292929',
              borderRadius: '12px',
            }}
          >
            <div style={{ fontSize: '35px' }}>🎮</div>
            <h3>3. Play</h3>
            <p style={{ color: '#777' }}>
              Play your Free Fire match.
            </p>
          </div>

          <div
            style={{
              padding: '30px',
              background: '#111',
              border: '1px solid #292929',
              borderRadius: '12px',
            }}
          >
            <div style={{ fontSize: '35px' }}>💰</div>
            <h3>4. Win Rewards</h3>
            <p style={{ color: '#777' }}>
              Finish high and claim rewards.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: '1px solid #222',
          padding: '35px 6%',
          textAlign: 'center',
          background: '#0a0a0a',
          color: '#666',
        }}
      >
        <div
          style={{
            fontSize: '22px',
            fontWeight: '900',
            color: '#fff',
            marginBottom: '10px',
          }}
        >
          BW <span style={{ color: '#ff6a00' }}>ARENA</span>
        </div>

        <p style={{ margin: 0 }}>
          © 2026 BW Arena. All rights reserved.
        </p>
      </footer>
    </main>
  );
}