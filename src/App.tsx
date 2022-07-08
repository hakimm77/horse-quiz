import React, { useEffect, useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "./screens/About";
import Search from "./screens/Search";
import { Signup } from "./screens/auth/Signup";
import { Login } from "./screens/auth/Login";
import Quizzes from "./screens/Quizzes";
import QuizPage from "./screens/QuizPage";
import AdminPage from "./screens/AdminPage";
import AddQuiz from "./screens/AddQuiz";
import PaymentScreen from "./screens/PaymentScreen";
import PlayQuiz from "./screens/PlayQuiz";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        userSelect: "none",
        userDrag: "none",
      },
    },
  },
});

const App = () => {
  const [userID, setUserID] = useState(localStorage.getItem("USER"));

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
          <Route path="/quizzes" component={Quizzes} />
          <Route path="/quiz/:name" component={QuizPage} />
          <Route path="/play-quiz/:id" component={PlayQuiz} />
          <Route path="/payment/:id" component={PaymentScreen} />

          <Route path="/admin-page" component={AdminPage} />
          <Route path="/add-quiz-page" component={AddQuiz} />
          {!userID && (
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Redirect from="*" exact={true} to={"/home"} />
            </Switch>
          )}
          <Redirect from="*" exact={true} to={"/home"} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
