
"use client";
import Hero from "@/components/shared/linksummary/Hero";
import Demo from "@/components/shared/linksummary/Demo";
import { store } from "@/_utils/store";
import { Provider } from "react-redux";
import "./App.css"
const Page = () => {
  return (
    <Provider store={store}>
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
    </Provider>
  );
};

export default Page;
