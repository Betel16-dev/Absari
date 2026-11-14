function JobCard({ title, company, location, employmentType }) {
  return (
    <article className="job-card">
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{location}</p>
      {employmentType && <p>{employmentType}</p>}
    </article>
  );
}

export default JobCard;
