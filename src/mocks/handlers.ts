import { createPhotoPiesces } from "@/app/_dummyData/explorDummy";
import { createFeeds } from "@/app/_dummyData/feedDummy";
import { createStory } from "@/app/_dummyData/userDummy";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/feeds", () => {
    return HttpResponse.json(createFeeds(1));
  }),
  http.get("/stories", () => {
    return HttpResponse.json(createStory(16));
  }),
  http.get("/explore", () => {
    return HttpResponse.json(createPhotoPiesces(45));
  }),
];
