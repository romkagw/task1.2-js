let city =
  "49.04,28.12,Жмеринка,3734\n" +
  "47.53,35.23,Запоріжжя,815256\n" +
  "45.11,33.28,Євпаторія,105915\n" +
  "#48.56,24.53,Івано-Франківськ,218359\n" +
  "#48.43,26.45,Камянець-Подільський,99610\n" +
  "\n" +
  "45.20,36.38,Керч,157007\n" +
  "50.27,30.30,Київ,2611327";

   let text = "Жмеринка другий по кількості населееня в Україне. Київ столиця України."

function csvParser(text) {
  let saveText = text
    .split("\n")
    .filter((item) => item && !item.startsWith("#"))
    .map((item) => {
      item = item.split(",");
      return {
        x: +item[0],
        y: +item[1],
        name: item[2],
        population: +[item[3]],
      };
    })
    .sort((a, b) => b["population"] - a["population"])
    .slice(0, 10)
    .reduce((obj, item, index) => {
      obj[item.name] = { population: item.population, rating: index + 1 };
      return obj;
    }, {});

  return (texts) => {
    Object.keys(saveText)
    .forEach((cityName) => {
        if (texts.includes(cityName)) {
           texts = texts.replace(cityName,
          `${cityName} (${saveText[cityName].rating} место в ТОП-10 самых крупных городов Украины, население ${saveText[cityName].population} человек)`);
        }
    });
return texts;
};

}

console.log(csvParser(city)(text));
