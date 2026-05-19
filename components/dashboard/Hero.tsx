"use client";
import { motion } from "motion/react";
import { Plus, BarChart2, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsClient } from "@/hooks/useIsClient";

export function Hero() {
  const isClient = useIsClient();

  return (
    <section className="relative overflow-hidden pt-12 pb-8">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-muted/20 to-muted/10 blur-3xl -z-10" />
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={isClient ? { opacity: 0, x: -20 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Welcome back, <span className="font-extrabold">User</span>
          </h1>
          <p className="text-muted-foreground max-w-lg">
            System overview and real-time analytics.
          </p>
        </motion.div>

   
      </div>
    </section>
  );
}
