import React from "react";
import { render } from "@testing-library/react";
import Drawer from "../Components/drawer";

test("renders learn react link", () => {
  const { getByText } = render(
    <Drawer
      props={{
        title: "CBSE: Grade 5 Maths - Algebra",
        userName: "Milky James",
        userID: "12345",
        mainTabContent: ["Task", "Conversation"],
        subTabContent: ["List", "Gantt"],
      }}
    />
  );
  const linkElement = getByText(/Milky James/i);
  expect(linkElement).toBeInTheDocument();
});
