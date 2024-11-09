import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 p-6 dark:bg-zinc-900 bg-zinc-50 border border-zinc-200 dark:border-zinc-800 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center text-zinc-800 dark:text-zinc-200">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-xl text-zinc-800 dark:text-zinc-100 mb-2">
              {title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
