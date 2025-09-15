import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Header />
      <Body />

      {/* 
        - Header
        - Body
            - Sidebar
              - MenuItems
            - MainContainer
              - ButtonList
              - VideoContainer
                - VideoCard
      */}
    </div>
  );
}

export default App;
