import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("Should load header component with login button", () => {
  // 1. Render the element
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   2. Querying
  //   const login = screen;

  //    3. Assertion
});
