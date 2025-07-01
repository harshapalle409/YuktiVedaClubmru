import React, { useState } from 'react';
import './Registrationpage.css';

const Registrationpage = () => {
  const [teamSize, setTeamSize] = useState('');

  const updateMemberFields = (e) => {
    setTeamSize(parseInt(e.target.value));
  };

  const renderMemberFields = () => {
    const members = [];
    const sectionOptions = ['Alpha', 'Beta', 'Gaama', 'Sigma', 'Omega', 'Delta', 'Zeta'];
    const yearOptions = ['1st', '2nd', '3rd', '4th'];

    for (let i = 1; i <= teamSize; i++) {
      members.push(
        <div key={i} className="yvcregistration-member-container">
          <h3 className="yvcregistration-member-title">Member {i} Details</h3>

          <label className="yvcregistration-label">Name:</label>
          <input type="text" name={`member${i}Name`} className="yvcregistration-input" required />

          <label className="yvcregistration-label">Roll Number:</label>
          <input type="text" name={`member${i}Roll`} className="yvcregistration-input" required />

          <label className="yvcregistration-label">Email:</label>
          <input type="email" name={`member${i}Email`} className="yvcregistration-input" required />

          <label className="yvcregistration-label">Phone Number:</label>
          <input type="tel" name={`member${i}Phone`} className="yvcregistration-input" required />

          <label className="yvcregistration-label">Year:</label>
          <select name={`member${i}Year`} className="yvcregistration-select" required>
            <option value="">Select Year</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>{year} Year</option>
            ))}
          </select>

          <label className="yvcregistration-label">Department:</label>
          <input type="text" name={`member${i}Dept`} className="yvcregistration-input" required />

          <label className="yvcregistration-label">Section:</label>
          <select name={`member${i}Section`} className="yvcregistration-select" required>
            <option value="">Select Section</option>
            {sectionOptions.map((section) => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
        </div>
      );
    }
    return members;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const team = {
      teamName: form.teamName.value,
      leaderName: form.leaderName.value,
      leaderRoll: form.leaderRoll.value,
      leaderEmail: form.leaderEmail.value,
      leaderPhone: form.leaderPhone.value,
      leaderYear: form.leaderYear.value,
      leaderDept: form.leaderDept.value,
      leaderSection: form.leaderSection.value
    };

    const members = [];
    for (let i = 1; i <= teamSize; i++) {
      members.push({
        name: form[`member${i}Name`].value,
        roll: form[`member${i}Roll`].value,
        email: form[`member${i}Email`].value,
        phone: form[`member${i}Phone`].value,
        year: form[`member${i}Year`].value,
        dept: form[`member${i}Dept`].value,
        section: form[`member${i}Section`].value
      });
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ team, members })
      });

      const result = await response.text();
      alert(result);
      form.reset();
      setTeamSize('');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form className="yvcregistration-form" onSubmit={handleSubmit}>
      <h2 className="yvcregistration-title">PitchSpark'25 Team Registration</h2>

      {/* Team Info */}
      <label className="yvcregistration-label">Team Name:</label>
      <input type="text" name="teamName" className="yvcregistration-input" required />

      {/* Leader Info */}
      <h3 className="yvcregistration-subtitle">Team Leader Details</h3>

      <label className="yvcregistration-label">Name:</label>
      <input type="text" name="leaderName" className="yvcregistration-input" required />

      <label className="yvcregistration-label">Roll Number:</label>
      <input type="text" name="leaderRoll" className="yvcregistration-input" required />

      <label className="yvcregistration-label">College Email:</label>
      <input type="email" name="leaderEmail" className="yvcregistration-input" required />

      <label className="yvcregistration-label">Phone Number:</label>
      <input type="tel" name="leaderPhone" className="yvcregistration-input" required />

      <label className="yvcregistration-label">Year:</label>
      <select name="leaderYear" className="yvcregistration-select" required>
        <option value="">Select Year</option>
        <option value="1st">1st Year</option>
        <option value="2nd">2nd Year</option>
        <option value="3rd">3rd Year</option>
        <option value="4th">4th Year</option>
      </select>

      <label className="yvcregistration-label">Department:</label>
      <input type="text" name="leaderDept" className="yvcregistration-input" required />

      <label className="yvcregistration-label">Section:</label>
      <select name="leaderSection" className="yvcregistration-select" required>
        <option value="">Select Section</option>
        <option value="Alpha">Alpha</option>
        <option value="Beta">Beta</option>
        <option value="Gaama">Gaama</option>
        <option value="Sigma">Sigma</option>
        <option value="Omega">Omega</option>
        <option value="Delta">Delta</option>
        <option value="Zeta">Zeta</option>
      </select>

      {/* Team Size */}
      <label className="yvcregistration-label">Number of Team Members:</label>
      <select onChange={updateMemberFields} value={teamSize} className="yvcregistration-select" required>
        <option value="">Select</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      {/* Member Fields */}
      <div className="yvcregistration-members-container">
        {renderMemberFields()}
      </div>

      <button type="submit" className="yvcregistration-button">Register Team</button>
    </form>
  );
};

export default Registrationpage;
