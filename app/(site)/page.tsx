
import Header from "@/components/Header"
import ListItem from "@/components/ListItem";

export default function Home() {

  return (
     <div className="bg-neutral-900 overflow-hidden overflow-y-auto w-full rounded-lg h-full">

      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-seibold">
            Welcome back
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
          </div>

        </div>
      </Header>
      <div className="mt-2 mb-7 px-6" >
        <div className="flex items-center  justify-between">
          <h1 className="text-white font-semibold text-2xl">Newest Songs</h1>
        </div>
      </div>
      List of Songs
     </div>
      
  );
}
