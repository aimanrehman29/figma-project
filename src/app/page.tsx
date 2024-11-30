import Featured_works from "./components/featuredWorks";
import Hero from "./components/hero";
import RecentPost from "./components/recentPost";


export default function Home() {
  return (
   <div>
    <Hero/>
    <RecentPost />
    <Featured_works/>
   </div>
  );
}
