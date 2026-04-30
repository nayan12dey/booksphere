import Banner from "@/components/Banner";
import BookMarquee from "@/components/BookMarquee";
import FeaturedBooks from "@/components/FeaturedBooks";

import Image from "next/image";

export default function Home() {
  return (
    <div>
        <BookMarquee></BookMarquee>
        <Banner></Banner>
        <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
