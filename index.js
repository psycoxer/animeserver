// const express = require("express");
import express from "express";
import { META } from "@consumet/extensions";
import _ from "lodash";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
const anilist = new META.Anilist();

app.get("/", (req, res) => {
  //   console.log("Hi");
  res.render("index");
});

app.get("/search/:query", (req, res) => {
  const searchQuery = req.params.query;

  anilist.search(searchQuery).then((data) => {
    // res.json(_.map(data.results, 'title'));
    // res.json(data.results);
    const result = data.results;
    res.render("search", { result });
  });
});

app.get("/anime/:selectedanimeid", (req, res) => {
  const animeid = req.params.selectedanimeid;
  anilist.fetchAnimeInfo(animeid).then((data) => {
    // res.json(data);
    const episodes = data.episodes;
    res.render("episodes", { episodes });
  });
});

app.get("/watch/:id", (req, res) => {
  const episodeId = req.params.id;

  anilist.fetchEpisodeSources(episodeId).then((data) => {
    // res.json(data);
    const sources = data.sources;
    res.render("watch", { sources });
  });
});

app.listen(3000);
