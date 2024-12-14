"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Bell,
  ChevronDown,
  RefreshCcw,
  Download,
  MoreHorizontal,
} from "lucide-react";

export default function Component() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  // Fetch JSON data
  useEffect(() => {
    fetch("/data/transactions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setTransactions(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r flex flex-col py-4">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-black flex items-center justify-center mr-2">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white"
              fill="currentColor"
            >
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
            </svg>
          </div>
          <span className="font-semibold text-lg">DealNex</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">M&A Deals</h1>
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-64" />
            <Bell className="w-5 h-5 text-gray-500" />
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </header>

        {/* Subheader */}
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <RefreshCcw className="w-5 h-5 text-gray-500" />
            <Download className="w-5 h-5 text-gray-500" />
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto p-6">
          {error ? (
            <div className="text-red-500">Error loading data: {error}</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction Name</TableHead>
                  <TableHead>Deal Structure</TableHead>
                  <TableHead>Industry Sector</TableHead>
                  <TableHead>Buyer's Counsel</TableHead>
                  <TableHead>Seller's Counsel</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Seller</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.transactionName}</TableCell>
                    <TableCell>{transaction.dealStructure}</TableCell>
                    <TableCell>{transaction.industrySector}</TableCell>
                    <TableCell>{transaction.buyersCounsel}</TableCell>
                    <TableCell>{transaction.sellersCounsel}</TableCell>
                    <TableCell>{transaction.buyer}</TableCell>
                    <TableCell>{transaction.seller}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}

