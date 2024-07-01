import { createPhotoPiesces } from "@/_dummyData/explorDummy";
import { createFeeds } from "@/_dummyData/feedDummy";
import { createStory } from "@/_dummyData/userDummy";
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
  http.post("/feed", async ({ request }) => {
    const feedData = await request.json();
    return HttpResponse.json(feedData);
  }),
];
