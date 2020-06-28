import CommonServices from "../services/CommonServices.js";
import onTrack from "../../server/jsonFiles/onTrack.json";
import onHold from "../../server/jsonFiles/onHold.json";
import onDelayed from "../../server/jsonFiles/onDelayed.json";
import Board from "../Components/board";
import DisplayCard from "../Components/displayCard";
import { render } from "@testing-library/react";
import React from "react";

describe("Board Component", () => {
  beforeEach(() => {
    CommonServices.getOnTrack = jest
      .fn("12345")
      .mockReturnValue(Promise.resolve(onTrack));
    CommonServices.getOnDelayed = jest
      .fn("12345")
      .mockReturnValue(Promise.resolve(onDelayed));
    CommonServices.getOnHold = jest
      .fn("12345")
      .mockReturnValue(Promise.resolve(onHold));
  });

  it("is mounted onHold", () => {
    const { getByText } = render(<DisplayCard props={onHold} />);
    const linkElement = getByText(/On Hold/i);
    expect(linkElement).toBeInTheDocument();
  });
});
