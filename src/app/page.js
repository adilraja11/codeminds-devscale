import { AppBar } from "@/components/guest/AppBar";
import { EventList } from "@/components/guest/EventList";

async function getEvents() {
  try {
    const response = await fetch('https://eventmakers-api.fly.dev/events/', {
        cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await getEvents();
  return (
    <div className="space-y-10">
        <AppBar />
        <div className="mx-10 space-y-5">
          <h1>Lorem Ipsum</h1>
          <p className="text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ipsum urna. Maecenas condimentum quis quam id feugiat. Fusce id urna malesuada, interdum diam eget, suscipit quam. Vivamus finibus luctus magna, vel pulvinar nisi eleifend non. Aliquam condimentum est dui, a euismod leo consequat quis. Suspendisse gravida et arcu ut rutrum. Nunc suscipit fringilla purus, vitae lobortis elit gravida dapibus. Vestibulum maximus dolor at orci interdum vestibulum.</p>
          <div className="divider"></div> 
          <h2>Upcoming Events</h2>
          <EventList data={data} />
        </div>
    </div>
  );
}
