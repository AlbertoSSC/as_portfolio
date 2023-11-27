import "./App.scss";

import {
  ContactComponent,
  HeaderComponent,
  ProjectsComponent,
  TechStackComponent,
} from "@/pods";
import { FooterLayout, MenuLayout } from "@/layout";

function App() {
  return (
    <>
      <MenuLayout />
      <HeaderComponent />
      <TechStackComponent />
      <ProjectsComponent />
      <ContactComponent />
      <FooterLayout />
    </>
  );
}

export default App;
