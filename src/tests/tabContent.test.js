import React from "react";
import { render } from "@testing-library/react";
import TabContent from "../Components/tabContent.js";

test("renders learn react link", () => {
  const { getByText } = render(
    <TabContent
      props={{
        mainTabContent: ["Task", "Conversation"],
        subTabContent: ["List", "Gantt"],
      }}
    />
  );
  const linkElement = getByText(/List/i);
  expect(linkElement).toBeInTheDocument();
});
