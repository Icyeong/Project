import { createFeeds } from "@/app/_dummyData/feedDummy";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/feeds", () => {
    return HttpResponse.json(createFeeds(15));
  }),
];