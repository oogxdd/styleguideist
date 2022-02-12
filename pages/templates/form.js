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
import { FormPage } from 'components/templates'

export default function FormTemplate() {
  return (
    <div>
      <article className="page-container">
        <header className="global-header wide">
          <a
            className="header-logo"
            name="logoLink"
            href="https://www.craigslist.org?lang=en&cc=gb"
          >
            CL
          </a>
          <nav className="breadcrumbs-container">
            <ul className="breadcrumbs">
              <li className="crumb area">
                <p>
                  london, UK
                  <span className="breadcrumb-arrow">&gt;</span>
                </p>
              </li>
              <li className="crumb section">
                <p>
                  jobs
                  <span className="breadcrumb-arrow">&gt;</span>
                </p>
              </li>
              <li className="crumb category">
                <p>
                  writing/editing
                  <span className="breadcrumb-arrow">&gt;</span>
                </p>
              </li>
            </ul>
          </nav>
          <aside id="loginWidget" className="highlight">
            <p>
              [{' '}
              <a href="https://accounts.craigslist.org/login?rp=%2Fk%2FPjB-6JuH7BGO_e9q2dGTNQ%2FOnnxd&rt=P&lang=en&cc=gb">
                log in
              </a>{' '}
              ]
            </p>
            <p>
              [{' '}
              <a href="https://accounts.craigslist.org/signup?rp=%2Fk%2FPjB-6JuH7BGO_e9q2dGTNQ%2FOnnxd&rt=P&lang=en&cc=gb">
                create account
              </a>{' '}
              ]
            </p>
          </aside>
        </header>
        <header className="global-header narrow">
          <a
            className="header-logo"
            href="https://www.craigslist.org?lang=en&cc=gb"
          >
            CL
          </a>
          <nav className="breadcrumbs-container">
            <div className="breadcrumbs">london, UK &gt; writing/editing </div>
          </nav>
          <span className="linklike show-wide-header">...</span>
        </header>
        <section className="body">
          <form
            id="postingForm"
            action="https://post.craigslist.org/k/PjB-6JuH7BGO_e9q2dGTNQ/Onnxd?lang=en&cc=gb"
            method="post"
          >
            <div className="new-form" id="new-edit">
              <link
                type="text/css"
                rel="stylesheet"
                media="all"
                href="//www.craigslist.org/styles/JSONForm.css?v=73d36127a22f4c44c8ddbeb974b83460"
              />
              <link
                type="text/css"
                rel="stylesheet"
                media="all"
                href="//www.craigslist.org/styles/posting-process-edit.css?v=932f708dd7f72971099c4fef37a08f6c"
              />
              <div className="json-form">
                <div className="json-form-group json-form-group-container posting-title-subform title row fields ">
                  <label className="json-form-item text PostingTitle req posting-title variant-text">
                    <div className="label-wrapper">
                      <span className="label">posting title</span>
                    </div>
                    <label className="input PostingTitle">
                      <input
                        className="json-form-input"
                        name="PostingTitle"
                        defaultValue
                        tabIndex={1}
                        type="text"
                        autofocus="autofocus"
                        id="PostingTitle"
                        maxLength={70}
                      />
                    </label>
                  </label>
                  <label className="json-form-item text geographic_area neighborhood std variant-text">
                    <div className="label-wrapper">
                      <span className="label">city or neighborhood</span>
                    </div>
                    <label className="input geographic_area">
                      <input
                        className="json-form-input"
                        name="geographic_area"
                        defaultValue
                        tabIndex={1}
                        type="text"
                        id="geographic_area"
                        maxLength={60}
                      />
                    </label>
                  </label>
                  <label className="json-form-item text postal req variant-text">
                    <div className="label-wrapper">
                      <span className="label">postcode</span>
                    </div>
                    <label className="input postal">
                      <input
                        className="json-form-input"
                        name="postal"
                        defaultValue
                        tabIndex={1}
                        type="text"
                        id="postal_code"
                        maxLength={15}
                      />
                    </label>
                  </label>
                </div>
                <div className="html json-form-item">
                  <small className="onejobonly">
                    <b>Only one job description per posting please.</b>
                    <br />
                    <a
                      target="_blank"
                      href="https://www.craigslist.org/about/help/faq-job?lang=en&cc=gb"
                    >
                      Please see our FAQ for job posters
                    </a>
                  </small>
                </div>
                <label className="json-form-item textarea PostingBody req">
                  <div className="label-wrapper">
                    <span className="label">description</span>
                  </div>
                  <textarea
                    className="json-form-input PostingBody "
                    name="PostingBody"
                    placeholder
                    tabIndex={1}
                    id="PostingBody"
                    rows={10}
                    defaultValue={''}
                  />
                </label>
                <fieldset className="json-form-group json-form-group-container posting-attributes">
                  <legend>posting details</legend>
                  <div className="json-form-group posting-attributes ">
                    <div className="json-form-group json-form-group-container posting-attributes-select ">
                      <label className="json-form-item select employment_type req variant-select">
                        <div className="label-wrapper">
                          <span className="label">employment type</span>
                        </div>
                        <select
                          tabIndex={1}
                          name="employment_type"
                          className="json-form-input no-js employment_type"
                          id="ui-id-1"
                          style={{ display: 'none' }}
                        >
                          <option value>-</option>
                          <option value={1}>full-time</option>
                          <option value={2}>part-time</option>
                          <option value={3}>contract</option>
                          <option value={4}>employee's choice</option>
                        </select>
                        <span
                          className="ui-selectmenu-button ui-widget ui-state-default ui-corner-all"
                          tabIndex={0}
                          id="ui-id-1-button"
                          role="combobox"
                          aria-expanded="false"
                          aria-autocomplete="list"
                          aria-owns="ui-id-1-menu"
                          aria-haspopup="true"
                          style={{ width: '385px' }}
                          aria-activedescendant="ui-id-2"
                          aria-labelledby="ui-id-2"
                          aria-disabled="false"
                        >
                          <span className="ui-icon ui-icon-triangle-1-s" />
                          <span className="ui-selectmenu-text">-</span>
                        </span>
                      </label>
                    </div>
                    <div className="json-form-group json-form-group-container posting-attributes-boolean ">
                      <label className="json-form-item boolean recruiters_ok std variant-checkbox">
                        <input
                          type="checkbox"
                          name="recruiters_ok"
                          defaultValue={1}
                          className="recruiters_ok"
                        />
                        <div className="label-wrapper">
                          <span className="label">
                            direct contact by recruiters is ok
                          </span>
                        </div>
                      </label>
                      <label className="json-form-item boolean is_internship std variant-checkbox">
                        <input
                          type="checkbox"
                          name="is_internship"
                          defaultValue={1}
                          className="is_internship"
                        />
                        <div className="label-wrapper">
                          <span className="label">internship</span>
                        </div>
                      </label>
                      <label className="json-form-item boolean is_nonprofit std variant-checkbox">
                        <input
                          type="checkbox"
                          name="is_nonprofit"
                          defaultValue={1}
                          className="is_nonprofit"
                        />
                        <div className="label-wrapper">
                          <span className="label">non-profit organisation</span>
                        </div>
                      </label>
                      <label className="json-form-item boolean is_relocation_available std variant-checkbox">
                        <input
                          type="checkbox"
                          name="is_relocation_available"
                          defaultValue={1}
                          className="is_relocation_available"
                        />
                        <div className="label-wrapper">
                          <span className="label">
                            relocation assistance available
                          </span>
                        </div>
                      </label>
                      <label className="json-form-item boolean is_telecommuting std variant-checkbox">
                        <input
                          type="checkbox"
                          name="is_telecommuting"
                          defaultValue={1}
                          className="is_telecommuting"
                        />
                        <div className="label-wrapper">
                          <span className="label">telecommuting ok</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <label className="json-form-item text job_title req variant-text">
                  <div className="label-wrapper">
                    <span className="label">job title</span>
                  </div>
                  <label className="input job_title">
                    <input
                      className="json-form-input"
                      name="job_title"
                      defaultValue
                      tabIndex={1}
                      type="text"
                      maxLength={50}
                    />
                  </label>
                </label>
                <label className="json-form-item text remuneration req variant-text">
                  <div className="label-wrapper">
                    <span className="label">compensation</span>
                  </div>
                  <label className="input remuneration">
                    <input
                      className="json-form-input"
                      name="remuneration"
                      defaultValue
                      tabIndex={1}
                      type="text"
                      placeholder="describe compensation here (please be as detailed as possible)"
                    />
                  </label>
                </label>
                <label className="json-form-item text company_name std variant-text">
                  <div className="label-wrapper">
                    <span className="label">company name</span>
                  </div>
                  <label className="input company_name">
                    <input
                      className="json-form-input"
                      name="company_name"
                      defaultValue
                      tabIndex={1}
                      type="text"
                    />
                  </label>
                </label>
                <fieldset className="json-form-group json-form-group-container contact-info">
                  <legend>contact info</legend>
                  <div className="json-form-group contact-info ">
                    <div className="json-form-group json-form-group-container email-form ">
                      <div className="json-form-group json-form-group-container email-form-text-input ">
                        <label className="json-form-item text FromEMail req variant-text">
                          <div className="label-wrapper">
                            <span className="label">email</span>
                          </div>
                          <label className="input FromEMail df">
                            <input
                              className="json-form-input"
                              name="FromEMail"
                              defaultValue
                              tabIndex={1}
                              type="text"
                              placeholder="Your email address"
                              autoCapitalize="off"
                              maxLength={60}
                            />
                          </label>
                        </label>
                      </div>
                      <div className="json-form-group json-form-group-container email-privacy ">
                        <label className="json-form-item select Privacy variant-radio">
                          <div className="label-wrapper">
                            <span className="label">email privacy options</span>
                            <a
                              className="help-link"
                              target="_blank"
                              title="how does mail relay work?"
                              href="https://www.craigslist.org/about/help/email-relay?lang=en&cc=gb"
                            >
                              [?]
                            </a>
                          </div>
                          <label className="radio-option">
                            <input
                              type="radio"
                              className="json-form-input Privacy"
                              name="Privacy"
                              defaultValue="C"
                              defaultChecked
                              title="craigslist will anonymise your email address"
                            />
                            <div>
                              <span className="option-label">
                                CL mail relay (recommended)
                              </span>
                            </div>
                          </label>
                          <label className="radio-option">
                            <input
                              type="radio"
                              className="json-form-input Privacy"
                              name="Privacy"
                              defaultValue="P"
                              title="your actual email address will appear in the posting"
                            />
                            <div>
                              <span className="option-label">
                                show my real email address
                              </span>
                            </div>
                          </label>
                          <label className="radio-option">
                            <input
                              type="radio"
                              className="json-form-input Privacy"
                              name="Privacy"
                              defaultValue="A"
                              title="no email address will appear in your posting – be sure to include other contact info!"
                            />
                            <div>
                              <span className="option-label">
                                no replies to this email
                              </span>
                            </div>
                          </label>
                        </label>
                      </div>
                    </div>
                    <fieldset className="json-form-group json-form-group-container contact-form">
                      <legend>phone/text</legend>
                      <div className="json-form-group contact-form ">
                        <label className="json-form-item boolean show_phone_ok variant-checkbox">
                          <input
                            type="checkbox"
                            name="show_phone_ok"
                            defaultValue={1}
                            className="show_phone_ok"
                          />
                          <div className="label-wrapper">
                            <span className="label">show my phone number</span>
                          </div>
                        </label>
                        <div className="json-form-group json-form-group-container contact-form-booleans ">
                          <label
                            className="json-form-item boolean contact_phone_ok variant-checkbox disabled"
                            data-depends-on="show_phone_ok"
                          >
                            <input
                              type="checkbox"
                              name="contact_phone_ok"
                              defaultValue={1}
                              className="contact_phone_ok"
                              disabled
                            />
                            <div className="label-wrapper">
                              <span className="label">phone calls OK</span>
                            </div>
                          </label>
                          <label
                            className="json-form-item boolean contact_text_ok variant-checkbox disabled"
                            data-depends-on="show_phone_ok"
                          >
                            <input
                              type="checkbox"
                              name="contact_text_ok"
                              defaultValue={1}
                              className="contact_text_ok"
                              disabled
                            />
                            <div className="label-wrapper">
                              <span className="label">text/sms OK</span>
                            </div>
                          </label>
                        </div>
                        <div className="json-form-group json-form-group-container contact-form-text ">
                          <label
                            className="json-form-item text contact_phone variant-tel disabled"
                            data-depends-on="show_phone_ok"
                          >
                            <div className="label-wrapper">
                              <span className="label">phone number</span>
                            </div>
                            <label className="input contact_phone short-input">
                              <input
                                className="json-form-input"
                                name="contact_phone"
                                defaultValue
                                tabIndex={1}
                                type="tel"
                                disabled
                              />
                            </label>
                          </label>
                          <label
                            className="json-form-item text contact_phone_extension variant-text disabled"
                            data-depends-on="show_phone_ok"
                          >
                            <div className="label-wrapper">
                              <span className="label">extension</span>
                            </div>
                            <label className="input contact_phone_extension short-input">
                              <input
                                className="json-form-input"
                                name="contact_phone_extension"
                                defaultValue
                                tabIndex={1}
                                type="text"
                                disabled
                              />
                            </label>
                          </label>
                          <label
                            className="json-form-item text contact_name variant-text disabled"
                            data-depends-on="show_phone_ok"
                          >
                            <div className="label-wrapper">
                              <span className="label">contact name</span>
                            </div>
                            <label className="input contact_name">
                              <input
                                className="json-form-input"
                                name="contact_name"
                                defaultValue
                                tabIndex={1}
                                type="text"
                                disabled
                              />
                            </label>
                          </label>
                          <div
                            className="html json-form-item phone-warning disabled"
                            data-depends-on="show_phone_ok"
                          >
                            <div>
                              ignore texts requesting your login or credit card.
                              <a href="https://www.craigslist.org/about/scams?lang=en&cc=gb">
                                avoid scams
                              </a>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </fieldset>
                <fieldset className="json-form-group json-form-group-container location-info">
                  <legend>location info</legend>
                  <div className="json-form-group location-info ">
                    <label className="json-form-item boolean show_address_ok variant-checkbox">
                      <input
                        type="checkbox"
                        name="show_address_ok"
                        defaultValue={1}
                        className="show_address_ok"
                      />
                      <div className="label-wrapper">
                        <span className="label">show address</span>
                      </div>
                    </label>
                    <div className="json-form-group json-form-group-container location-address-fields ">
                      <label
                        className="json-form-item text xstreet0 std variant-text disabled"
                        data-depends-on="show_address_ok"
                      >
                        <div className="label-wrapper">
                          <span className="label">street</span>
                        </div>
                        <label className="input xstreet0">
                          <input
                            className="json-form-input"
                            name="xstreet0"
                            defaultValue
                            tabIndex={1}
                            type="text"
                            disabled
                            maxLength={80}
                          />
                        </label>
                      </label>
                      <label
                        className="json-form-item text xstreet1 street1 variant-text disabled"
                        data-depends-on="show_address_ok"
                      >
                        <div className="label-wrapper">
                          <span className="label">cross street</span>
                        </div>
                        <label className="input xstreet1">
                          <input
                            className="json-form-input"
                            name="xstreet1"
                            defaultValue
                            tabIndex={1}
                            type="text"
                            disabled
                            maxLength={80}
                          />
                        </label>
                      </label>
                      <label
                        className="json-form-item text city std variant-text disabled"
                        data-depends-on="show_address_ok"
                      >
                        <div className="label-wrapper">
                          <span className="label">town/city</span>
                        </div>
                        <label className="input city">
                          <input
                            className="json-form-input"
                            name="city"
                            defaultValue
                            tabIndex={1}
                            type="text"
                            disabled
                            maxLength={80}
                          />
                        </label>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="json-form-group json-form-group-container permission-checkboxes ">
                  <label className="json-form-item boolean disability_ok variant-checkbox">
                    <input
                      type="checkbox"
                      name="disability_ok"
                      defaultValue={1}
                      className="disability_ok"
                      tabIndex={1}
                    />
                    <div className="label-wrapper">
                      <span className="label">
                        ok to highlight this job opening for persons with
                        disabilities
                      </span>
                      <a
                        className="help-link"
                        target="_blank"
                        href="https://www.craigslist.org/about/disabilities?lang=en&cc=gb"
                      >
                        [?]
                      </a>
                    </div>
                  </label>
                </div>
                <div className="json-form-group json-form-group-container submit-buttons ">
                  <div className="submit_button">
                    <button
                      type="submit"
                      name="go"
                      value="continue"
                      className="go big-button submit-button"
                      tabIndex={1}
                    >
                      continue
                    </button>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="cryptedStepCheck"
                  defaultValue="U2FsdGVkX18zMTUyMTMxNWr0oOUw9eQ416rCMJQuxPPZZ5rpawkT2GR3SvBV_QJR"
                  className="cryptedStepCheck"
                />
              </div>
            </div>
          </form>
        </section>
      </article>
      <iframe
        src="https://www.craigslist.org/static/www/localStorage-b2c30773fe82c3d5e475613ad0f725fa9ab277fb.html"
        style={{ display: 'none' }}
      />
      <div
        className="ui-selectmenu-menu ui-front"
        style={{ top: '572px', left: '258px' }}
      >
        <ul
          aria-hidden="true"
          aria-labelledby="ui-id-1-button"
          id="ui-id-1-menu"
          className="ui-menu ui-widget ui-widget-content ui-corner-bottom"
          role="listbox"
          tabIndex={0}
          aria-activedescendant="ui-id-2"
          aria-disabled="false"
          style={{ width: '385px' }}
        >
          <li
            className="ui-menu-item ui-state-focus"
            id="ui-id-2"
            tabIndex={-1}
            role="option"
          >
            -
          </li>
          <li className="ui-menu-item" id="ui-id-3" tabIndex={-1} role="option">
            full-time
          </li>
          <li className="ui-menu-item" id="ui-id-4" tabIndex={-1} role="option">
            part-time
          </li>
          <li className="ui-menu-item" id="ui-id-5" tabIndex={-1} role="option">
            contract
          </li>
          <li className="ui-menu-item" id="ui-id-6" tabIndex={-1} role="option">
            employee's choice
          </li>
        </ul>
      </div>
    </div>
  )
  return <FormPage />
}
