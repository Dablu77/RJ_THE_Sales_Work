import "./App.css";
import settingLogo from "./img/Icon.svg";
import Companysetting from "./img/Company.svg";
import Customizations from "./img/Customizations.svg";
import Integrations from "./img/Integrations.svg";
import Notifications from "./img/Notifications.svg";
import Privacysharing from "./img/Privacysharing.svg";
import Globalpreferences from "./img/Globalpreferences.svg";
import Automation from "./img/Automation.svg";
import AuditLogs from "./img/AuditLogs.svg";
import Api from "./img/API.svg";
import Subscription from "./img/Subscription.svg";

function App() {
  return (
    <div className="body">
      <div className="SettingText">
        <h3>Settings</h3>
      </div>
      <div className="parentCard">
        <div className="containermain">
          <div className="card">
            <div className="container">
              <img src={settingLogo} alt="settingLogo" className="logosvg" />
              <div className="subText">Personal Settings</div>
              <p>
                Provide personal details and how we can reach you, set working
                hours
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img
                src={Companysetting}
                alt="Companysetting"
                className="logosvg"
              />
              <div className="subText">Company Settings</div>
              <p>Add Users, Roles & Permissions & Teams</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img
                src={Customizations}
                alt="Customizations"
                className="logosvg"
              />
              <div className="subText">Customizations</div>
              <p>Fields, Layouts & Modules</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img src={Integrations} alt="Integrations" className="logosvg" />
              <div className="subText">Integrations</div>
              <p>Integrate with 200+ Applications</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img
                src={Notifications}
                alt="Notifications"
                className="logosvg"
              />
              <div className="subText">Notifications</div>
              <p>Configure Notifications which can be sent to Teams</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img
                src={Privacysharing}
                alt="Privacysharing"
                className="logosvg"
              />
              <div className="subText">Privacy & sharing</div>
              <p>
                Manage your personal data, connected services, and data sharing
                settings
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img
                src={Globalpreferences}
                alt="Globalpreferences"
                className="logosvg"
              />
              <div className="subText">Global preferences</div>
              <p>Set your default language, currency, and timezone</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img src={Automation} alt="Automation" className="logosvg" />
              <div className="subText">Automation</div>
              <p>Add a work email for business trip benefits</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img src={AuditLogs} alt="AuditLogs" className="logosvg" />
              <div className="subText">Audit & Logs</div>
              <p>All Activities By Users</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img src={Api} alt="Api" className="logosvg" />
              <div className="subText">API</div>
              <p>Generate Access Token and APIs</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <img src={Subscription} alt="Subscription" className="logosvg" />
              <div className="subText">Subscription</div>
              <p>View Invoices and Subscription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
