import { META } from "@consumet/extensions";

// <providerName> is the name of the provider you want to use. list of the proivders is below.
const anilist = new META.Anilist();

anilist.search("kimetsu no").then((data) => {
  console.log(data);
});

// anilist
//   .fetchEpisodeSources(
//     "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv-episode-12"
//   )
//   .then((data) => {
//     console.log(data);
//   });
