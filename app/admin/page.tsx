"use client";
// import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/dashboard/Hero";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AnalyticsCharts } from "@/components/dashboard/AnalyticsCharts";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Users, AlertCircle, Wallet, Gauge, } from "lucide-react";

export default function Main() {
  return (
    <div className="bg-color-background selection:bg-primary/20 px-3 sm:px-4 lg:px-6 pb-10 ">
      {/* <Navbar /> */}
      
        <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
          <StatsCard
            title="Total Consumers"
            value="1,284"
            icon={Users}
            trend="+12%"
            isPositive={true}
            delay={0.1}
          />
          <StatsCard
            title="Unpaid Bills"
            value="12 (₱2,450)"
            icon={AlertCircle }
            trend="-2%"
            isPositive={false}
            delay={0.2}
          />
          <StatsCard
            title="Monthly Collections"
            value="₱43,000"
            icon={Wallet}
            trend="+8%"
            isPositive={true}
            delay={0.3}
          />
          <StatsCard
            title="Avg. Consumption"
            value="124.5 m3"
            icon={Gauge}
            trend="+15%"
            isPositive={true}
            delay={0.4}
          />
        </div>
        
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 pt-8">
            <AnalyticsCharts />
          </div>
          <div className="lg:col-span-1 pt-8">
            <RecentActivity />
          </div>
        </div>

      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-foreground/3 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-foreground/2 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}