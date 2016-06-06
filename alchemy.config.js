module.exports = {
  API_KEY: '7899c81a8b05382d7102fd6a6c320f28954b8986',
  getNewsURL: (topic) => {
    return `https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&start=now-1d&end=now&count=10&apikey=${module.exports.API_KEY}&return=enriched.url.url,enriched.url.text,enriched.url.cleanedTitle&q.enriched.url.concepts.concept.text=${topic}`
  },

  getTextURL: (link) => {
    return `http://gateway-a.watsonplatform.net/calls/url/URLGetText?apikey=${module.exports.API_KEY}&outputMode=json&url=${link}`
  }
};

