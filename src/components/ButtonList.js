import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Live",
    "Cricket",
    "Gaming",
    "News",
    "Love songs",
    "Motivations",
    "Game shows",
    "Bollywood Music",
    "Football",
    "Football1",
    "Football2",
    "Football3",
    "Football4",
    "Football5",
    "Football6",
    "Football7",
    "Football8",
    "Football9",
    "Football10",
  ];
  return (
    <div className="flex flex-nowrap overflow-x-scroll">
      {buttons.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
