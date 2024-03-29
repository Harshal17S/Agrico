import { useState } from "react";
import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit"
import Login from "./Login"
import { GoogleGenerativeAI } from "@google/generative-ai"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import ReviewForm from "./components/ReviewForm";
import { Routes, Route } from 'react-router-dom';
const apiKey = "b0e9bc09698df0651d308a4a55081088d35b8ab7b3603c2d";

function App() {

  const [userId, setUserId] = useState();
  const [userIdState, setuserIdState] = useState(false);

  const CheckEmail = (EmailAddrs) => {

    console.log("Email Address is : " + EmailAddrs);

    var emailArray = ["harshal.ingale17@gmail.com"];

    if (emailArray.includes(EmailAddrs)) {
      console.log("You Have Authority to Create Community");
    } else {
      const element = document.querySelectorAll('.actionItemChild');
      element[2].parentElement.style.display = "none";
    }
  }

  const givecall = () => {
    setTimeout(() => {
      setuserIdState(true);
    }, 1000);
  }

  userIdState ? CheckEmail(userId) : console.log("Not Able to Call");

  userId ? givecall() : console.log('userId is loading..');


  return (
    <div className="App">
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <>
          <div className="MainFlexClass">

            <Sidebar />

            

            <AmityUiKitProvider
              key={userId}
              apiKey={apiKey}
              userId={userId}
              displayName={userId}
              socialCommunityCreationButtonVisible>
              <AmityUiKitSocial />
            </AmityUiKitProvider>

          </div>

        </>
      )}
    </div>
  );
}

export default App
