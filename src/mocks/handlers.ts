import { createFeeds } from "@/app/_dummyData/feedDummy";
import { createStory } from "@/app/_dummyData/userDummy";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/feeds", () => {
    return HttpResponse.json(createFeeds(15));
  }),
  http.get("/stories", () => {
    return HttpResponse.json(createStory(16));
  }),
];
