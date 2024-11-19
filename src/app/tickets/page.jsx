import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, ArrowRight } from 'lucide-react'

export default function TicketBookingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full bg-gray-400 bg-opacity-30 md:w-64 bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Schedules</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="schedule1" />
                  <Label htmlFor="schedule1" className="ml-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    06:00 am - 03:30 pm
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="schedule2" />
                  <Label htmlFor="schedule2" className="ml-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    07:00 am - 04:00 pm
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="schedule3" />
                  <Label htmlFor="schedule3" className="ml-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    08:00 am - 04:30 pm
                  </Label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Vehicle Type</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="classic" />
                  <Label htmlFor="classic" className="ml-2">Classic</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="coach" />
                  <Label htmlFor="coach" className="ml-2">Coach</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="ac" />
                  <Label htmlFor="ac" className="ml-2">AC</Label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Routes</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="route1" />
                  <Label htmlFor="route1" className="ml-2">Kansas to Echo Bass</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="route2" />
                  <Label htmlFor="route2" className="ml-2">Wichita to Echo Bass</Label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Coach - Kansas - Echo Bass</h2>
                    <p className="text-sm text-gray-500 mb-2">Seat Layout: 2 x 2</p>
                    <p className="text-sm text-yellow-500 mb-4">
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                      Coach
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div>
                        <p className="font-semibold">08:00 AM</p>
                        <p className="text-gray-500">Kansas</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-semibold">04:30 PM</p>
                        <p className="text-gray-500">Echo Bass</p>
                      </div>
                      <div className="text-gray-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        08:30 min
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      <span className="font-semibold">Facilities:</span> Water Bottle
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-500 mb-2">$150.00</p>
                    <p className="text-sm text-purple-500 mb-4">Off Days: Saturday</p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      Select Seat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">AC - Wichita - Echo Bass</h2>
                    <p className="text-sm text-gray-500 mb-2">Seat Layout: 2 x 2</p>
                    <p className="text-sm text-blue-500 mb-4">
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                      AC
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div>
                        <p className="font-semibold">07:00 AM</p>
                        <p className="text-gray-500">Wichita</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-semibold">04:00 PM</p>
                        <p className="text-gray-500">Echo Bass</p>
                      </div>
                      <div className="text-gray-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        09:00 min
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      <span className="font-semibold">Facilities:</span> Water Bottle, Pillow, Wifi
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-500 mb-2">$50.00</p>
                    <p className="text-sm text-purple-500 mb-4">Off Days: Thursday</p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      Select Seat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      {/* Chat Widget */}
      {/* <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
        <p className="font-bold mb-1">We are here!</p>
        <p className="text-sm">Online</p>
      </div> */}
    </div>
  )
}
