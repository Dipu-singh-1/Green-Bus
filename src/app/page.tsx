import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, MapPinIcon, Search, Ticket, CreditCard } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[500px] overflow-hidden">

      <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          src="/video4.mp4" // Replace with your video file path
        />

      <div className="relative z-9 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Get Your Ticket Online,
              <br />
              Easy and Safely
            </h1>
            <Button className="bg-green-500 hover:bg-green-600 text-white text-lg py-3 px-6">
              GET TICKET NOW
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-64 bg-green-200 rounded-full absolute top-0 right-0 -z-10"></div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Ticket</h2>
          <Card className="w-1/2 mt-12 bg-gray-400 bg-opacity-30 shadow-lg rounded-lg p-8 max-w-2xl border-none">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <MapPinIcon className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Pickup Point" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="point1">Point 1</SelectItem>
                    <SelectItem value="point2">Point 2</SelectItem>
                    <SelectItem value="point3">Point 3</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <MapPinIcon className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Dropping Point" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="point1">Point 1</SelectItem>
                    <SelectItem value="point2">Point 2</SelectItem>
                    <SelectItem value="point3">Point 3</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input type="date" className="pl-10" placeholder="Select Date" />
                </div>
              </div>
              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">
                Find Tickets
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      </section>

      <section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Get Your Tickets With Just 3 Steps
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a look at our popular reason, why you should choose you bus. Just a Bus and get a ticket for your great journey!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-lg">
            <CardHeader className="relative pb-14">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-green-500" />
                </div>
                <div className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                  01
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-xl font-semibold mb-4">Search Your Bus</CardTitle>
              <p className="text-gray-600">
                Choose your origin, destination. Just choose a Bus journey dates and search for buses
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <CardHeader className="relative pb-14">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <Ticket className="w-10 h-10 text-green-500" />
                </div>
                <div className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                  02
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-xl font-semibold mb-4">Choose The Ticket</CardTitle>
              <p className="text-gray-600">
                Choose your origin, destination. Just a Bus for your great journey dates and search for buses
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <CardHeader className="relative pb-14">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-10 h-10 text-green-500" />
                </div>
                <div className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                  03
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-xl font-semibold mb-4">Pay Bill</CardTitle>
              <p className="text-gray-600">
                Choose your origin, destination, choose a Bus for your great journey dates and search for buses
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </section>
      
    </main>


  );
}
