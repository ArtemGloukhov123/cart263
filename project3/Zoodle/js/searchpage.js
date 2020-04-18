"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let searchTerm = localStorage.getItem("searchTermVal");
let vpnVal = localStorage.getItem('hasVPN');

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $('#smalllogo').on('click', function() {
    window.location.href = 'Zoodle.html';
  });

  document.getElementById("smalllogo").style.cursor = "pointer";

  document.getElementById('searchbar').value = searchTerm;


  displaySearchResults();
}

//displays different search results depending on whether the user got the VPN or not
function displaySearchResults() {
  if (vpnVal === "true") {
    let caseNum = getCaseNum();
    switch (caseNum) {
      case 0:
        $('#title1').html("Letter: Just to clarify, the Leader is a dictator");

        $('#description1').html("2 days ago - Being critical of the Leader would cause the unfortunate person to disappear or suddenly die “accidentally” and without an explanation. Such was ...");

        $('#title1').on('click', function() {
          window.location.href = 'https://www.seacoastonline.com/opinion/20200417/letter-just-to-clarify-xi-jinping-is-dictator';
        });

        $('#title2').html("TOTAL BAN: China Wants to Ban ALL Online Gaming and Chats After Animal Crossing Mishap?");

        $('#title2').on('click', function() {
          window.location.href = 'https://www.techtimes.com/articles/248867/20200415/total-ban-china-wants-to-ban-all-online-gaming-and-chats-after-animal-crossing-mishap.htm';
        });

        $('#description2').html("2 days ago - China Reportedly Bans Online Gaming and Chats After Animal Crossing Mishap. (Photo : Photo by Stem List on Unsplash) TOTAL BAN?:");

        break;
      case 1:
        $('#title1').html("Coronavirus: The nation's officials didn’t warn public of likely pandemic for 6 days");

        $('#title1').on('click', function() {
          window.location.href = 'https://globalnews.ca/news/6821056/coronavirus-china-pandemic-6-days/';
        });

        $('#description1').html("3 days ago - The Leader warned the public on the seventh day, Jan. 20. But by that time, more than 3,000 people had been infected during almost a week of public silence ...");

        $('#title2').html("How the Nation's propaganda is reframing the coronavirus narrative");

        $('#title2').on('click', function() {
          window.location.href = 'https://www.dw.com/en/how-chinese-propaganda-is-reframing-the-coronavirus-narrative/a-52796337';
        });

        $('#description2').html("Mar 16, 2020 - How the nation's propaganda is reframing the coronavirus narrative. As new cases of COVID-19 drop, experts say Beijing has started to ...");
        break;
      case 2:
        $('#title1').html("Animal Crossing Banned in China After In-Game Protests");

        $('#title1').on('click', function() {
          window.location.href = 'https://www.essentiallysports.com/animal-crossing-banned-in-china-after-in-game-protests-esports-news-hong-kong-2020/';
        });

        $('#description1').html("1 day ago - Protestors take to Animal Crossing. The residents of Hong-Kong had taken to vehemently protest against the Chinese government for months ...");

        $('#title2').html("Animal Crossing game removed from sale in China over Hong Kong democracy messages");

        $('#title2').on('click', function() {
          window.location.href = 'https://www.theguardian.com/world/2020/apr/14/animal-crossing-game-removed-from-sale-in-china-over-hong-kong-democracy-messages';
        });

        $('#description2').html("Apr. 13, 2020 - The Nintendo Switch game, Animal Crossing: New Horizons, has been removed from sale on websites in China, after it was used by Hong ...");
        break;
      case 3:
        $('#title1').html("China's great firewall and the war to control the internet");

        $('#title1').on('click', function() {
          window.location.href = 'https://www.newscientist.com/article/mg24132210-400-chinas-great-firewall-and-the-war-to-control-the-internet/';
        });

        $('#description1').html("Mar 12, 2019 - The Great Firewall of China is a riveting read, revealing the questionable acts of states and corporations as they vie to shape the internet to their ...");

        $('#title2').html("The great firewall of China: Xi Jinping’s internet shutdown");

        $('#title2').on('click', function() {
          window.location.href = 'https://www.theguardian.com/news/2018/jun/29/the-great-firewall-of-china-xi-jinpings-internet-shutdown';
        });

        $('#description2').html("Jun 29, 2018 - The long read: Before Xi Jinping, the internet was becoming a more vibrant political space for Chinese citizens. But today the country has the ...");
        break;
    }
    document.getElementById("title1").style.cursor = "pointer";
    document.getElementById("title2").style.cursor = "pointer";
  } else {
    let caseNum = getCaseNum();
    switch (caseNum) {
      case 0:
        $('#title1').html("Great Leader makes ¥7,500,000 donation to feed poorer communities");

        $('#description1').html("1 day ago - Earlier today, our Great Leader personally delivered a check worth ¥7,500,000 to feed those in less wealthy communities. As always, efforts are made to keep this nation the best it can be ...");

        $('#title2').html("Great efforts made by Great Leader to fight off Western devils");

        $('#description2').html("Mar 20, 2020 - Great Leader active in the fight against Western forces trying to ruin our great nation through propaganda and war. Many such attempts include brainwashing, trying to make Great Leader look bad ...");
        break;
      case 1:
        $('#title1').html("People all over Great Nation gather in happiness over elimination of Coronavirus");

        $('#description1').html("Apr 12, 2020 - The nation's best doctors have successfully stopped all spread of the disease and men, women, and children of all ages are as happy as they could be, gathering in the streets, laughing, playing, and dancing ...");

        $('#title2').html("COVID-19 Possibly Sent from the West, Great Leader says");

        $('#description2').html("3 days ago - Although the American devils have sent this biological weapon into our nation in order to stop our commerce, our great doctors were able to cure it ... ");
        break;
      case 2:
        $('#title1').html("American propaganda to be stopped in video games");

        $('#description1').html("2 days ago - Recent games such as the latest Animal Crossing have been featuring the possibility of American propaganda, trying to brainwash children into believing their lies. A bill may be passed so as to ...");

        $('#title2').html("");

        $('#description2').html("");
        break;
      case 3:
        $('#didyoumean').html("Did you mean: ")
        $('#suggestion').html("Great Wall of China?")

        $('#title1').html("");

        $('#description1').html("Your search - Great Firewall - did not match any documents.");

        $('#title2').html("");

        $('#description2').html("");
        break;
    }
  }

}

function getCaseNum() {
  let caseNum;

  if (searchTerm === "Great Leader") {
    caseNum = 0;
  }
  if (searchTerm === "Coronavirus") {
    caseNum = 1;
  }
  if (searchTerm === "Online Gaming") {
    caseNum = 2;
  }
  if (searchTerm === "Great Firewall") {
    caseNum = 3;
  }
  return caseNum;
}
