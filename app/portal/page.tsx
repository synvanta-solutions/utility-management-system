"use client";
// import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/dashboard/Hero";
import { motion } from 'motion/react';
import { CreditCard,  Droplets, ArrowRight, Bell, Download } from 'lucide-react';
import {
  MOCK_NOTIFICATIONS,
  consumptionTrend,
  currentBill,
} from '@/lib/mock-data';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '../../lib/utils';
import { Button } from '@/components/ui/button';

export default function Main() {
  return (
    <div className="bg-color-background selection:bg-primary/20 px-3 sm:px-4 lg:px-6 pb-10 max-w-7xl mx-auto">
      {/* <Navbar /> */}
      
        <Hero />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Current Bill Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary rounded-[2rem] p-8 text-primary-foreground relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <p className="text-primary-foreground font-bold uppercase tracking-widest text-xs mb-2">Current Statement</p>
              <div className="flex items-end gap-2 mb-8">
                <h3 className="text-5xl font-bold">${currentBill.amount.toFixed(2)}</h3>
                <span className="text-primary-foreground font-medium mb-1">for {currentBill.billingMonth}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                   <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider mb-1">Consumption</p>
                   <p className="text-xl font-bold">{currentBill.consumption} m³</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                   <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider mb-1">Due Date</p>
                   <p className="text-xl font-bold">{currentBill.dueDate}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                >
                  <CreditCard size={18} />
                  Pay Now
                </Button>

                <Button
                  className="bg-(--primary)/50 text-primary-foreground border border-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-(--primary)/70 transition-colors"
                  size="lg"
                >
                  <Download size={18} />
                  Statement
                </Button>
              </div>
            </div>

            {/* Abstract background shapes */}
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-primary rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-[-20%] left-[10%] w-48 h-48 bg-muted rounded-full blur-3xl opacity-[0.06]" />
          </motion.div>

          {/* Consumption Analytics */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">Your Consumption Trend</h3>
              <div className="flex items-center gap-2 text-primary bg-(--primary)/10 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Droplets size={14} />
                Litre Units
              </div>
            </div>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={consumptionTrend}>
                  <XAxis dataKey="month" hide />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'}}
                  />
                  <Area type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={4} fill="var(--primary)" fillOpacity={0.05} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-6 pt-6 border-t border-gray-50 text-center">
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Previous</p>
                  <p className="text-lg font-bold text-gray-900">1,220</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Current</p>
                  <p className="text-lg font-bold text-gray-900">1,250</p>
               </div>
              <div className="text-primary">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Used</p>
                  <p className="text-lg font-bold">30 m³</p>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Notifications Card */}
          <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm overflow-hidden">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Recent Alerts</h3>
                <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-[10px] font-bold">2 New</span>
             </div>
             <div className="space-y-4">
               {MOCK_NOTIFICATIONS.map(note => (
                 <div key={note.id} className="flex gap-3 items-start p-3 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-100 transition-all group">
                    <div className={cn(
                      "p-2 rounded-xl text-white",
                      note.type === 'bill' ? "bg-primary" : "bg-muted"
                    )}>
                      {note.type === 'bill' ? <Bell size={14} /> : <CreditCard size={14} />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">{note.title}</p>
                      <p className="text-[10px] text-gray-500 line-clamp-1 group-hover:line-clamp-none transition-all">{note.message}</p>
                    </div>
                 </div>
               ))}
             </div>
             <button className="w-full mt-6 text-primary text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1 hover:underline">
               View All History <ArrowRight size={12} />
             </button>
          </div>

          {/* QR Verification Card */}
           <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative flex flex-col items-center text-center">
             <div className="w-32 h-32 bg-white p-3 rounded-2xl mb-6 shadow-xl">
                <QRCodeSVG value={currentBill.qrCode || ''} size={104} level="H" />
             </div>
             <h4 className="font-bold mb-2">QR Bill Verification</h4>
             <p className="text-slate-400 text-sm mb-6">Use this code for quick verification at official payment counters.</p>
             <div className="w-full h-px bg-slate-800 mb-6" />
             <div className="flex items-center justify-between w-full">
                <div className="text-left">
                   <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Receipt ID</p>
                   <p className="text-xs font-mono font-medium text-slate-300">RC-2024-9912</p>
                </div>
                <button className="text-muted-foreground hover:text-muted transition-colors">
                   <Download size={18} />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}