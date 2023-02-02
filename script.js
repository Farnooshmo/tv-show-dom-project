//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function getSeasonAndEpisodeFormat(episode) {
  const { season, number } = episode;
  const paddedSeason = season.toString().padStart(2, "0");
  const paddedEpisode = number.toString().padStart(2, "0");

  return `S${paddedSeason}E${paddedEpisode}`;
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach((episode) => {
    // add episode's name and the season
    const episodeName = document.createElement("h5");
    episodeName.innerText = `${getSeasonAndEpisodeFormat(episode)}: ${
      episode.name
    }`;
    rootElem.appendChild(episodeName);

    // add the image
    const image = document.createElement("img");
    image.src = episode.image.medium;
    rootElem.appendChild(image);

    //add the paragraph
    rootElem.innerHTML += episode.summary;
  });
}

window.onload = setup;
