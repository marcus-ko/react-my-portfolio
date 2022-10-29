import ResumeData from '../../data'
import "./Resume.scss"
import Footer from "../Home/Footer"

const Resume = () => {
  return(
    <div>
      {ResumeData.map((data, index) => {
        return(
          /* Resume Header */
          <div className="resume-container" key={index}>
          <p className="resume-main-title">Resume</p>
            <div className="resume-heading">
              <ul>
                <div className="row">
                  <div className="col">
                    <li><p>{data.basics.name}</p></li>
                    <li><p>{data.basics.title}</p></li>
                  </div>
                  <div className="col">
                    <li><p>{data.basics.email}<span className="horizontal-spacer">{data.basics.phone}</span></p></li>
                    <li className="resume-heading__profile-link"><a href={data.basics.profileLink2}>github</a><span><a href={data.basics.profileLink1}>LinkedIn</a></span></li>
                  </div>
                </div>
              </ul>
            </div>

            <div className="resume-summary">
                <p className="resume-title">{data.headings.summary}</p>
                <div className="resume-section__wrapper">
                  <p>{data.skills[0].summary}</p>
              </div>
            </div>

            <div className="resume-technical">
              <p className="resume-title">{data.headings.technical}</p>
              <div className="resume-section__wrapper">
              <ul>
                <li>
                  <p>{data.technical.line1}</p>
                </li>
                <li>
                  <p>{data.technical.line2}</p>
                </li>
                <li>
                  <p>{data.technical.line3}</p>
                    <ul>
                      <li><p>{data.technical.line3Indent1}</p></li>
                      <li><p>{data.technical.line3Indent2}</p></li>
                      <li><p>{data.technical.line3Indent3}</p></li>
                        <ul>
                          <li>
                            <p>{data.technical.line3Indent3a}</p>
                          </li>
                          <li>
                            <p>{data.technical.line3Indent3b}</p>
                          </li>
                          <li>
                            <p>{data.technical.line3Indent3c}</p>
                          </li>
                        </ul>
                    </ul>
                </li>
              </ul>
              </div>
            </div>

              <div className="resume-experience">
              {/* work section START */}
                <p className="resume-title">{data.headings.experience}</p>
                <div className="resume-section__wrapper">
                <p>{data.experience[0].startDate} <span> - </span><span>{data.experience[0].endDate} </span></p>
                <p><strong>{data.experience[0].company}</strong></p>
                <ul>
                  <li>
                    <p>{data.experience[0].highlights[0].main}</p>
                  </li>
                  <li>
                    <p>{data.experience[0].highlights[1].secondary}</p>
                  </li>
                  <li>
                    <p>{data.experience[0].highlights[2].additional}</p>
                  </li>
                  <ul>
                    <li>
                      <p>{data.experience[0].highlights[3].keyAchievements1}</p>
                    </li>
                    <li>
                      <p>{data.experience[0].highlights[4].keyAchievements2}</p>
                    </li>
                  </ul>
                </ul>
              </div>
               {/* work section END */}

              {/* work section START */}
              <div className="resume-section__wrapper">
              <p>{data.experience[1].startDate} <span> - </span><span>{data.experience[1].endDate} </span></p>
              <p><strong>{data.experience[1].company}</strong></p>
              <ul>
                <li>
                  <p>{data.experience[1].highlights[0].main}</p>
                </li>
                <li>
                  <p>{data.experience[1].highlights[1].secondary}</p>
                </li>
                <li>
                  <p>{data.experience[1].highlights[2].additional}</p>
                </li>
                <ul>
                  <li>
                    <p>{data.experience[1].highlights[3].keyAchievements1}</p>
                  </li>
                  <li>
                    <p>{data.experience[1].highlights[4].keyAchievements2}</p>
                  </li>
                </ul>
              </ul>
              </div>
              {/* work section END */}

              {/* work section START */}
              <div className="resume-section__wrapper">
              <p>{data.experience[2].startDate} <span> - </span><span>{data.experience[1].endDate} </span></p>
              <p><strong>{data.experience[2].company}</strong></p>
              <ul>
                <li>
                  <p>{data.experience[2].highlights[0].main}</p>
                </li>
                <li>
                  <p>{data.experience[2].highlights[1].secondary}</p>
                </li>
                <ul>
                  <li>
                    <p>{data.experience[2].highlights[3].keyAchievements1}</p>
                  </li>
                  <li>
                    <p>{data.experience[2].highlights[4].keyAchievements2}</p>
                  </li>
                </ul>
              </ul>
              </div>
              {/* work section END */}

              {/* work section START */}
              <div className="resume-section__wrapper">
              <p>{data.experience[2].startDate} <span> - </span><span>{data.experience[1].endDate} </span></p>
              <p><strong>{data.experience[3].company}</strong></p>
              <ul>
                <li>
                  <p>{data.experience[3].highlights[0].main}</p>
                </li>
                <li>
                  <p>{data.experience[3].highlights[1].secondary}</p>
                </li>
                <ul>
                  <li>
                    <p>{data.experience[3].highlights[3].keyAchievements1}</p>
                  </li>
                  <li>
                    <p>{data.experience[3].highlights[4].keyAchievements2}</p>
                  </li>
                </ul>
              </ul>
              </div>
              {/* work section END */}

              <div className="resume-education">
                <p className="resume-title">{data.headings.education}</p>
                <div className="resume-section__wrapper">
                <p><strong>{data.education[0].institution}, </strong>
                  <span> {data.education[0].studyType}, </span>
                  <span> {data.education[0].area}</span>
                  </p>
                  <p><strong>{data.education[1].institution} </strong>
                  <span> {data.education[1].studyType}, </span>
                  <span> {data.education[1].area}</span>
                  </p>
                </div>
              </div>

            </div>  {/* container end */}

          </div>
        )
      })}
      <Footer />
    </div>

  )
}

export default Resume