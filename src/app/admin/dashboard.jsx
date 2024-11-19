import React from 'react'
import { Bell, ChevronDown, LogOut, Search, Settings, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const paymentData = [
  { name: '1', amount: 0 },
  { name: '2', amount: 0 },
  { name: '3', amount: 0 },
  { name: '4', amount: 0 },
  { name: '5', amount: 0 },
  { name: '6', amount: 2000 },
  { name: '7', amount: 0 },
  { name: '8', amount: 0 },
  { name: '9', amount: 0 },
  { name: '10', amount: 0 },
]

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-green-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white">
        <div className="p-4 flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-500 rounded-sm flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-xl font-bold">ViserBus</span>
        </div>
        <nav className="mt-8">
          <a href="#" className="block py-2 px-4 bg-green-700">Dashboard</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Manage Users</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Payments</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Booking History</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Support Ticket</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Report</a>
          <div className="mt-4 px-4 text-sm">TRANSPORT MANAGER</div>
          <a href="#" className="block py-2 px-4 hover:bg-green-700">Counter</a>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 bg-green-900">
          <div className="text-sm">VISERBUS V2.0</div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center bg-green-100 rounded-md">
              <Search className="h-5 w-5 text-green-500 ml-2" />
              <Input type="search" placeholder="Search here..." className="border-0 bg-transparent" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-green-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5 text-green-600" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="text-green-800">Admin</span>
              <ChevronDown className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-green-50">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-green-800 text-3xl font-medium">Dashboard</h3>

            <div className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="bg-white border-green-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-green-800">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">1142</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-green-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-green-800">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">1124</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-green-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-green-800">Email Unverified Users</CardTitle>
                    <Users className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">18</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-green-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-green-800">Successful Payment</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-green-600"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">$14,375.00 USD</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-green-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-green-800">Pending Payment</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-green-600"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">$5,610.00 USD</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8">
              <Card className="bg-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Latest Booking History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-green-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">PNR Number</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Ticket Count</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-green-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">Mst Morzina Begum</td>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">AQ2HP3T17B</td>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">4</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">Mst Morzina Begum</td>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">SV7BWNS50</td>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">3</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">pankaj sengar</td>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">QHCVPD2ZMO</td>
                          <td className="px-6 py-4 whitespace-nowrap text-green-800">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="bg-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={paymentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f1" />
                      <XAxis dataKey="name" stroke="#2e7d32" />
                      <YAxis stroke="#2e7d32" />
                      <Tooltip />
                      <Bar dataKey="amount" fill="#4caf50" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Login By Browser (Last 30 days)</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for pie chart */}
                  <div className="h-48 bg-green-100 rounded-full"></div>
                </CardContent>
              </Card>
              <Card className="bg-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Login By OS (Last 30 days)</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for pie chart */}
                  <div className="h-48 bg-green-100 rounded-full"></div>
                </CardContent>
              </Card>
              <Card className="bg-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Login By Country (Last 30 days)</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for pie chart */}
                  <div className="h-48 bg-green-100 rounded-full"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}