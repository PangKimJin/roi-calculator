import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import {Row, Column} from 'react-foundation';

function App() {

  const [ hires, setHires ] = useState(300);
  const [ posting, setPosting ] = useState(8);
  const [ scheduling, setScheduling ] = useState(15);
  const [ noShow, setNoShow ] = useState(30);
  const [ onboarding, setOnboarding ] = useState(17);
  const [ roleFilling, setRoleFilling ] = useState(30);
  const [ hiringManagers, setHiringManagers ] = useState(20);
  var hiresValue = parseInt(hires.valueOf());
  var postingValue = parseInt(posting.valueOf());
  var schedulingValue = parseInt(scheduling.valueOf());
  var noShowValue = parseInt(noShow.valueOf());
  var onboardingValue = parseInt(onboarding.valueOf());
  var roleFillingValue = parseInt(roleFilling.valueOf());
  var hiringManagersValue = parseInt(hiringManagers.valueOf());
  var annualSavings = hiresValue * (postingValue + schedulingValue + onboardingValue) * hiringManagersValue / 2;
  var noShowRate = noShowValue / 2;
  var avgOpenRoleDays = roleFillingValue * 0.3;

  return (
    <div className="App">
      <header className="App-header">
        <Row>
        <Column>
            <p>
              Annual Savings of: ${annualSavings} 
              <br></br>
              Your no-show rate goes down to: {noShowRate}%
              <br></br>
              New average days it takes to fill an open role: {avgOpenRoleDays}
            </p>
          </Column>

          <Column>
            <span>
              New Hires per Year: {hires} hires
            </span>
            <RangeSlider
              value={hires}
              onChange={changeEvent => setHires(changeEvent.target.value)}
              tooltip='off'
              max={1000}
            />
            
            <span>
              Hours Spent Posting per Job Opening: {posting} hours
            </span>
            <RangeSlider
              value={posting}
              onChange={changeEvent => setPosting(changeEvent.target.value)}
              tooltip='off'
              max={20}
            />

            <span>
              Hours Spent Scheduling Interviews: {scheduling} hours
            </span>
            <RangeSlider
              value={scheduling}
              onChange={changeEvent => setScheduling(changeEvent.target.value)}
              tooltip='off'
              max={50}
            />

            <span>
              Percent of No-Show Applicants: {noShow}%
            </span>
            <RangeSlider
              value={noShow}
              onChange={changeEvent => setNoShow(changeEvent.target.value)}
              tooltipLabel={currentValue => `${currentValue}%`}
              tooltip='off'
            />

            <span>
              Hours Spent on Onboarding Materials: {onboarding} hours
            </span>
            <RangeSlider
              value={onboarding}
              onChange={changeEvent => setOnboarding(changeEvent.target.value)}
              tooltip='off'
              max={50}
            />

            <span>
              Days Taken to Fill a Role: {roleFilling} days
            </span>
            <RangeSlider
              value={roleFilling}
              onChange={changeEvent => setRoleFilling(changeEvent.target.value)}
              tooltip='off'
            />

            <span>
              Cost of Hiring Managers per Hour: ${hiringManagers}
            </span>
            <RangeSlider
              values={hiringManagers}
              onChange={changeEvent => setHiringManagers(changeEvent.target.value)}
              tooltip='off'
              max={80}
            />
          </Column>

          
        </Row>
      </header>
    </div>
  );
}

export default App;
