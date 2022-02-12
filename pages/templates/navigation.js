// atoms:
//
// Link
// Calendar cell
//
//
// molecules:
//
// Navigation Block
// Calendar
//
// organisms:
//
// Navigation Grid
//

import { NavigationPage } from 'components/templates'

export default function NavigationTemplate() {
  return (
    <div className="wrapper">
      <section className="page-container">
        <div className="bglogo" />
        <header className="global-header wide">
          <a
            className="header-logo"
            name="logoLink"
            href="https://www.craigslist.org/about/sites"
          >
            CL
          </a>
          <nav className="breadcrumbs-container">
            <ul className="breadcrumbs">
              <li className="crumb area">
                <p>
                  <a href="/">london, UK</a>
                </p>
              </li>
            </ul>
          </nav>
          <div className="userlinks">
            <ul className="user-actions">
              <li className="user post">
                <a href="https://post.craigslist.org/c/ldn?lang=en&cc=gb">
                  post
                </a>
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
                  <a href="#" className="to-banish-page-link">
                    <span className="icon icon-trash red" aria-hidden="true" />
                    <span className="banished_count" />
                    <span className="discards-label"> hidden</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <header className="global-header narrow">
          <a
            className="header-logo"
            href="https://www.craigslist.org/about/sites"
          >
            CL
          </a>
          <nav className="breadcrumbs-container">
            <div className="breadcrumbs">london, UK</div>
          </nav>
          <span className="linklike show-wide-header">...</span>
        </header>
        <nav id="topban" className="regular">
          <div className="regular-area">
            <h2 className="area">
              <div className="cl-component location-picker-homepage-link">
                <a className="cl-component location-picker-link" href="#">
                  london, UK
                </a>
              </div>
            </h2>
          </div>
        </nav>
        <div id="leftbar">
          <h1 id="logo">
            <a href="https://www.craigslist.org/about/sites?lang=en&cc=gb">
              craigslist
            </a>
            <sup>
              <a href="//geo.craigslist.org/iso/gb">uk</a>
            </sup>
          </h1>
          <ul id="postlks">
            <li>
              <a
                id="post"
                href="https://post.craigslist.org/c/ldn?lang=en&cc=gb"
              >
                create a posting
              </a>
            </li>
            <li>
              <a href="https://accounts.craigslist.org/login/home?lang=en&cc=gb">
                my account
              </a>
            </li>
          </ul>
          <form
            id="search"
            className="homepage-search"
            action="/search/"
            method="GET"
          >
            <input type="hidden" name="ordinal" id="ordinal" defaultValue={1} />
            <input type="hidden" name="ratio" id="ratio" defaultValue={0} />
            <input type="hidden" name="clicked" id="clicked" defaultValue={0} />
            <input
              id="query"
              className="querybox flatinput ui-autocomplete-input"
              name="query"
              data-autocomplete="search-count"
              autoCorrect="off"
              autoCapitalize="off"
              placeholder="search craigslist"
              autofocus="autofocus"
              autoComplete="off"
            />
            <select
              id="catAbb"
              name="catAbb"
              className="homepage-category-picker"
            >
              <option value selected="selected">
                select category
              </option>
              <option value="ccc">community</option>
              <option value="eee">events</option>
              <option value="ggg">temp jobs</option>
              <option value="hhh">housing</option>
              <option value="jjj">jobs</option>
              <option value="rrr">cvs</option>
              <option value="sss">for sale</option>
              <option value="bbb">services</option>
            </select>
            <button type="submit" id="go" className="searchbtn">
              <span className="icon icon-search">
                <span className="screen-reader-text">search craigslist</span>
              </span>
            </button>
          </form>
          <div>
            <h4 id="calban">
              <a href="/search/eee">event calendar</a>
            </h4>
            <table className="cal">
              <tbody>
                <tr className="days">
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                  <th>S</th>
                </tr>
                <tr>
                  <td className>7</td>
                  <td className="today ">
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-08">
                      8
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-09">
                      9
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-10">
                      10
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-11">
                      11
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-12">
                      12
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-13">
                      13
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-14">
                      14
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-15">
                      15
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-16">
                      16
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-17">
                      17
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-18">
                      18
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-19">
                      19
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-20">
                      20
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-21">
                      21
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-22">
                      22
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-23">
                      23
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-24">
                      24
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-25">
                      25
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-26">
                      26
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-27">
                      27
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-02-28">
                      28
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-03-01">
                      1
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-03-02">
                      2
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-03-03">
                      3
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-03-04">
                      4
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-03-05">
                      5
                    </a>
                  </td>
                  <td className>
                    <a href="//london.craigslist.org/search/eee?sale_date=2022-03-06">
                      6
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="leftlinks" id="user_resources">
            <li>
              <a href="https://www.craigslist.org/about/help/?lang=en&cc=gb">
                help, faq, abuse, legal
              </a>
            </li>
            <li>
              <a href="https://www.craigslist.org/about/scams?lang=en&cc=gb">
                avoid scams &amp; fraud
              </a>
            </li>
            <li>
              <a href="https://www.craigslist.org/about/safety?lang=en&cc=gb">
                personal safety tips
              </a>
            </li>
            <li>
              <a href="https://www.craigslist.org/about/terms.of.use">
                terms of use
              </a>
            </li>
            <li>
              <a href="https://www.craigslist.org/about/privacy.policy?lang=en&cc=gb">
                privacy policy<sup className="neu">new</sup>
              </a>
            </li>
            <li>
              <a href="https://www.craigslist.org/about/help/system-status?lang=en&cc=gb">
                system status
              </a>
            </li>
          </ul>
          <ul className="leftlinks" id="about_craigslist">
            <li>
              <a href="https://www.craigslist.org/about/?lang=en&cc=gb">
                about craigslist
              </a>
            </li>
            <li>
              <a href="https://www.craigslist.org/about/open_source?lang=en&cc=gb">
                craigslist open source
              </a>
            </li>
            <li>
              <a href="http://blog.craigslist.org/">craigslist blog</a>
            </li>
            <li>
              <a href="https://www.craigslist.org/about/best/all/?lang=en&cc=gb">
                best-of-craigslist
              </a>
            </li>
            <li>
              <a href="http://www.craigslistjoe.com/">"craigslist joe"</a>
            </li>
            <li>
              <a href="https://craignewmarkphilanthropies.org/">
                craig newmark
                <br />
                philanthropies
              </a>
            </li>
          </ul>
        </div>
        <div id="center">
          <div className="community">
            <div id="ccc" className="col">
              <h3 className="ban">
                <a
                  href="/search/ccc"
                  className="ccc"
                  data-alltitle="all community"
                  data-cat="ccc"
                >
                  <span className="txt">
                    community
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats">
                <ul id="ccc0" className="left">
                  <li>
                    <a href="/search/act" className="act" data-cat="act">
                      <span className="txt">
                        activities
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ats" className="ats" data-cat="ats">
                      <span className="txt">
                        artists
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/rid" className="rid" data-cat="rid">
                      <span className="txt">
                        car pools
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/kid" className="kid" data-cat="kid">
                      <span className="txt">
                        childcare
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cls" className="cls" data-cat="cls">
                      <span className="txt">
                        classes
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/eve" className="eve" data-cat="eve">
                      <span className="txt">
                        events
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/com" className="com" data-cat="com">
                      <span className="txt">
                        general
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/grp" className="grp" data-cat="grp">
                      <span className="txt">
                        groups
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul id="ccc1" className="mc">
                  <li>
                    <a href="/search/vnn" className="vnn" data-cat="vnn">
                      <span className="txt">
                        local news
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/laf" className="laf" data-cat="laf">
                      <span className="txt">
                        lost+found
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/mis" className="mis" data-cat="mis">
                      <span className="txt">
                        missed connections
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/muc" className="muc" data-cat="muc">
                      <span className="txt">
                        musicians
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/pet" className="pet" data-cat="pet">
                      <span className="txt">
                        pets
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/pol" className="pol" data-cat="pol">
                      <span className="txt">
                        politics
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/rnr" className="rnr" data-cat="rnr">
                      <span className="txt">
                        rants &amp; raves
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/vol" className="vol" data-cat="vol">
                      <span className="txt">
                        volunteers
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="bbb" className="col">
              <h3 className="ban">
                <a
                  href="/search/bbb"
                  className="bbb"
                  data-alltitle="all services"
                  data-cat="bbb"
                >
                  <span className="txt">
                    services
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats">
                <ul id="bbb0" className="left">
                  <li>
                    <a href="/search/bts" className="bts" data-cat="bts">
                      <span className="txt">
                        beauty
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/aos" className="aos" data-cat="aos">
                      <span className="txt">
                        cars/automotive
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cms" className="cms" data-cat="cms">
                      <span className="txt">
                        cell/mobile
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cps" className="cps" data-cat="cps">
                      <span className="txt">
                        computer
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/crs" className="crs" data-cat="crs">
                      <span className="txt">
                        creative
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cys" className="cys" data-cat="cys">
                      <span className="txt">
                        cycle
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/evs" className="evs" data-cat="evs">
                      <span className="txt">
                        event
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/fgs" className="fgs" data-cat="fgs">
                      <span className="txt">
                        farm+garden
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/fns" className="fns" data-cat="fns">
                      <span className="txt">
                        financial
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/hws" className="hws" data-cat="hws">
                      <span className="txt">
                        health/well
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/hss" className="hss" data-cat="hss">
                      <span className="txt">
                        household
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul id="bbb1" className="mc">
                  <li>
                    <a href="/search/rts" className="rts" data-cat="rts">
                      <span className="txt">
                        housing/real estate
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/lbs" className="lbs" data-cat="lbs">
                      <span className="txt">
                        labour/move
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/lgs" className="lgs" data-cat="lgs">
                      <span className="txt">
                        legal
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/lss" className="lss" data-cat="lss">
                      <span className="txt">
                        lessons
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/mas" className="mas" data-cat="mas">
                      <span className="txt">
                        marine
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/pas" className="pas" data-cat="pas">
                      <span className="txt">
                        pet
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sks" className="sks" data-cat="sks">
                      <span className="txt">
                        skilled trade
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/biz" className="biz" data-cat="biz">
                      <span className="txt">
                        sm biz ads
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/trv" className="trv" data-cat="trv">
                      <span className="txt">
                        travel/hol
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/wet" className="wet" data-cat="wet">
                      <span className="txt">
                        write/ed/tran
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="forums" className="col">
              <h3 className="ban">
                <a
                  href="https://forums.craigslist.org/?areaID=24"
                  className="forums"
                  data-cat="forums"
                >
                  <span className="txt">
                    discussion forums
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats">
                <ul id="forums0" className="left">
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=3232">
                      <span className="txt">
                        apple
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=49">
                      <span className="txt">
                        arts
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=78">
                      <span className="txt">
                        atheist
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=5">
                      <span className="txt">
                        autos
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=88">
                      <span className="txt">
                        beauty
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=95">
                      <span className="txt">
                        bikes
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=47">
                      <span className="txt">
                        celebs
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=34">
                      <span className="txt">
                        comp
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=1564">
                      <span className="txt">
                        cosmos
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=122">
                      <span className="txt">
                        diet
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=76">
                      <span className="txt">
                        divorce
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=130">
                      <span className="txt">
                        dying
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=99">
                      <span className="txt">
                        eco
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=8">
                      <span className="txt">
                        feedbk
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=41">
                      <span className="txt">
                        film
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=64">
                      <span className="txt">
                        fixit
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=22">
                      <span className="txt">
                        food
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul id="forums1" className="mc">
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=2007">
                      <span className="txt">
                        frugal
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=85">
                      <span className="txt">
                        gaming
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=54">
                      <span className="txt">
                        garden
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=575">
                      <span className="txt">
                        haiku
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=9">
                      <span className="txt">
                        help
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=81">
                      <span className="txt">
                        history
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=6">
                      <span className="txt">
                        housing
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=7">
                      <span className="txt">
                        jobs
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=1257">
                      <span className="txt">
                        jokes
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=73">
                      <span className="txt">
                        legal
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=79">
                      <span className="txt">
                        manners
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=1926">
                      <span className="txt">
                        marriage
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=53">
                      <span className="txt">
                        money
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=24">
                      <span className="txt">
                        music
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=4">
                      <span className="txt">
                        open
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=39">
                      <span className="txt">
                        parent
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=26">
                      <span className="txt">
                        pets
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul id="forums2" className="mc">
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=71">
                      <span className="txt">
                        philos
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=5500">
                      <span className="txt">
                        photo
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=20">
                      <span className="txt">
                        politics
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=29">
                      <span className="txt">
                        psych
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=12">
                      <span className="txt">
                        recover
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=59">
                      <span className="txt">
                        religion
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=28">
                      <span className="txt">
                        rofo
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=96">
                      <span className="txt">
                        science
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=93">
                      <span className="txt">
                        spirit
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=32">
                      <span className="txt">
                        sports
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=2012">
                      <span className="txt">
                        super
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=1040">
                      <span className="txt">
                        tax
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=42">
                      <span className="txt">
                        travel
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=98">
                      <span className="txt">
                        tv
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=2400">
                      <span className="txt">
                        vegan
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=7000">
                      <span className="txt">
                        words
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.craigslist.org/?areaID=24&forumID=27">
                      <span className="txt">
                        writing
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="housing">
            <div id="hhh" className="col">
              <h3 className="ban">
                <a
                  href="/search/hhh"
                  className="hhh"
                  data-alltitle="all housing"
                  data-cat="hhh"
                >
                  <span className="txt">
                    housing
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats">
                <ul id="hhh0">
                  <li>
                    <a href="/search/apa" className="apa" data-cat="apa">
                      <span className="txt">
                        flats/housing
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/vac" className="vac" data-cat="vac">
                      <span className="txt">
                        holiday rentals
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/rea" className="rea" data-cat="rea">
                      <span className="txt">
                        housing/real estate for sale
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/swp" className="swp" data-cat="swp">
                      <span className="txt">
                        housing swap
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/hsw" className="hsw" data-cat="hsw">
                      <span className="txt">
                        housing wanted
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/off" className="off" data-cat="off">
                      <span className="txt">
                        office / commercial
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/prk" className="prk" data-cat="prk">
                      <span className="txt">
                        parking / storage
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/roo" className="roo" data-cat="roo">
                      <span className="txt">
                        rooms/shared
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sha" className="sha" data-cat="sha">
                      <span className="txt">
                        rooms wanted
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sub" className="sub" data-cat="sub">
                      <span className="txt">
                        sub-lets / temporary
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="sss" className="col">
              <h3 className="ban">
                <a
                  href="/search/sss"
                  className="sss"
                  data-alltitle="all for sale"
                  data-cat="sss"
                >
                  <span className="txt">
                    for sale
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats">
                <ul id="sss0" className="left">
                  <li>
                    <a href="/search/ata" className="ata" data-cat="ata">
                      <span className="txt">
                        antiques
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ppa" className="ppa" data-cat="ppa">
                      <span className="txt">
                        appliances
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ara" className="ara" data-cat="ara">
                      <span className="txt">
                        arts+crafts
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sna" className="sna" data-cat="sna">
                      <span className="txt">
                        atv/utv/sno
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/pta" className="pta" data-cat="pta">
                      <span className="txt">
                        auto parts
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ava" className="ava" data-cat="ava">
                      <span className="txt">
                        aviation
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/baa" className="baa" data-cat="baa">
                      <span className="txt">
                        baby+kid
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/bar" className="bar" data-cat="bar">
                      <span className="txt">
                        barter
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/haa" className="haa" data-cat="haa">
                      <span className="txt">
                        beauty+hlth
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/bip" className="bip" data-cat="bip">
                      <span className="txt">
                        bike parts
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/bia" className="bia" data-cat="bia">
                      <span className="txt">
                        bikes
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/bpa" className="bpa" data-cat="bpa">
                      <span className="txt">
                        boat parts
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/boo" className="boo" data-cat="boo">
                      <span className="txt">
                        boats
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/bka" className="bka" data-cat="bka">
                      <span className="txt">
                        books
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/bfa" className="bfa" data-cat="bfa">
                      <span className="txt">
                        business
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/rva" className="rva" data-cat="rva">
                      <span className="txt">
                        caravn+mtrhm
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cta" className="cta" data-cat="cta">
                      <span className="txt">
                        cars+vans
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ema" className="ema" data-cat="ema">
                      <span className="txt">
                        cds/dvd/vhs
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cla" className="cla" data-cat="cla">
                      <span className="txt">
                        clothes+acc
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cba" className="cba" data-cat="cba">
                      <span className="txt">
                        collectibles
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/syp" className="syp" data-cat="syp">
                      <span className="txt">
                        computer parts
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sya" className="sya" data-cat="sya">
                      <span className="txt">
                        computers
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ela" className="ela" data-cat="ela">
                      <span className="txt">
                        electronics
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul id="sss1" className="mc">
                  <li>
                    <a href="/search/gra" className="gra" data-cat="gra">
                      <span className="txt">
                        farm+garden
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/zip" className="zip" data-cat="zip">
                      <span className="txt">
                        free
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/fua" className="fua" data-cat="fua">
                      <span className="txt">
                        furniture
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/gms" className="gms" data-cat="gms">
                      <span className="txt">
                        garage sale
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/foa" className="foa" data-cat="foa">
                      <span className="txt">
                        general
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/hva" className="hva" data-cat="hva">
                      <span className="txt">
                        heavy equip
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/hsa" className="hsa" data-cat="hsa">
                      <span className="txt">
                        household
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/jwa" className="jwa" data-cat="jwa">
                      <span className="txt">
                        jewellery
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/maa" className="maa" data-cat="maa">
                      <span className="txt">
                        materials
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/moa" className="moa" data-cat="moa">
                      <span className="txt">
                        mobile phones
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/mpa" className="mpa" data-cat="mpa">
                      <span className="txt">
                        motorcycle parts
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/mca" className="mca" data-cat="mca">
                      <span className="txt">
                        motorcycles
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/msa" className="msa" data-cat="msa">
                      <span className="txt">
                        music instr
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/pha" className="pha" data-cat="pha">
                      <span className="txt">
                        photo+video
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sga" className="sga" data-cat="sga">
                      <span className="txt">
                        sporting
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/tia" className="tia" data-cat="tia">
                      <span className="txt">
                        tickets
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/tla" className="tla" data-cat="tla">
                      <span className="txt">
                        tools
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/taa" className="taa" data-cat="taa">
                      <span className="txt">
                        toys+games
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/tra" className="tra" data-cat="tra">
                      <span className="txt">
                        trailers
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/vga" className="vga" data-cat="vga">
                      <span className="txt">
                        video gaming
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/waa" className="waa" data-cat="waa">
                      <span className="txt">
                        wanted
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/wta" className="wta" data-cat="wta">
                      <span className="txt">
                        wheels+tires
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="jobs">
            <div id="jjj" className="col">
              <h3 className="ban">
                <a
                  href="/search/jjj"
                  className="jjj"
                  data-alltitle="all jobs"
                  data-cat="jjj"
                >
                  <span className="txt">
                    jobs
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats">
                <ul id="jjj0">
                  <li>
                    <a href="/search/acc" className="acc" data-cat="acc">
                      <span className="txt">
                        accounting+finance
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ofc" className="ofc" data-cat="ofc">
                      <span className="txt">
                        admin / office
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/egr" className="egr" data-cat="egr">
                      <span className="txt">
                        arch / engineering
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/med" className="med" data-cat="med">
                      <span className="txt">
                        art / media / design
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sci" className="sci" data-cat="sci">
                      <span className="txt">
                        biotech / science
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/bus" className="bus" data-cat="bus">
                      <span className="txt">
                        business / mgmt
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/csr" className="csr" data-cat="csr">
                      <span className="txt">
                        customer services
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/edu" className="edu" data-cat="edu">
                      <span className="txt">
                        education
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/etc" className="etc" data-cat="etc">
                      <span className="txt">
                        etc / misc
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/fbh" className="fbh" data-cat="fbh">
                      <span className="txt">
                        food / bev / hosp
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/lab" className="lab" data-cat="lab">
                      <span className="txt">
                        general labour
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/gov" className="gov" data-cat="gov">
                      <span className="txt">
                        government
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/rej" className="rej" data-cat="rej">
                      <span className="txt">
                        housing/real estate
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/hum" className="hum" data-cat="hum">
                      <span className="txt">
                        human resources
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/lgl" className="lgl" data-cat="lgl">
                      <span className="txt">
                        legal / paralegal
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/mnu" className="mnu" data-cat="mnu">
                      <span className="txt">
                        manufacturing
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/mar" className="mar" data-cat="mar">
                      <span className="txt">
                        marketing / pr / ad
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/hea" className="hea" data-cat="hea">
                      <span className="txt">
                        medical / health
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/npo" className="npo" data-cat="npo">
                      <span className="txt">
                        non-profit sector
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/ret" className="ret" data-cat="ret">
                      <span className="txt">
                        retail / wholesale
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sls" className="sls" data-cat="sls">
                      <span className="txt">
                        sales / biz dev
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/spa" className="spa" data-cat="spa">
                      <span className="txt">
                        salon / spa / fitness
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sec" className="sec" data-cat="sec">
                      <span className="txt">
                        security
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/trd" className="trd" data-cat="trd">
                      <span className="txt">
                        skilled trade / craft
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sof" className="sof" data-cat="sof">
                      <span className="txt">
                        software/qa/dba
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/sad" className="sad" data-cat="sad">
                      <span className="txt">
                        systems / network
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/tch" className="tch" data-cat="tch">
                      <span className="txt">
                        technical support
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/trp" className="trp" data-cat="trp">
                      <span className="txt">
                        transport
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/tfr" className="tfr" data-cat="tfr">
                      <span className="txt">
                        tv / film / video
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/web" className="web" data-cat="web">
                      <span className="txt">
                        web/info design
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/wri" className="wri" data-cat="wri">
                      <span className="txt">
                        writing / editing
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="ggg" className="col">
              <h3 className="ban">
                <a
                  href="/search/ggg"
                  className="ggg"
                  data-alltitle="all temp jobs"
                  data-cat="ggg"
                >
                  <span className="txt">
                    temp jobs
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats">
                <ul id="ggg0" className="left">
                  <li>
                    <a href="/search/cpg" className="cpg" data-cat="cpg">
                      <span className="txt">
                        computer
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/crg" className="crg" data-cat="crg">
                      <span className="txt">
                        creative
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/cwg" className="cwg" data-cat="cwg">
                      <span className="txt">
                        crew
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/dmg" className="dmg" data-cat="dmg">
                      <span className="txt">
                        domestic
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul id="ggg1" className="mc">
                  <li>
                    <a href="/search/evg" className="evg" data-cat="evg">
                      <span className="txt">
                        event
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/lbg" className="lbg" data-cat="lbg">
                      <span className="txt">
                        labour
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/tlg" className="tlg" data-cat="tlg">
                      <span className="txt">
                        talent
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/search/wrg" className="wrg" data-cat="wrg">
                      <span className="txt">
                        writing
                        <sup className="c" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="rrr" className="col">
              <h3 className="ban">
                <a
                  href="/search/rrr"
                  className="rrr"
                  data-alltitle="all cvs"
                  data-cat="rrr"
                >
                  <span className="txt">
                    cvs
                    <sup className="c" />
                  </span>
                </a>
              </h3>
              <div className="cats"></div>
            </div>
          </div>
        </div>
        <div id="rightbar">
          <div id="langlinks">
            <select name="lang" id="chlang" className="js-only">
              <option value="?lang=da&setlang=1">dansk</option>
              <option value="?lang=de&setlang=1">deutsch</option>
              <option selected value="?lang=en&cc=gb&setlang=1">
                english
              </option>
              <option value="?lang=es&setlang=1">español</option>
              <option value="?lang=fr&setlang=1">français</option>
              <option value="?lang=it&setlang=1">italiano</option>
              <option value="?lang=pt&setlang=1">português</option>
              <option value="?lang=fi&setlang=1">suomi</option>
              <option value="?lang=sv&setlang=1">svenska</option>
              <option value="?lang=vi&setlang=1">tiếng việt</option>
              <option value="?lang=tr&setlang=1">türkçe</option>
              <option value="?lang=ru&setlang=1">русский</option>
              <option value="?lang=zh&setlang=1">中文</option>
              <option value="?lang=ja&setlang=1">日本語</option>
              <option value="?lang=ko&setlang=1">한국말</option>
            </select>
          </div>
          <ul className="menu collapsible">
            <li className="expand s">
              <h5 className="ban ctry hot active">uk</h5>
              <ul className="acitem" style={{ display: 'block' }}>
                <li className="s">
                  <a href="http://aberdeen.craigslist.org/">aberdeen</a>
                </li>
                <li className="s">
                  <a href="http://bath.craigslist.org/">bath</a>
                </li>
                <li className="s">
                  <a href="http://belfast.craigslist.org/">belfast</a>
                </li>
                <li className="s">
                  <a href="http://birmingham.craigslist.org/">birmingham</a>
                </li>
                <li className="s">
                  <a href="http://brighton.craigslist.org/">brighton</a>
                </li>
                <li className="s">
                  <a href="http://bristol.craigslist.org/">bristol</a>
                </li>
                <li className="s">
                  <a href="http://cambridge.craigslist.org/">cambridge</a>
                </li>
                <li className="s">
                  <a href="http://cardiff.craigslist.org/">cardiff / wales</a>
                </li>
                <li className="s">
                  <a href="http://coventry.craigslist.org/">coventry</a>
                </li>
                <li className="s">
                  <a href="http://derby.craigslist.org/">derby</a>
                </li>
                <li className="s">
                  <a href="http://devon.craigslist.org/">devon/cornwall</a>
                </li>
                <li className="s">
                  <a href="http://dundee.craigslist.org/">dundee</a>
                </li>
                <li className="s">
                  <a href="http://norwich.craigslist.org/">east anglia</a>
                </li>
                <li className="s">
                  <a href="http://eastmids.craigslist.org/">east midlands</a>
                </li>
                <li className="s">
                  <a href="http://edinburgh.craigslist.org/">edinburgh</a>
                </li>
                <li className="s">
                  <a href="http://essex.craigslist.org/">essex</a>
                </li>
                <li className="s">
                  <a href="http://glasgow.craigslist.org/">glasgow</a>
                </li>
                <li className="s">
                  <a href="http://hampshire.craigslist.org/">hampshire</a>
                </li>
                <li className="s">
                  <a href="http://kent.craigslist.org/">kent</a>
                </li>
                <li className="s">
                  <a href="http://leeds.craigslist.org/">leeds</a>
                </li>
                <li className="s">
                  <a href="http://liverpool.craigslist.org/">liverpool</a>
                </li>
                <li className="s">
                  <a href="http://london.craigslist.org/">london</a>
                </li>
                <li className="s">
                  <a href="http://manchester.craigslist.org/">manchester</a>
                </li>
                <li className="s">
                  <a href="http://newcastle.craigslist.org/">newcastle</a>
                </li>
                <li className="s">
                  <a href="http://nottingham.craigslist.org/">nottingham</a>
                </li>
                <li className="s">
                  <a href="http://oxford.craigslist.org/">oxford</a>
                </li>
                <li className="s">
                  <a href="http://sheffield.craigslist.org/">sheffield</a>
                </li>
              </ul>
            </li>
            <li className="s">
              <h5 className="ban hot">europe</h5>
              <ul className="acitem" style={{ display: 'none' }}>
                <li className="s">
                  <a href="http://amsterdam.craigslist.org/">amsterdam</a>
                </li>
                <li className="s">
                  <a href="http://berlin.craigslist.org/">berlin</a>
                </li>
                <li className="s">
                  <a href="http://brussels.craigslist.org/">brussels</a>
                </li>
                <li className="s">
                  <a href="http://budapest.craigslist.org/">budapest</a>
                </li>
                <li className="s">
                  <a href="http://copenhagen.craigslist.org/">copenhagen</a>
                </li>
                <li className="s">
                  <a href="http://cotedazur.craigslist.org/">côte d'azur</a>
                </li>
                <li className="s">
                  <a href="http://dublin.craigslist.org/">dublin</a>
                </li>
                <li className="s">
                  <a href="http://edinburgh.craigslist.org/">edinburgh</a>
                </li>
                <li className="s">
                  <a href="http://florence.craigslist.org/">florence</a>
                </li>
                <li className="s">
                  <a href="http://london.craigslist.org/">london</a>
                </li>
                <li className="s">
                  <a href="http://munich.craigslist.org/">munich</a>
                </li>
                <li className="s">
                  <a href="http://oslo.craigslist.org/">oslo</a>
                </li>
                <li className="s">
                  <a href="http://oxford.craigslist.org/">oxford</a>
                </li>
                <li className="s">
                  <a href="http://paris.craigslist.org/">paris</a>
                </li>
                <li className="s">
                  <a href="http://prague.craigslist.org/">prague</a>
                </li>
                <li className="s">
                  <a href="http://rome.craigslist.org/">rome</a>
                </li>
                <li className="s">
                  <a href="http://stockholm.craigslist.org/">stockholm</a>
                </li>
                <li className="s">
                  <a href="http://venice.craigslist.org/">venice/veneto</a>
                </li>
              </ul>
            </li>
            <li className="s">
              <h5 className="ban hot">us/ca</h5>
              <ul className="acitem" style={{ display: 'none' }}>
                <li className="s">
                  <a href="http://boston.craigslist.org/">boston</a>
                </li>
                <li className="s">
                  <a href="http://chicago.craigslist.org/">chicago</a>
                </li>
                <li className="s">
                  <a href="http://losangeles.craigslist.org/">los angeles</a>
                </li>
                <li className="s">
                  <a href="http://miami.craigslist.org/">miami</a>
                </li>
                <li className="s">
                  <a href="http://montreal.craigslist.org/">montréal</a>
                </li>
                <li className="s">
                  <a href="http://newyork.craigslist.org/">new york</a>
                </li>
                <li className="s">
                  <a href="http://seattle.craigslist.org/">seattle</a>
                </li>
                <li className="s">
                  <a href="http://sfbay.craigslist.org/">sf bay area</a>
                </li>
                <li className="s">
                  <a href="http://toronto.craigslist.org/">toronto</a>
                </li>
                <li className="s">
                  <a href="http://vancouver.craigslist.org/">vancouver</a>
                </li>
                <li className="s">
                  <a href="http://washingtondc.craigslist.org/">wash dc</a>
                </li>
              </ul>
            </li>
            <li className="s">
              <h5 className="ban hot">cl worldwide</h5>
              <ul className="acitem collapsible" style={{ display: 'none' }}>
                <li className="cont s">
                  <h5 className="hot">africa</h5>
                  <ul className="acitem" style={{ display: 'none' }}>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/eg">Egypt</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/et">Ethiopia</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/gh">Ghana</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ke">Kenya</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ma">Morocco</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/za">South Africa</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/tn">Tunisia</a>
                    </li>
                  </ul>
                </li>
                <li className="cont s">
                  <h5 className="hot">americas</h5>
                  <ul className="acitem" style={{ display: 'none' }}>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ar">Argentina</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/bo">Bolivia</a>
                    </li>
                    <li className="s">
                      <a href="http://rio.craigslist.org/">Brazil</a>
                    </li>
                    <li className="s">
                      <a href="https://www.craigslist.org/about/sites?lang=en&cc=gb#CA">
                        Canada
                      </a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/cl">Chile</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/co">Colombia</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/cr">Costa Rica</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/do">dom republic</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ec">Ecuador</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/sv">El Salvador</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/gt">Guatemala</a>
                    </li>
                    <li className="s">
                      <a href="http://mexicocity.craigslist.org/">Mexico</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ni">Nicaragua</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/pa">Panama</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/pe">Peru</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/pr">Puerto Rico</a>
                    </li>
                    <li className="s">
                      <a href="https://www.craigslist.org/about/sites?lang=en&cc=gb#US">
                        United States
                      </a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/uy">Uruguay</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/vi">
                        us virgin islands
                      </a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ve">Venezuela</a>
                    </li>
                  </ul>
                </li>
                <li className="cont s">
                  <h5 className="hot">asia</h5>
                  <ul className="acitem" style={{ display: 'none' }}>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/bd">Bangladesh</a>
                    </li>
                    <li className="s">
                      <a href="http://shanghai.craigslist.org/">China</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/hk">Hong Kong</a>
                    </li>
                    <li className="s">
                      <a href="http://bangalore.craigslist.org/">India</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/id">Indonesia</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ir">Iran</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/iq">Iraq</a>
                    </li>
                    <li className="s">
                      <a href="http://telaviv.craigslist.org/">Israel</a>
                    </li>
                    <li className="s">
                      <a href="http://tokyo.craigslist.org/">Japan</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/kw">Kuwait</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/lb">Lebanon</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/my">Malaysia</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/pk">Pakistan</a>
                    </li>
                    <li className="s">
                      <a href="http://manila.craigslist.org/">Philippines</a>
                    </li>
                    <li className="s">
                      <a href="http://moscow.craigslist.org/">Russia</a>
                    </li>
                    <li className="s">
                      <a href="http://singapore.craigslist.org/">Singapore</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/kr">south korea</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/tw">Taiwan</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/th">Thailand</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/tr">Turkey</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ae">uae</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/vn">Vietnam</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ps">West bank</a>
                    </li>
                  </ul>
                </li>
                <li className="cont s">
                  <h5 className="hot">Europe</h5>
                  <ul className="acitem" style={{ display: 'none' }}>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/at">Austria</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/be">Belgium</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/bg">Bulgaria</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/hr">Croatia</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/cz">Czech Republic</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/dk">Denmark</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/fi">Finland</a>
                    </li>
                    <li className="s">
                      <a href="http://paris.craigslist.org/">France</a>
                    </li>
                    <li className="s">
                      <a href="http://berlin.craigslist.org/">Germany</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/gr">Greece</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/hu">Hungary</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/is">iceland</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ie">Ireland</a>
                    </li>
                    <li className="s">
                      <a href="http://rome.craigslist.org/">Italy</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/lu">Luxembourg</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/nl">Netherlands</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/no">Norway</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/pl">Poland</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/pt">Portugal</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ro">Romania</a>
                    </li>
                    <li className="s">
                      <a href="http://moscow.craigslist.org/">Russia</a>
                    </li>
                    <li className="s">
                      <a href="http://madrid.craigslist.org/">Spain</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/se">Sweden</a>
                    </li>
                    <li className="s">
                      <a href="http://zurich.craigslist.org/">Switzerland</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/tr">Turkey</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ua">Ukraine</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/gb">United Kingdom</a>
                    </li>
                  </ul>
                </li>
                <li className="cont s">
                  <h5 className="hot">Middle East</h5>
                  <ul className="acitem" style={{ display: 'none' }}>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/eg">Egypt</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/iq">Iraq</a>
                    </li>
                    <li className="s">
                      <a href="http://telaviv.craigslist.org/">Israel</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/kw">Kuwait</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/lb">Lebanon</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/tr">Turkey</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ae">uae</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/ps">West bank</a>
                    </li>
                  </ul>
                </li>
                <li className="cont s">
                  <h5 className="hot">oceania</h5>
                  <ul className="acitem" style={{ display: 'none' }}>
                    <li className="s">
                      <a href="http://sydney.craigslist.org/">Australia</a>
                    </li>
                    <li className="s">
                      <a href="//geo.craigslist.org/iso/gu">Guam</a>
                    </li>
                    <li className="s">
                      <a href="http://auckland.craigslist.org/">New Zealand</a>
                    </li>
                    <li className="s">
                      <a href="http://manila.craigslist.org/">Philippines</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <br />
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
    </div>
  )
  return <NavigationPage />
}
