// atoms:
//
//
//
// molecules:
//
//
//
// organisms:
//
//
//
import { ListingPage } from 'components/templates'

export default function ListingTemplate() {
  return (
    <section className="page-container">
      <div className="bglogo" />
      <header className="global-header wide">
        <a className="header-logo" name="logoLink" href="/">
          CL
        </a>
        <nav className="breadcrumbs-container">
          <ul className="breadcrumbs">
            <li className="crumb area">
              <p>
                <a href="/">london, UK</a>
                <span className="breadcrumb-arrow">&gt;</span>
              </p>
            </li>
            <li className="crumb section">
              <p>
                <a href="/search/sss">for sale</a>
                <span className="breadcrumb-arrow">&gt;</span>
              </p>
            </li>
            <li className="crumb category">
              <p>
                <a href="/search/fuo">furniture – by owner</a>
              </p>
            </li>
          </ul>
        </nav>
        <div className="userlinks">
          <ul className="user-actions">
            <li className="user post">
              <a href="https://post.craigslist.org/c/ldn?lang=en&cc=gb">post</a>
            </li>
            <li className="user account">
              <a href="https://accounts.craigslist.org/login/home?lang=en&cc=gb">
                account
              </a>
            </li>
          </ul>
          <ul className="user-favs-discards">
            <li className="user">
              <div className="favorites off">
                <a href="#" className="favlink">
                  <span className="icon icon-star fav" aria-hidden="true" />
                  <span className="fav-number">0</span>
                  <span className="fav-label"> favourites</span>
                </a>
              </div>
            </li>
            <li className="user discards">
              <div className="to-banish-page">
                <a
                  href="/favorites?uf=1&fl=aXRlbXM6"
                  className="to-banish-page-link"
                >
                  <span className="icon icon-trash red" aria-hidden="true" />
                  <span className="banished_count">0</span>
                  <span className="discards-label"> hidden</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <header className="global-header narrow">
        <a className="header-logo" href="/">
          CL
        </a>
        <nav className="breadcrumbs-container">
          <div className="breadcrumbs">
            london, UK &gt; furniture – by owner{' '}
          </div>
        </nav>
        <span className="linklike show-wide-header">...</span>
      </header>
      <section className="body">
        <header className="dateReplyBar">
          <div className="prevnext-sec">
            <div className="prevnext js-only">
              <a className="prev">◀ prev </a>
              <a className="backup" title="back to search">
                ▲
              </a>
              <a className="next"> next ▶ </a>
            </div>
          </div>
          <div className="reply-button-row">
            <div className="actions-combo">
              <button
                role="button"
                className="reply-button js-only"
                data-href="/reply/ldn/fuo/7440785972/__SERVICE_ID__"
              >
                reply
              </button>
              <div className="reply-info js-only" style={{ display: 'none' }} />
              <div className="fave-unfave action">
                <div className="fave" role="button" title="add to favorites">
                  <div className="icon icon-star" aria-hidden="true" />
                  <div className="action-label">favorite</div>
                </div>
                <div
                  className="unfave"
                  role="button"
                  title="remove from favorites"
                >
                  <div className="icon icon-star fav" aria-hidden="true" />
                  <div className="action-label">favorite</div>
                </div>
              </div>
              <div className="banish-unbanish action">
                <div
                  className="banish"
                  data-url="https://post.craigslist.org/flag"
                  role="button"
                  title="hide this posting"
                >
                  <div className="icon icon-trash" aria-hidden="true" />
                  <div className="action-label">hide</div>
                </div>
                <div
                  className="unbanish"
                  data-url="https://post.craigslist.org/flag"
                  role="button"
                  title="restore this posting"
                >
                  <div className="icon icon-trash red" aria-hidden="true" />
                  <div className="action-label">unhide</div>
                </div>
              </div>
              <div className="flag-action action">
                <div
                  className="flag"
                  data-url="https://post.craigslist.org/flag"
                  role="button"
                  title="flag as prohibited / spam / miscategorized"
                >
                  <div className="flagIcon" aria-hidden="true">
                    <span className="white-flag">⚐</span>
                    <span className="black-flag">⚑</span>
                  </div>
                  <div className="action-label">flag</div>
                </div>
                <div className="unflag">
                  <div className="flagIcon" aria-hidden="true">
                    ⚑
                  </div>
                  <a
                    className="action-label"
                    href="https://www.craigslist.org/about/help/flags_and_community_moderation?lang=en&cc=gb"
                    title="thanks for flagging!"
                  >
                    flagged
                  </a>
                </div>
              </div>
              <div className="action share-action">
                <div className="share" id="sharebutton-container">
                  <div className="cl-component share-button">
                    <div className="container">
                      <a href="https://london.craigslist.org/fuo/d/london-tv-stand-110x30x325-cm-solid/7440785972.html#share">
                        <div className="icom- share-icon"></div>
                        <span className="action-label">share</span>
                      </a>
                      <div className="menu-container" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p
              id="display-date"
              className="postinginfo reveal"
              style={{ opacity: 1 }}
            >
              Posted
              <time
                className="date timeago"
                dateTime="2022-02-02T16:28:21+0000"
                title="2022-02-02 16:28"
              >
                6 days ago
              </time>
            </p>
            <p className="print-information print-contact">
              Contact Information: <span className="print-email" />{' '}
              <span className="print-phone" />
            </p>
            <a href="#" id="printme">
              print
            </a>
          </div>
        </header>
        <h1 className="postingtitle">
          <span className="postingtitletext">
            <span id="titletextonly">
              TV Stand 110x30x32.5 cm Solid Teak Wood
            </span>{' '}
            - <span className="price">£208</span>
            <small> (London Camden)</small>{' '}
          </span>
        </h1>
        <section className="userbody">
          <figure className="iw multiimage">
            <div className="gallery">
              <span className="slider-back arrow">‹</span>
              <span className="slider-info">image 5 of 7</span>
              <span className="slider-forward arrow">›</span>
              <div className="swipe" style={{ visibility: 'visible' }}>
                <div className="swipe-wrap" style={{ width: '4200px' }}>
                  <div
                    id="1_image_28XGwOyVBB0z_0gw0gw"
                    data-imgid="28XGwOyVBB0z_0gw0gw"
                    className="slide first visible"
                    data-index={0}
                    style={{
                      width: '600px',
                      left: '0px',
                      transitionDuration: '0ms',
                      transform: 'translate(-600px, 0px)',
                    }}
                  >
                    <img
                      src="https://images.craigslist.org/01111_28XGwOyVBB0z_0gw0gw_600x450.jpg"
                      title={1}
                      alt={1}
                    />
                  </div>
                  <div
                    id="2_image_blkmC1UgqXhz_0gw0gw"
                    data-imgid="blkmC1UgqXhz_0gw0gw"
                    className="slide"
                    data-index={1}
                    style={{
                      width: '600px',
                      left: '-600px',
                      transitionDuration: '0ms',
                      transform: 'translate(-600px, 0px)',
                    }}
                  >
                    <picture>
                      <source srcSet="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_600x450.jpg" />
                      <img src="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_600x450.jpg" />
                    </picture>
                  </div>
                  <div
                    id="3_image_blkmC1UgqXhz_0gw0gw"
                    data-imgid="blkmC1UgqXhz_0gw0gw"
                    className="slide"
                    data-index={2}
                    style={{
                      width: '600px',
                      left: '-1200px',
                      transitionDuration: '0ms',
                      transform: 'translate(-600px, 0px)',
                    }}
                  >
                    <picture>
                      <source srcSet="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_600x450.jpg" />
                      <img src="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_600x450.jpg" />
                    </picture>
                  </div>
                  <div
                    id="4_image_eeUTpjQwqOlz_0gw0gw"
                    data-imgid="eeUTpjQwqOlz_0gw0gw"
                    className="slide"
                    data-index={3}
                    style={{
                      width: '600px',
                      left: '-1800px',
                      transitionDuration: '0ms',
                      transform: 'translate(-600px, 0px)',
                    }}
                  >
                    <picture>
                      <source srcSet="https://images.craigslist.org/00h0h_eeUTpjQwqOlz_0gw0gw_600x450.jpg" />
                      <img src="https://images.craigslist.org/00h0h_eeUTpjQwqOlz_0gw0gw_600x450.jpg" />
                    </picture>
                  </div>
                  <div
                    id="5_image_fzDLU4DiRWez_0gw0gw"
                    data-imgid="fzDLU4DiRWez_0gw0gw"
                    className="slide"
                    data-index={4}
                    style={{
                      width: '600px',
                      left: '-2400px',
                      transitionDuration: '0ms',
                      transform: 'translate(0px, 0px)',
                    }}
                  >
                    <picture>
                      <source srcSet="https://images.craigslist.org/00707_fzDLU4DiRWez_0gw0gw_600x450.jpg" />
                      <img src="https://images.craigslist.org/00707_fzDLU4DiRWez_0gw0gw_600x450.jpg" />
                    </picture>
                  </div>
                  <div
                    id="6_image_c0cW6h58810z_0gw0gw"
                    data-imgid="c0cW6h58810z_0gw0gw"
                    className="slide"
                    data-index={5}
                    style={{
                      width: '600px',
                      left: '-3000px',
                      transitionDuration: '0ms',
                      transform: 'translate(600px, 0px)',
                    }}
                  >
                    <picture>
                      <source srcSet="https://images.craigslist.org/01212_c0cW6h58810z_0gw0gw_600x450.jpg" />
                      <img src="https://images.craigslist.org/01212_c0cW6h58810z_0gw0gw_600x450.jpg" />
                    </picture>
                  </div>
                  <div
                    id="7_image_balrwOd7QX4z_0gw0gw"
                    data-imgid="balrwOd7QX4z_0gw0gw"
                    className="slide"
                    data-index={6}
                    style={{
                      width: '600px',
                      left: '-3600px',
                      transitionDuration: '0ms',
                      transform: 'translate(600px, 0px)',
                    }}
                  >
                    <picture>
                      <source srcSet="https://images.craigslist.org/00303_balrwOd7QX4z_0gw0gw_600x450.jpg" />
                      <img src="https://images.craigslist.org/00303_balrwOd7QX4z_0gw0gw_600x450.jpg" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div id="thumbs">
              <a
                id="1_thumb_28XGwOyVBB0z_0gw0gw"
                className="thumb"
                data-imgid="28XGwOyVBB0z_0gw0gw"
                href="https://images.craigslist.org/01111_28XGwOyVBB0z_0gw0gw_600x450.jpg"
                title={1}
              >
                <img
                  src="https://images.craigslist.org/01111_28XGwOyVBB0z_0gw0gw_50x50c.jpg"
                  className
                  alt={1}
                />
              </a>
              <a
                id="2_thumb_blkmC1UgqXhz_0gw0gw"
                className="thumb"
                data-imgid="blkmC1UgqXhz_0gw0gw"
                href="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_600x450.jpg"
                title={2}
              >
                <img
                  src="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_50x50c.jpg"
                  alt={2}
                  className
                />
              </a>
              <a
                id="3_thumb_blkmC1UgqXhz_0gw0gw"
                className="thumb"
                data-imgid="blkmC1UgqXhz_0gw0gw"
                href="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_600x450.jpg"
                title={3}
              >
                <img
                  src="https://images.craigslist.org/00X0X_blkmC1UgqXhz_0gw0gw_50x50c.jpg"
                  alt={3}
                  className
                />
              </a>
              <a
                id="4_thumb_eeUTpjQwqOlz_0gw0gw"
                className="thumb"
                data-imgid="eeUTpjQwqOlz_0gw0gw"
                href="https://images.craigslist.org/00h0h_eeUTpjQwqOlz_0gw0gw_600x450.jpg"
                title={4}
              >
                <img
                  src="https://images.craigslist.org/00h0h_eeUTpjQwqOlz_0gw0gw_50x50c.jpg"
                  alt={4}
                  className
                />
              </a>
              <a
                id="5_thumb_fzDLU4DiRWez_0gw0gw"
                className="thumb"
                data-imgid="fzDLU4DiRWez_0gw0gw"
                href="https://images.craigslist.org/00707_fzDLU4DiRWez_0gw0gw_600x450.jpg"
                title={5}
              >
                <img
                  src="https://images.craigslist.org/00707_fzDLU4DiRWez_0gw0gw_50x50c.jpg"
                  alt={5}
                  className="selected"
                />
              </a>
              <a
                id="6_thumb_c0cW6h58810z_0gw0gw"
                className="thumb"
                data-imgid="c0cW6h58810z_0gw0gw"
                href="https://images.craigslist.org/01212_c0cW6h58810z_0gw0gw_600x450.jpg"
                title={6}
              >
                <img
                  src="https://images.craigslist.org/01212_c0cW6h58810z_0gw0gw_50x50c.jpg"
                  alt={6}
                  className
                />
              </a>
              <a
                id="7_thumb_balrwOd7QX4z_0gw0gw"
                className="thumb"
                data-imgid="balrwOd7QX4z_0gw0gw"
                href="https://images.craigslist.org/00303_balrwOd7QX4z_0gw0gw_600x450.jpg"
                title={7}
              >
                <img
                  src="https://images.craigslist.org/00303_balrwOd7QX4z_0gw0gw_50x50c.jpg"
                  alt={7}
                  className
                />
              </a>
            </div>
          </figure>
          <div className="mapAndAttrs">
            <div className="mapbox">
              <div
                id="map"
                className="viewposting leaflet-container leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag"
                data-latitude="51.499510"
                data-longitude="-0.108765"
                data-accuracy={5}
                tabIndex={0}
              >
                <div
                  className="leaflet-pane leaflet-map-pane"
                  style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                >
                  <div className="leaflet-pane leaflet-tile-pane">
                    <div
                      className="leaflet-layer "
                      style={{ zIndex: 1, opacity: 1 }}
                    >
                      <div
                        className="leaflet-tile-container leaflet-zoom-animated"
                        style={{
                          zIndex: 18,
                          transform: 'translate3d(0px, 0px, 0px) scale(1)',
                        }}
                      >
                        <img
                          alt=""
                          role="presentation"
                          src="//map4.craigslist.org/t09/14/8186/5448.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: '256px',
                            height: '256px',
                            transform: 'translate3d(-110px, -23px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="//map5.craigslist.org/t09/14/8187/5448.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: '256px',
                            height: '256px',
                            transform: 'translate3d(146px, -23px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="//map5.craigslist.org/t09/14/8186/5449.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: '256px',
                            height: '256px',
                            transform: 'translate3d(-110px, 233px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="//map6.craigslist.org/t09/14/8187/5449.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: '256px',
                            height: '256px',
                            transform: 'translate3d(146px, 233px, 0px)',
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="leaflet-pane leaflet-shadow-pane">
                    <img
                      src="//www.craigslist.org/images/map/marker-shadow.png"
                      className="leaflet-marker-shadow leaflet-zoom-animated"
                      alt=""
                      style={{
                        marginLeft: '-12px',
                        marginTop: '-41px',
                        width: '41px',
                        height: '41px',
                        transform: 'translate3d(159px, 150px, 0px)',
                      }}
                    />
                  </div>
                  <div className="leaflet-pane leaflet-overlay-pane" />
                  <div className="leaflet-pane leaflet-marker-pane">
                    <img
                      src="//www.craigslist.org/images/map/marker-icon-2x.png"
                      className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
                      alt=""
                      tabIndex={0}
                      style={{
                        marginLeft: '-12px',
                        marginTop: '-41px',
                        width: '25px',
                        height: '41px',
                        transform: 'translate3d(159px, 150px, 0px)',
                        zIndex: 150,
                      }}
                    />
                  </div>
                  <div className="leaflet-pane leaflet-tooltip-pane" />
                  <div className="leaflet-pane leaflet-popup-pane" />
                  <div className="leaflet-proxy leaflet-zoom-animated" />
                </div>
                <div className="leaflet-control-container">
                  <div className="leaflet-top leaflet-left">
                    <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                      <a
                        className="leaflet-control-fullscreen leaflet-bar-part leaflet-bar-part-top"
                        href="#"
                        title="Toggle Full Screen"
                        role="button"
                        aria-label="Toggle Full Screen"
                      />
                      <a
                        className="leaflet-control-zoom-in leaflet-bar-part "
                        href="#"
                        title="Zoom in"
                        role="button"
                        aria-label="Zoom in"
                      />
                      <a
                        className="leaflet-control-zoom-out leaflet-bar-part leaflet-bar-part-bottom"
                        href="#"
                        title="Zoom out"
                        role="button"
                        aria-label="Zoom out"
                      />
                    </div>
                  </div>
                  <div className="leaflet-top leaflet-right" />
                  <div className="leaflet-bottom leaflet-left" />
                  <div className="leaflet-bottom leaflet-right">
                    <div className="leaflet-control-attribution leaflet-control">
                      © craigslist - Map data ©{' '}
                      <a href="http://www.openstreetmap.org/copyright">
                        OpenStreetMap
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mapaddress">SEVEN PANCRAS SQAURE</div>
              <p className="mapaddress">
                <small>
                  (
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/search/51.499510,-0.108765"
                  >
                    google map
                  </a>
                  )
                </small>
              </p>
            </div>
            <p className="attrgroup">
              <span>
                condition: <b>new</b>
              </span>
              <br />
              <span>delivery available</span>
              <br />
            </p>
            <p className="attrgroup">
              <span className="otherpostings">
                <a href="//london.craigslist.org/search/sss?userpostingid=7440785972">
                  more ads by this user{' '}
                </a>
              </span>
            </p>
          </div>
          <section id="postingbody">
            <div className="print-information print-qrcode-container">
              <p className="print-qrcode-label">QR Code Link to This Post</p>
              <div
                className="print-qrcode"
                data-location="https://london.craigslist.org/fuo/d/london-tv-stand-110x30x325-cm-solid/7440785972.html"
              >
                <canvas width={200} height={200} />
              </div>
            </div>
            This classic wooden TV stand features a unique industrial style,
            making it a great addition to your living room or entertainment
            area. It is also perfect as a coffee table, sideboard or low board.
            This sturdy and robust TV unit is crafted from teak hardwood to look
            like a stack of beams held together by a pair of black belts. Its
            sturdy top has ample space for your TV or vases, potted plants,
            fruit baskets, and other decorative items. The natural finish makes
            the TV rack easy to clean. Thanks to its four wheels, it is also
            easy to move around.
            <br />
            <br />
            Material: Solid teak wood with a natural finish
            <br />
            Dimensions: 110 x 30 x 32,5 cm (L x W x H)
            <br />
            With 4 wheels
            <br />
            Made to look like a stack of beams held together with black wooden
            ‘belts’
            <br />
            Assembly required: Yes
            <br />
            <br />
            Weight 13.66 kg
            <br />
            Color
            <br />
            Black
            <br />
            <br />
            Size
            <br />
            110x30x32,5 cm
            <br />
            <br />
            Shipping time
            <br />
            6<br />
            <br />
            Number of packages
            <br />
            1<br />
            <br />
            Stocks: 200
            <br />
            <br />
            Please find below link for more details:
            <br />
            <br />
            https://thefurbysh.com/product/tv-stand-110x30x32-5-cm-solid-teak-wood/?v=79cba1185463
          </section>
          <ul className="notices">
            <li>do NOT contact me with unsolicited services or offers</li>
          </ul>
          <div className="postinginfos">
            <p className="postinginfo">post id: 7440785972</p>
            <p className="postinginfo reveal" style={{ opacity: 1 }}>
              posted:{' '}
              <time
                className="date timeago"
                dateTime="2022-02-02T16:28:21+0000"
                title="2022-02-02 16:28"
              >
                6 days ago
              </time>
            </p>
            <p className="postinginfo">
              <a
                className="bestof-link"
                href="https://post.craigslist.org/flag"
                title="nominate for best-of-CL"
              >
                <span className="bestof-icon">♥ </span>
                <span className="bestof-text">best of</span>
              </a>{' '}
              <sup>
                [
                <a href="https://www.craigslist.org/about/best-of-craigslist?lang=en&cc=gb">
                  ?
                </a>
                ]
              </sup>
            </p>
          </div>
          <div className="print-information print-pics" />
        </section>
        <div className="psa-box">
          <aside className="tsb">
            <ul>
              <li>
                <a href="https://www.craigslist.org/about/safety?lang=en&cc=gb">
                  safety tips
                </a>
              </li>
              <li>
                <a href="https://www.craigslist.org/about/prohibited?lang=en&cc=gb">
                  prohibited items
                </a>
              </li>
              <li>
                <a href="https://www.craigslist.org/about/recalled_items?lang=en&cc=gb">
                  product recalls
                </a>
              </li>
              <li>
                <a href="https://www.craigslist.org/about/scams?lang=en&cc=gb">
                  avoiding scams
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="avoid-scams">
          <aside className="tsb">
            <p>
              <a href="https://www.craigslist.org/about/scams?lang=en&cc=gb">
                Avoid scams, deal locally
              </a>
              <em>
                Beware wiring (e.g. Western Union), banker cheques, money
                orders, delivery
              </em>
            </p>
          </aside>
        </div>
      </section>
      <footer>
        <ul className="clfooter">
          <li>
            © 2022 <span className="desktop">craigslist</span>
            <span className="mobile">CL</span>
          </li>
          <li>
            <a href="https://www.craigslist.org/about/help/?lang=en&cc=gb">
              help
            </a>
          </li>
          <li>
            <a href="https://www.craigslist.org/about/scams?lang=en&cc=gb">
              safety
            </a>
          </li>
          <li className="desktop">
            <a href="https://www.craigslist.org/about/privacy.policy?lang=en&cc=gb">
              privacy
            </a>
            <sup className="neu">new</sup>
          </li>
          <li className="desktop">
            <a href="https://forums.craigslist.org/?forumID=8">feedback</a>
          </li>
          <li>
            <a href="https://www.craigslist.org/about/terms.of.use">terms</a>
          </li>
          <li>
            <a href="https://www.craigslist.org/about/?lang=en&cc=gb">about</a>
          </li>
          <li className="fsel desktop linklike" data-mode="mobile">
            Mobile
          </li>
          <li className="fsel mobile linklike" data-mode="regular">
            desktop
          </li>
        </ul>
      </footer>
    </section>
  )
  return <ListingPage />
}
