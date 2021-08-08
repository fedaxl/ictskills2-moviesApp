import React from "react";
import ActorDetails from "../components/actorDetails";
import SampleActor from "./sampleActor";
import { MemoryRouter } from "react-router";
import ActorsContextProvider from "../contexts/actorsContext";

export default {
  title: "Actors Details Page/ActorsDetails",
  component: ActorDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>,
  ],
};

export const Basic = () => <ActorDetails actor={SampleActor} />;

Basic.storyName = "Default";