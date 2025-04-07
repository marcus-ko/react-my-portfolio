import ResumeData from '../../data'
import "./Resume.scss"
import Footer from "../Home/Footer"

const Resume = () => {
  return (
    <div className="resume-container">
      <p className="resume-main-title">Resume</p>

      <div className="resume-heading">
        <div className="row">
          <div className="col">
            <p>{ResumeData.basics.name}</p>
            <p>{ResumeData.basics.title}</p>
          </div>
          <div className="col">
            <p>
              {ResumeData.basics.email} <span className="horizontal-spacer">{ResumeData.basics.phone}</span>
            </p>
            <p className="resume-heading__profile-link">
              <a href={ResumeData.basics.profileLink2}>Portfolio</a> <span><a href={ResumeData.basics.profileLink1}>LinkedIn</a></span>
            </p>
          </div>
        </div>
      </div>

      <section className="resume-summary">
        <h2 className="resume-title">{ResumeData.headings.summary}</h2>
        <div className="resume-section__wrapper">
          <p>{ResumeData.skills[0].summary}</p>
        </div>
      </section>

      <section className="resume-technical">
        <h2 className="resume-title">{ResumeData.headings.technical}</h2>
        <div className="resume-section__wrapper">
          <p><strong>Languages:</strong> {ResumeData.technical.languages.join(", ")}</p>
          <p><strong>Frameworks:</strong> {ResumeData.technical.frameworks.join(", ")}</p>
          <p><strong>Tools:</strong> {ResumeData.technical.tools.join(", ")}</p>
          <p><strong>Preprocessors:</strong> {ResumeData.technical.preprocessors.join(", ")}</p>
        </div>
      </section>

      <section className="resume-experience">
        <h2 className="resume-title">{ResumeData.headings.experience}</h2>
        {ResumeData.experience.map((job, i) => (
          <div key={i} className="resume-section__wrapper">
            <p>{job.startDate} - {job.endDate}</p>
            <p><strong>{job.company}</strong> – {job.role}</p>
            <ul>
              {job.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-education">
        <h2 className="resume-title">{ResumeData.headings.education}</h2>
        <div className="resume-section__wrapper">
          {ResumeData.education.map((edu, i) => (
            <p key={i}><strong>{edu.institution}</strong> – {edu.studyType}, {edu.area}</p>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resume