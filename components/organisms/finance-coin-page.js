import { useContext } from 'react'
import { ThemeContext } from 'context'
import { darken } from '@theme-ui/color'

export const FinanceCoinPage = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      sx={{
        background: 'bg',
      }}
    >
      <header className="mainHeader" style={{ width: '100vw' }}>
        <div className="mainHeaderUp">
          <div className="container">
            <div className="row">
              <div className="col colStart">
                <div className="statItemInline">
                  <h4 className="statTitle">Cryptos:</h4>
                  <div className="statVal">
                    <a href="#" className="link">
                      16 460
                    </a>
                  </div>
                </div>
                <div className="statItemInline">
                  <h4 className="statTitle">Exchanges:</h4>
                  <div className="statVal">
                    <a href="#" className="link">
                      451
                    </a>
                  </div>
                </div>
                <div className="statItemInline">
                  <h4 className="statTitle">Market Cap:</h4>
                  <div className="statVal">
                    <a href="#" className="link">
                      $2,041,281,428,972
                    </a>
                  </div>
                </div>
                <div className="statItemInline">
                  <h4 className="statTitle">24h Vol:</h4>
                  <div className="statVal">
                    <a href="#" className="link">
                      $157,928,152,729
                    </a>
                  </div>
                </div>
                <div className="statItemInline">
                  <h4 className="statTitle">Dominance:</h4>
                  <div className="statVal">
                    <a href="#" className="link">
                      BTC: 39.8% ETH: 19.9%
                    </a>
                  </div>
                </div>
                <div className="statItemInline">
                  <h4 className="statTitle">
                    <span className="iconFont iconGasFilled" />
                    ETH Gas:
                  </h4>
                  <div className="statVal">
                    <a href="#" className="link">
                      124 Gwei <span className="iconFont iconChevronDown" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col colEnd">
                <div className="item">
                  <div className="dropdown">
                    <button className="dropdown__btn btn">
                      English
                      <span className="iconFont iconCaretDown" />
                    </button>
                    <div className="dropdown__box">Languages</div>
                  </div>
                </div>
                <div className="item">
                  <button className="btn">
                    <img
                      src="https://dev26.morozovoleg.com/img/icons/USD.svg"
                      className="iconCurrency iconLeft"
                    />
                    USD
                    <span className="iconFont iconCaretDown" />
                  </button>
                </div>
                <div className="item">
                  <button className="btn">
                    <span className="iconFont iconMoon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainHeaderDown">
          <div className="container">
            <div className="row">
              <div className="col colStart">
                <a href className="logo">
                  <img
                    src="https://dev26.morozovoleg.com/img/logo.svg"
                    alt="logo"
                  />
                </a>
                <nav className="mainNavigation">
                  <ul className="mainNavigation__list">
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        Cryptocurrencies
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        Exchanges
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        NFT
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        Portfolio
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        Watchlist
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        Calendars
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        Products
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainNavigation__item">
                      <a href className="mainNavigation__link">
                        Learn
                      </a>
                      <ul className="mainNavigation__submenu">
                        <li className="mainNavigation__submenuItem">
                          <a href className="mainNavigation__submenuLink">
                            Lorem
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col colEnd">
                <div className="item">
                  <div className="popover">
                    {/* <button class="popover__btn btn btn_round"><img src="https://dev26.morozovoleg.com/img/icons/icon-diamond.svg" alt="icon-diamond"></button> */}
                    <div className="popover-box" />
                  </div>
                </div>
                <div className="item">
                  <button className="btn btn_md">Log In</button>
                  <button className="btn btn_primary btn_md">Sign Up</button>
                </div>
                <div className="item">
                  <div id="search" className="search">
                    <button className="search__btn">
                      <svg className="icon icon-search">
                        <use xlinkHref="#icon-search" />
                      </svg>
                      <span className="search__btnTitle">Search</span>
                      <div className="keyBox">/</div>
                    </button>
                    <div className="search__box">
                      <div className="search__inputBox">
                        <svg className="icon icon-search">
                          <use xlinkHref="#icon-search" />
                        </svg>
                        <input
                          type="text"
                          className="search__input"
                          placeholder="What are you looking for?"
                        />
                        <button className="search__close">
                          <svg className="icon icon-close">
                            <use xlinkHref="#icon-close" />
                          </svg>
                        </button>
                      </div>
                      <div className="search__noResult hidden">
                        <div className="searchCirlceIcon">
                          <svg className="icon icon-search">
                            <use xlinkHref="#icon-search" />
                          </svg>
                        </div>
                        <p className="title">No results for 'asdsa'</p>
                        <p className="text">
                          We couldn't find anything matching your search.
                          <br />
                          Try again with a different term.
                        </p>
                      </div>
                      <div className="search__body">
                        <div className="trending">
                          <div className="smTitle">Trending 🔥</div>
                          <a
                            href
                            className="itemLink itemLink_active flexRow vaCenter haSpaceBetween rowBorder"
                          >
                            <div className="flexRow">
                              <div className="img">
                                <img
                                  src="https://dev26.morozovoleg.com/img/trending06.png"
                                  alt="sponsor"
                                />
                              </div>
                              <div className="flexRow vaCenter">
                                <span className="statVal statVal_bold">
                                  MetaDoge
                                </span>
                                <span className="statTitle ml3">METADOGE</span>
                              </div>
                            </div>
                            <div>
                              <span className="tag">Select</span>
                              <span className="keyBox">↵</span>
                            </div>
                          </a>
                          <a
                            href
                            className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                          >
                            <div className="flexRow">
                              <div className="img">
                                <img
                                  src="https://dev26.morozovoleg.com/img/trending07.png"
                                  alt="sponsor"
                                />
                              </div>
                              <div className="flexRow vaCenter">
                                <span className="statVal statVal_bold">
                                  DeFi Degen Land
                                </span>
                                <span className="statTitle ml3">DDL</span>
                              </div>
                            </div>
                            <div>
                              <span className="tag">#1273</span>
                            </div>
                          </a>
                          <a
                            href
                            className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                          >
                            <div className="flexRow">
                              <div className="img">
                                <img
                                  src="https://dev26.morozovoleg.com/img/trending08.png"
                                  alt="sponsor"
                                />
                              </div>
                              <div className="flexRow vaCenter">
                                <span className="statVal statVal_bold">
                                  Hector DAO
                                </span>
                                <span className="statTitle ml3">HEC</span>
                              </div>
                            </div>
                            <div>
                              <span className="tag">#2867</span>
                            </div>
                          </a>
                          <a
                            href
                            className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                          >
                            <div className="flexRow">
                              <div className="img">
                                <img
                                  src="https://dev26.morozovoleg.com/img/trending09.png"
                                  alt="sponsor"
                                />
                              </div>
                              <div className="flexRow vaCenter">
                                <span className="statVal statVal_bold">
                                  TABOO TOKEN
                                </span>
                                <span className="statTitle ml3">TABOO</span>
                              </div>
                            </div>
                            <div>
                              <span className="tag">#565</span>
                            </div>
                          </a>
                          <a
                            href
                            className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                          >
                            <div className="flexRow">
                              <div className="img">
                                <img
                                  src="https://dev26.morozovoleg.com/img/trending10.png"
                                  alt="sponsor"
                                />
                              </div>
                              <div className="flexRow vaCenter">
                                <span className="statVal statVal_bold">
                                  Byakko
                                </span>
                                <span className="statTitle ml3">BYK</span>
                              </div>
                            </div>
                            <div>
                              <span className="tag">#3163</span>
                            </div>
                          </a>
                          <a
                            href
                            className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                          >
                            <div className="flexRow">
                              <div className="img">
                                <img
                                  src="https://dev26.morozovoleg.com/img/trending11.png"
                                  alt="sponsor"
                                />
                              </div>
                              <div className="flexRow vaCenter">
                                <span className="statVal statVal_bold">
                                  Rainbow Token
                                </span>
                                <span className="statTitle ml3">RAINBOW</span>
                              </div>
                            </div>
                            <div>
                              <span className="tag">#1166</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="search__footer">
                        <div className="col">
                          <span className="keyBox">TAB</span>
                          <span className="keyBox">↑</span>
                          <span className="keyBox">↓</span>
                          <span className="statTitle">To Navigate</span>
                        </div>
                        <div className="col">
                          <span className="keyBox">ESC</span>
                          <span className="statTitle">To Cancel</span>
                        </div>
                        <div className="col">
                          <span className="keyBox">↵</span>
                          <span className="statTitle">To Enter</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="page pagePancakeSwap">
        <div className="pagination">
          <div className="container">
            <div className="row">
              <ul className="pagination__list">
                <li className="pagination__item">
                  <a href className="pagination__link">
                    Cryptocurrencies
                  </a>
                </li>
                <li className="pagination__item">
                  <a href className="pagination__link">
                    Tokens
                  </a>
                </li>
                <li className="pagination__item">
                  <span className="pagination__active">PancakeSwap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="topSummary">
          <div className="container">
            <div className="mainRow">
              <div className="col nameSection">
                <div className="nameHeader">
                  <img
                    src="https://dev26.morozovoleg.com/img/pancakeSwap.png"
                    height={32}
                    width={32}
                    alt="CAKE"
                  />
                  <h2 className="h1">
                    PancakeSwap<small className="nameSymbol">CAKE</small>
                  </h2>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <button className="btnWatchlist">
                      <span className="iconFont iconStar" />
                    </button>
                  </span>
                </div>
                <div className="tags">
                  <span className="tag tag_primary">Rank #53</span>
                  <span className="tag">Token</span>
                  <span className="tag">On 528,078 watchlists</span>
                </div>
              </div>
              <div className="col priceSection">
                <div className="statTitle">
                  PancakeSwap Price <span>(CAKE)</span>
                </div>
                <div className="price">
                  <div className="flexRow va-center">
                    <div className="price__val">$10.36</div>
                    <div className="statProcent statProcent_bgDanger">
                      <span className="iconFont iconCaretDown" />
                      2.67%
                    </div>
                  </div>
                </div>
                <div className="coinCurrency">
                  <div className="flexRow vaCenter">
                    <span className="statTitle">0.0002487 BTC</span>
                    <div className="statProcent statProcent_md statProcent_danger">
                      <span className="iconFont iconCaretDown" />
                      2.67%
                    </div>
                  </div>
                  <div className="flexRow vaCenter">
                    <span className="statTitle">0.0002487 ETH</span>
                    <div className="statProcent statProcent_md statProcent_success">
                      <span className="iconFont iconCaretDown" />
                      2.67%
                    </div>
                  </div>
                </div>
                <div className="priceSlider">
                  <div className="sliderProgress">
                    <div className="flexRow vaCenter">
                      <div className="sliderProgress__label">
                        Low:<span>$10.05</span>
                      </div>
                      <div className="sliderProgress__line">
                        <span style={{ width: '40%' }} />
                        <svg
                          className="icon icon-caretUp"
                          style={{ left: 'calc(40% - 9px)' }}
                        >
                          <use xlinkHref="#icon-caretUp" />
                        </svg>
                      </div>
                      <div className="sliderProgress__label">
                        High:<span>$10.86</span>
                      </div>
                      <div className="dropdown">
                        <button className="dropdown__btn tag tag_dropdown">
                          24h <span className="iconFont iconChevronDown" />
                        </button>
                        <div className="dropdown__box" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col statsSection">
                <div className="statsContainer">
                  <div className="statsBlock">
                    <div className="statsBlockInner">
                      <div className="statTitle">
                        Market Cap
                        <svg className="icon icon-info iconRight">
                          <use xlinkHref="#icon-info" />
                        </svg>
                      </div>
                      <div className="statText">$2,642,705,007</div>
                      <div className="statProcent statProcent_danger">
                        <span className="iconFont iconCaretDown" />
                        1.87%
                      </div>
                    </div>
                    <div className="statsBlockInner">
                      <div className="statTitle">
                        Market Cap / TVL Ratio
                        <svg className="icon icon-info iconRight">
                          <use xlinkHref="#icon-info" />
                        </svg>
                      </div>
                      <div className="statText">0.5795</div>
                    </div>
                  </div>
                  <div className="statsBlock">
                    <div className="statsBlockInner">
                      <div className="statTitle">
                        Fully Diluted Market Cap
                        <svg className="icon icon-info iconRight">
                          <use xlinkHref="#icon-info" />
                        </svg>
                      </div>
                      <div className="statText">$2,783,358,729</div>
                      <div className="statProcent statProcent_danger">
                        <span className="iconFont iconCaretDown" />
                        1.77%
                      </div>
                    </div>
                    <div className="statsBlockInner">
                      <div className="statTitle">
                        Total Value Locked (TVL)
                        <svg className="icon icon-info iconRight">
                          <use xlinkHref="#icon-info" />
                        </svg>
                      </div>
                      <div className="statText">$4,803,096,772</div>
                    </div>
                  </div>
                  <div className="statsBlock">
                    <div className="statsBlockInner">
                      <div className="statTitle">
                        Volume <span className="tag">24h</span>{' '}
                        <svg className="icon icon-info iconRight">
                          <use xlinkHref="#icon-info" />
                        </svg>
                      </div>
                      <div className="statText">$158,881,748</div>
                      <div className="statProcent statProcent_danger">
                        <span className="iconFont iconCaretDown" />
                        0.93%
                      </div>
                    </div>
                    <div className="statsBlockInner">
                      <div className="statTitle">
                        Volume / Market Cap
                        <svg className="icon icon-info iconRight">
                          <use xlinkHref="#icon-info" />
                        </svg>
                      </div>
                      <div className="statText">0.05571</div>
                    </div>
                  </div>
                  <div className="statsBlockLast">
                    <div className="statsBlockInner">
                      <div className="statTitle">
                        Circulating Supply
                        <svg className="icon icon-info iconRight">
                          <use xlinkHref="#icon-info" />
                        </svg>
                      </div>
                      <div className="statText">257,334,815.68 CAKE</div>
                    </div>
                    <div className="statsBlockInner_last">
                      <div className="flexRow haSpaceBetween">
                        <div className="statTitle">
                          Max Supply
                          <svg className="icon icon-info iconRight">
                            <use xlinkHref="#icon-info" />
                          </svg>
                        </div>
                        <div className="statText">--</div>
                      </div>
                      <div className="flexRow haSpaceBetween">
                        <div className="statTitle">
                          Total Supply
                          <svg className="icon icon-info iconRight">
                            <use xlinkHref="#icon-info" />
                          </svg>
                        </div>
                        <div className="statText">256,950,462</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col buttonSection">
                <div className="flexRow vaCenter haEnd">
                  <div className="dropdown">
                    <button
                      className="dropdown__btn btn btn_primary btn_md"
                      sx={{ bg: 'primary' }}
                    >
                      Buy
                      <span className="iconFont iconCaretDown" />
                    </button>
                    <div className="dropdown__box" />
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown__btn btn btn_primary btn_md"
                      sx={{ bg: 'primary' }}
                    >
                      Exchange
                      <span className="iconFont iconCaretDown" />
                    </button>
                    <div className="dropdown__box" />
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown__btn btn btn_primary btn_md"
                      sx={{ bg: 'primary' }}
                    >
                      Gaming
                      <span className="iconFont iconCaretDown" />
                    </button>
                    <div className="dropdown__box" />
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown__btn btn btn_primary btn_md"
                      sx={{ bg: 'primary' }}
                    >
                      Earn Crypto
                      <span className="iconFont iconCaretDown" />
                    </button>
                    <div className="dropdown__box" />
                  </div>
                </div>
              </div>
              <div className="col linkSection">
                <div className="row">
                  <div className="item">
                    <a href className="btn btn_link btn_hover">
                      <svg className="icon icon-link iconLeft">
                        <use xlinkHref="#icon-link" />
                      </svg>
                      pancakeswap.finance
                      <svg className="icon icon-open iconRight">
                        <use xlinkHref="#icon-open" />
                      </svg>
                    </a>
                  </div>
                  {console.log(theme)}
                  <div className="item">
                    <a
                      href
                      className="btn btn_link btn_hover"
                      // sx={{ color: darken(theme.colors.background, 0.5) }}
                    >
                      <svg className="icon icon-search iconLeft">
                        <use xlinkHref="#icon-search" />
                      </svg>
                      Explorers
                      <svg className="icon icon-open iconRight">
                        <use xlinkHref="#icon-open" />
                      </svg>
                    </a>
                  </div>
                  <div className="item">
                    <div className="dropdown">
                      <button className="dropdown__btn btn btn_link">
                        <svg className="icon icon-user iconLeft">
                          <use xlinkHref="#icon-user" />
                        </svg>
                        Community
                        <svg className="icon icon-caret-down iconRight">
                          <use xlinkHref="#icon-caret-down" />
                        </svg>
                      </button>
                      <div className="dropdown__box" />
                    </div>
                  </div>
                  <div className="item">
                    <a href className="btn btn_link btn_hover">
                      <svg className="icon icon-chat iconLeft">
                        <use xlinkHref="#icon-chat" />
                      </svg>
                      Chat
                      <svg className="icon icon-open iconRight">
                        <use xlinkHref="#icon-open" />
                      </svg>
                    </a>
                  </div>
                  <div className="item">
                    <a href className="btn btn_link btn_hover">
                      <svg className="icon icon-code iconLeft">
                        <use xlinkHref="#icon-code" />
                      </svg>
                      Source code
                      <svg className="icon icon-open iconRight">
                        <use xlinkHref="#icon-open" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="statTitle">Contracts:</div>
                  </div>
                  <div className="btn btn_link">
                    <img
                      src="https://dev26.morozovoleg.com/img/icons/1839.png"
                      alt="icon"
                      className="iconBtnStart"
                    />
                    <a href>
                      Binance Smart Chain (BEP20):{' '}
                      <span>
                        0x0e09...e81ce82
                        <span />
                      </span>
                    </a>
                    <button>
                      <svg className="icon icon-copy iconRight">
                        <use xlinkHref="#icon-copy" />
                      </svg>
                    </button>
                    <a href>
                      <img
                        src="https://dev26.morozovoleg.com/img/icons/metamask.png"
                        alt="metamask"
                        className="iconBtnEnd"
                      />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="statTitle">
                      Audits:
                      <svg className="icon icon-info iconRight">
                        <use xlinkHref="#icon-info" />
                      </svg>
                    </div>
                  </div>
                  <div className="item">
                    <div className="btn btn_link">
                      <img
                        src="https://dev26.morozovoleg.com/img/icons/certik.png"
                        alt="icon"
                        className="iconBtnStart"
                      />{' '}
                      Certik
                      <svg className="icon icon-open iconRight">
                        <use xlinkHref="#icon-open" />
                      </svg>
                    </div>
                  </div>
                  <div className="item">
                    <div className="btn btn_link">
                      <img
                        src="https://dev26.morozovoleg.com/img/icons/slowmist.png"
                        alt="icon"
                        className="iconBtnStart round"
                      />{' '}
                      SlowMist
                      <svg className="icon icon-open iconRight">
                        <use xlinkHref="#icon-open" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="statTitle">Tags:</div>
                  </div>
                  <div className="tags">
                    <a href className="tag tag_round">
                      Decentralized Exchange
                    </a>
                    <a href className="tag tag_round">
                      DeFi
                    </a>
                    <a href className="tag tag_round">
                      Yield Farming
                    </a>
                    <a href className="tag tag_round">
                      Binance Chain
                    </a>
                    <a href className="tag tag_round tag_color">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs">
          <div className="tabNav">
            <div className="container">
              <div className="flexRow haSpaceBetween vaCenter">
                <div>
                  <a href className="tabBtn btn btn_lg btn_primary">
                    Overview
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Market
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Historical Data
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Project Info
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Wallets
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    News
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Socials
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Ratings
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Analysis
                  </a>
                  <a href className="tabBtn btn btn_lg">
                    Price Estimates
                  </a>
                </div>
                <button className="btn btn_outline">
                  <svg className="icon icon-share iconLeft">
                    <use xlinkHref="#icon-share" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
          <div className="tabContent">
            <div className="container">
              <div className="tabOverview">
                <div className="flexRow haSpaceBetween">
                  <div className="col col01">Charts</div>
                  <div className="col col02">
                    <div className="sidebarBox sidebarStatistics">
                      <h2 className="h2">CAKE Price Statistics</h2>
                      <div className="item">
                        <div className="flexRow flexRow_first">
                          <div className="statTitle">
                            PancakeSwap Price Today
                          </div>
                        </div>
                        <div className="flexRow haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            <b>PancakeSwap Price</b>
                          </div>
                          <div className="statVal">$10.8</div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Price Change <span className="tag">24h</span>
                          </div>
                          <div className="statValItem">
                            <div className="statVal">$0.08834</div>
                            <div className="statProcent statProcent_success">
                              <span className="iconFont iconCaretDown" />
                              0.82%
                            </div>
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            24h Low / 24h High
                          </div>
                          <div className="statValItem">
                            <div className="statVal">
                              $10.69 /<br />
                              $11.09
                            </div>
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Trading Volume <span className="tag">24h</span>
                          </div>
                          <div className="statValItem">
                            <div className="statVal">$154,294,268.19</div>
                            <div className="statProcent statProcent_danger">
                              <span className="iconFont iconCaretDown" />
                              24.81%
                            </div>
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Volume / Market Cap
                          </div>
                          <div className="statValItem">
                            <div className="statVal">0.05495</div>
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Market Dominance
                          </div>
                          <div className="statValItem">
                            <div className="statVal">0,14%</div>
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Market Rank
                          </div>
                          <div className="statValItem">
                            <div className="statVal">#50</div>
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Total Value Locked (TVL)
                          </div>
                          <div className="statValItem">
                            <div className="statVal">$4,943,274,691</div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="flexRow flexRow_first">
                          <div className="statTitle">
                            PancakeSwap Market Cap
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Market Cap
                          </div>
                          <div className="statValItem">
                            <div className="statVal">$2,807,804,170.96</div>
                            <div className="statProcent statProcent_success">
                              <span className="iconFont iconCaretDown" />
                              1.08%
                            </div>
                          </div>
                        </div>
                        <div className="flexRow vaCenter haSpaceBetween rowBorder">
                          <div className="statTitle statTitle_md">
                            Fully Diluted Market Cap
                          </div>
                          <div className="statValItem">
                            <div className="statVal">$2,807,804,170.96</div>
                            <div className="statProcent statProcent_success">
                              <span className="iconFont iconCaretDown" />
                              0.91%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="showMore">
                        <div className="showMore__content">
                          <div className="item">
                            <div className="flexRow flexRow_first">
                              <div className="statTitle">
                                PancakeSwap Price Yesterday
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                Yesterday's Low / High
                              </div>
                              <div className="statValItem">
                                <div className="statVal">
                                  $10.30 /<br />
                                  $11.09
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                Yesterday's Open / Close
                              </div>
                              <div className="statValItem">
                                <div className="statVal">
                                  $10.38 /<br />
                                  $10.90
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                Yesterday's Change
                              </div>
                              <div className="statValItem">
                                <div className="statProcent statProcent_success">
                                  <span className="iconFont iconCaretDown" />
                                  5.01%
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                Yesterday's Volume
                              </div>
                              <div className="statValItem">
                                <div className="statVal">$188,769,885.89</div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="flexRow flexRow_first">
                              <div className="statTitle">
                                PancakeSwap Price History
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                7d Low / 7d High
                              </div>
                              <div className="statValItem">
                                <div className="statVal">
                                  $10.04 /<br />
                                  11.41
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                30d Low / 30d High
                              </div>
                              <div className="statValItem">
                                <div className="statVal">
                                  $10.04 /<br />
                                  $13.49
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                90d Low / 90d High
                              </div>
                              <div className="statValItem">
                                <div className="statVal">
                                  $10.04 /<br />
                                  $20.72
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                52 Week Low / 52 Week High
                              </div>
                              <div className="statValItem">
                                <div className="statVal">
                                  $0.5088 /<br />
                                  $44.18
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                All Time High
                                <br />
                                <span className="small">
                                  Apr 30, 2021 (8 months ago)
                                </span>
                              </div>
                              <div className="statValItem">
                                <div className="statVal">
                                  $10.04 /<br />
                                  $20.72
                                </div>
                                <div className="statProcent statProcent_danger">
                                  <span className="iconFont iconCaretDown" />
                                  75.44%
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                All Time Low
                                <br />
                                <span className="small">
                                  Sep 29, 2020 (a year ago)
                                </span>
                              </div>
                              <div className="statValItem">
                                <div className="statVal">$0.0002318</div>
                                <div className="statProcent statProcent_success">
                                  <span className="iconFont iconCaretDown" />
                                  4682502.17%
                                </div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                PancakeSwap ROI
                                <svg className="icon icon-info02 iconRight">
                                  <use xlinkHref="#icon-info02" />
                                </svg>
                              </div>
                              <div className="statValItem">
                                <div className="statProcent statProcent_md statProcent_success">
                                  <span className="iconFont iconCaretDown" />
                                  920.28%
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="flexRow flexRow_first">
                              <div className="statTitle">
                                PancakeSwap Supply
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                Circulating Supply
                              </div>
                              <div className="statValItem">
                                <div className="statVal">257 644 487 CAKE</div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                Total Supply
                              </div>
                              <div className="statValItem">
                                <div className="statVal">257 644 487 CAKE</div>
                              </div>
                            </div>
                            <div className="flexRow vaCenter haSpaceBetween rowBorder">
                              <div className="statTitle statTitle_md">
                                Max Supply
                              </div>
                              <div className="statValItem">
                                <div className="statVal">No Data</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="showMore__btn btn btn_lg">
                          Show more
                        </button>
                      </div>
                    </div>
                    <div className="sidebarBox sidebarTrending">
                      <h2 className="h3">Trending Coins and Tokens 🔥</h2>
                      <div className="trendingSponsor">
                        <a
                          href
                          className="itemLink flexRow vaCenter haSpaceBetween"
                        >
                          <div className="flexRow">
                            <div className="img">
                              <img
                                src="https://dev26.morozovoleg.com/img/sponsor.png"
                                alt="sponsor"
                              />
                            </div>
                            <div className="info">
                              <div className="statVal statVal_bold">
                                nexo.io
                              </div>
                              <div className="statTitle">
                                Earn Up to 17% APR
                              </div>
                            </div>
                          </div>
                          <div className="btnBox">
                            <button className="btn btn_md btn_primary">
                              Earn Now!
                            </button>
                            <div className="flexRow vaCenter">
                              <svg className="icon icon-logo">
                                <use xlinkHref="#icon-logo" />
                              </svg>
                              <span className="statTitle">Sponsored</span>
                            </div>
                          </div>
                        </a>
                        <a
                          href
                          className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                        >
                          <div className="flexRow">
                            <div className="img">
                              <img
                                src="https://dev26.morozovoleg.com/img/trending01.png"
                                alt="sponsor"
                              />
                            </div>
                            <div className="flexRow vaCenter">
                              <span className="statVal statVal_bold">
                                Byakko
                              </span>
                              <span className="statTitle ml3">BYK</span>
                            </div>
                          </div>
                          <div>
                            <span className="tag">#3040</span>
                          </div>
                        </a>
                        <a
                          href
                          className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                        >
                          <div className="flexRow">
                            <div className="img">
                              <img
                                src="https://dev26.morozovoleg.com/img/trending02.png"
                                alt="sponsor"
                              />
                            </div>
                            <div className="flexRow vaCenter">
                              <span className="statVal statVal_bold">
                                Dynamix
                              </span>
                              <span className="statTitle ml3">DYNA</span>
                            </div>
                          </div>
                          <div>
                            <span className="tag">#1422</span>
                          </div>
                        </a>
                        <a
                          href
                          className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                        >
                          <div className="flexRow">
                            <div className="img">
                              <img
                                src="https://dev26.morozovoleg.com/img/trending03.png"
                                alt="sponsor"
                              />
                            </div>
                            <div className="flexRow vaCenter">
                              <span className="statVal statVal_bold">
                                Captain Shibarrow
                              </span>
                              <span className="statTitle ml3">DYNA</span>
                            </div>
                          </div>
                          <div>
                            <span className="tag">#1422</span>
                          </div>
                        </a>
                        <a
                          href
                          className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                        >
                          <div className="flexRow">
                            <div className="img">
                              <img
                                src="https://dev26.morozovoleg.com/img/trending04.png"
                                alt="sponsor"
                              />
                            </div>
                            <div className="flexRow vaCenter">
                              <span className="statVal statVal_bold">
                                GamingShiba
                              </span>
                              <span className="statTitle ml3">GAMINGSHIBA</span>
                            </div>
                          </div>
                          <div>
                            <span className="tag">#3270</span>
                          </div>
                        </a>
                        <a
                          href
                          className="itemLink flexRow vaCenter haSpaceBetween rowBorder"
                        >
                          <div className="flexRow">
                            <div className="img">
                              <img
                                src="https://dev26.morozovoleg.com/img/trending05.png"
                                alt="sponsor"
                              />
                            </div>
                            <div className="flexRow vaCenter">
                              <span className="statVal statVal_bold">
                                SpookyShiba
                              </span>
                              <span className="statTitle ml3">SPOOKYSHIBA</span>
                            </div>
                          </div>
                          <div>
                            <span className="tag">#3202</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
